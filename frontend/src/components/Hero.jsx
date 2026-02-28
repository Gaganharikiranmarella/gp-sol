import { motion } from 'framer-motion'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="hero-title"
          animate={{ 
            backgroundPosition: ['0%', '100%'],
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            repeatType: 'reverse' 
          }}
        >
          GP Solutions
        </motion.h1>
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Innovative Solutions for Modern Challenges
        </motion.p>
        <motion.div 
          className="hero-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          <motion.button 
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="hero-circle"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </section>
  )
}

export default Hero
