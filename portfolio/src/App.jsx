import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';

function App() {


  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden">
      <Navbar />
      
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><TechStack /></section>
        <section id="projects"><Projects /></section>
         <section id='certificates'><Certificates/></section>
        <section id="blogs"><Blogs /></section>
        <section id="contact"><Contact /></section>
       
      </main>

      <Footer />
    </div>
  );
}

export default App;