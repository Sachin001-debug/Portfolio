import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: "-100px 0px -100px 0px" }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#050505] text-white min-h-screen overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><TechStack /></section>
        <section id="projects"><Projects /></section>
        <section id="blogs"><Blogs /></section>
        <section id="contact"><Contact /></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;