const { spawn } = require('child_process')
const path = require('path')

const nodeExecutable = process.execPath
const npmCliPath = process.env.npm_execpath

if (!npmCliPath) {
  console.error('npm CLI path not found. Run this script using npm run dev.')
  process.exit(1)
}

const services = [
  { name: 'backend', cwd: path.resolve(__dirname, '..', 'backend') },
  { name: 'frontend', cwd: path.resolve(__dirname, '..', 'frontend') }
]

const children = services.map((service) =>
  spawn(nodeExecutable, [npmCliPath, 'run', 'dev'], {
    cwd: service.cwd,
    stdio: 'inherit'
  })
)

let shuttingDown = false

const shutdown = (exitCode = 0) => {
  if (shuttingDown) return
  shuttingDown = true

  for (const child of children) {
    if (!child.killed) {
      child.kill('SIGINT')
    }
  }

  setTimeout(() => process.exit(exitCode), 200)
}

children.forEach((child, index) => {
  child.on('exit', (code) => {
    const serviceName = services[index].name
    if (code && code !== 0) {
      console.error(`${serviceName} exited with code ${code}`)
      shutdown(code)
      return
    }

    if (!shuttingDown) {
      shutdown(0)
    }
  })

  child.on('error', (error) => {
    const serviceName = services[index].name
    console.error(`Failed to start ${serviceName}:`, error.message)
    shutdown(1)
  })
})

process.on('SIGINT', () => shutdown(0))
process.on('SIGTERM', () => shutdown(0))
