import { execAsync, getAsync, runAsync } from './connection.js'

export const initDatabase = async () => {
  // Create services table
  await execAsync(`
    CREATE TABLE IF NOT EXISTS services (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Create contacts table
  await execAsync(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      message TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `)

  // Insert default services if table is empty
  const count = await getAsync('SELECT COUNT(*) as count FROM services')
  
  if (count.count === 0) {
    const services = [
      ['Software Solutions', 'Custom software development and enterprise applications tailored to your business needs'],
      ['Defense Solutions', 'Advanced defense systems and security solutions for mission-critical operations'],
      ['AI Solutions', 'Cutting-edge artificial intelligence and machine learning solutions that drive innovation']
    ]
    
    for (const service of services) {
      await runAsync('INSERT INTO services (title, description) VALUES (?, ?)', service)
    }
    
    console.log('✅ Database initialized with default services')
  }
}
