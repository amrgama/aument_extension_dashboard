import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/hero-section/HeroSection'
import Features from './components/features/Features'
import ContactUs from './components/contact-us/ContactUs'
import Pricing from './components/pricing/Pricing'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="min-h-screen bg-slate-100">
      <HeroSection />
      <Features />
      <Pricing />
      <ContactUs />
   </div>
  )
}

export default App
