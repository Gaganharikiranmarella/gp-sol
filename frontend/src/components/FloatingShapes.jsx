import { motion } from 'framer-motion'
import '../styles/FloatingShapes.css'

const FloatingShapes = () => {
  const shapes = [
    { id: 1, size: 100, delay: 0, duration: 15 },
    { id: 2, size: 80, delay: 2, duration: 20 },
    { id: 3, size: 120, delay: 4, duration: 18 },
    { id: 4, size: 90, delay: 1, duration: 22 },
    { id: 5, size: 70, delay: 3, duration: 16 },
  ]

  return (
    <div className="floating-shapes">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="shape"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default FloatingShapes
