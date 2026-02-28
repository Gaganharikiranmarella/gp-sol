import { motion } from 'framer-motion'
import { useState } from 'react'
import axios from 'axios'
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/contact', formData)
      setStatus('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus('Error sending message. Please try again.')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="contact">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>
      
      <motion.form 
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          whileFocus={{ scale: 1.02 }}
        />
        <motion.textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          whileFocus={{ scale: 1.02 }}
        />
        <motion.button 
          type="submit"
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
        {status && <p className="status-message">{status}</p>}
      </motion.form>
    </section>
  )
}

export default Contact
