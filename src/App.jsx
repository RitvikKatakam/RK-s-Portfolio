import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useSpring, useTransform } from 'framer-motion'
import './index.css'
import Home from './components/Home'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Experience from './components/Experience'
import ExtraCurricular from './components/ExtraCurricular'
import Projects from './components/Projects'
import Contact from './components/Contact'
import StarryBackground from './components/StarryBackground'
import GlobalGlow from './components/GlobalGlow'
import { Home as HomeIcon, Briefcase, User, Settings, FileText, Mail, BookOpen } from 'lucide-react';

const SectionWrapper = ({ children, id }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, rotateX: 5 }}
    whileInView={{ 
      opacity: 1, 
      scale: 1, 
      rotateX: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }}
    viewport={{ once: false, amount: 0.1 }}
    style={{ transformStyle: 'preserve-3d' }}
    className="section-parallax-wrapper"
  >
    {children}
  </motion.div>
);

function App() {
  const [activeLink, setActiveLink] = useState('#home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
    
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <main className="app-container">
      <motion.div className="scroll-progress-bar" style={{ scaleX, transformOrigin: "0%" }} />
      <StarryBackground />
      <GlobalGlow />
      
      <nav className="side-nav">
        <a href="#home" className={activeLink === '#home' ? 'active' : ''} onClick={() => setActiveLink('#home')} title="Home"><HomeIcon size={20} /><span className="nav-label">Home</span></a>
        <a href="#profile" className={activeLink === '#profile' ? 'active' : ''} onClick={() => setActiveLink('#profile')} title="Profile"><User size={20} /><span className="nav-label">Profile</span></a>
        <a href="#experience" className={activeLink === '#experience' ? 'active' : ''} onClick={() => setActiveLink('#experience')} title="Experience"><BookOpen size={20} /><span className="nav-label">Experience</span></a>
        <a href="#skills" className={activeLink === '#skills' ? 'active' : ''} onClick={() => setActiveLink('#skills')} title="Skills"><Settings size={20} /><span className="nav-label">Skills</span></a>
        <a href="#extra-curricular" className={activeLink === '#extra-curricular' ? 'active' : ''} onClick={() => setActiveLink('#extra-curricular')} title="Achievements"><FileText size={20} /><span className="nav-label">Achievements</span></a>
        <a href="#projects" className={activeLink === '#projects' ? 'active' : ''} onClick={() => setActiveLink('#projects')} title="Projects"><Briefcase size={20} /><span className="nav-label">Projects</span></a>
        <a href="#contact" className={activeLink === '#contact' ? 'active' : ''} onClick={() => setActiveLink('#contact')} title="Contact"><Mail size={20} /><span className="nav-label">Contact</span></a>
      </nav>
      
      <SectionWrapper id="home"><Home /></SectionWrapper>
      <SectionWrapper id="profile"><Profile /></SectionWrapper>
      <SectionWrapper id="experience"><Experience /></SectionWrapper>
      <SectionWrapper id="skills"><Skills /></SectionWrapper>
      <SectionWrapper id="extra-curricular"><ExtraCurricular /></SectionWrapper>
      <SectionWrapper id="projects"><Projects /></SectionWrapper>
      <SectionWrapper id="contact"><Contact /></SectionWrapper>
      
      <footer className="footer">
        <p>&copy; 2026 Ritvik Katakam Portfolio</p>
      </footer>
    </main>
  );
}

export default App;
