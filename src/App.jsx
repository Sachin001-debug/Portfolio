
import Navbar from './pages/Navbar/Navbar'
import Hero from './pages/Hero/Hero'
import ContactMe from './pages/ContactMe/ContactMe'
import Footer from './pages/Footer/Footer'
import HirePopup from './components/HirePopup'
import { useState } from 'react'

import Projects from './pages/Projects/Projects'
import AboutMe from './pages/About/AboutMe'

const App = () => {
    const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Navbar setShowForm={setShowForm}/>
      <Hero setShowForm={setShowForm}/>
      <HirePopup showForm={showForm} setShowForm={setShowForm} />
      <AboutMe/>
      <Projects/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default App
