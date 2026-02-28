import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import servicesRouter from './routes/services.js'
import contactRouter from './routes/contact.js'
import { initDatabase } from './database/init.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Initialize database
await initDatabase()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api/services', servicesRouter)
app.use('/api/contact', contactRouter)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'GP Solutions API is running' })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`)
})
