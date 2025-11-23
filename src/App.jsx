import React from 'react'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import SkillSection from './components/SkillSection'
import AboutSection from './components/AboutSection'
import { StarBackGround } from './components/StartBackGround'
import PricingSection from './components/PricingSection'
import GraphicsSection from './components/GraphicsSection'
import ContactSection from './components/ContactSection'

const App = () => {
  return (
    <div className=''>
      <StarBackGround />
      <div className=''>
        <NavBar />
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <PricingSection />
        <GraphicsSection />
        <ContactSection />
        <Footer /> 
      </div>
    </div>
  )
}

export default App