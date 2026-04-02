import React, { useState, useEffect } from 'react'
import './index.css'
import Home from './components/Home'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Experience from './components/Experience'
import ExtraCurricular from './components/ExtraCurricular'
import Projects from './components/Projects'
import Contact from './components/Contact'
import StarryBackground from './components/StarryBackground'
import { Home as HomeIcon, Briefcase, User, Settings, FileText, Mail, BookOpen } from 'lucide-react';

function App() {
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, { threshold: 0.5 }); // Section is 'active' if 50% is visible

    sections.forEach(section => observer.observe(section));
    
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <main className="app-container">
      <StarryBackground />
      <nav className="side-nav">
        <a href="#home" className={activeLink === '#home' ? 'active' : ''} onClick={() => setActiveLink('#home')} title="Home"><HomeIcon size={20} /><span className="nav-label">Home</span></a>
        <a href="#profile" className={activeLink === '#profile' ? 'active' : ''} onClick={() => setActiveLink('#profile')} title="Profile"><User size={20} /><span className="nav-label">Profile</span></a>
        <a href="#experience" className={activeLink === '#experience' ? 'active' : ''} onClick={() => setActiveLink('#experience')} title="Experience"><BookOpen size={20} /><span className="nav-label">Experience</span></a>
        <a href="#skills" className={activeLink === '#skills' ? 'active' : ''} onClick={() => setActiveLink('#skills')} title="Skills"><Settings size={20} /><span className="nav-label">Skills</span></a>
        <a href="#extra-curricular" className={activeLink === '#extra-curricular' ? 'active' : ''} onClick={() => setActiveLink('#extra-curricular')} title="Achievements"><FileText size={20} /><span className="nav-label">Achievements</span></a>
        <a href="#projects" className={activeLink === '#projects' ? 'active' : ''} onClick={() => setActiveLink('#projects')} title="Projects"><Briefcase size={20} /><span className="nav-label">Projects</span></a>
        <a href="#contact" className={activeLink === '#contact' ? 'active' : ''} onClick={() => setActiveLink('#contact')} title="Contact"><Mail size={20} /><span className="nav-label">Contact</span></a>
      </nav>
      
      <Home />
      <Profile />
      <Experience />
      <Skills />
      <ExtraCurricular />
      <Projects />
      <Contact />
      
      <footer className="footer">
        <p>&copy; 2026 Ritvik Katakam Portfolio</p>
      </footer>
    </main>
  );
}

export default App;
