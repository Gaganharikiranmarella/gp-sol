import { useState } from 'react'
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import FloatingShapes from './components/FloatingShapes'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <FloatingShapes />
      <Hero />
      <Services />
      <Contact />
    </div>
  )
}

export default App
