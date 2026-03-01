import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Services.css'

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    // Fetch services from backend
    axios.get('/api/services')
      .then(response => setServices(response.data))
      .catch(error => {
        console.log('Using fallback services')
        setServices([
          { id: 1, title: 'Software Solutions', description: 'Custom software development and enterprise applications tailored to your business needs' },
          { id: 2, title: 'Defense Solutions', description: 'Advanced defense systems and security solutions for mission-critical operations' },
          { id: 3, title: 'AI Solutions', description: 'Cutting-edge artificial intelligence and machine learning solutions that drive innovation' },
        ])
      })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section className="services">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>
      
      <motion.div 
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            className="service-card"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              boxShadow: "0 20px 40px rgba(255, 107, 53, 0.3)"
            }}
          >
            <div className="service-icon">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ⚡
              </motion.div>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Services
