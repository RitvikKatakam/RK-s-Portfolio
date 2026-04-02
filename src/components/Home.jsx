import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import robotImg from '../assets/profile-ai-robot.jpg';

const Home = () => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [15, -15]);
  const rotateY = useTransform(x, [0, 400], [-15, 15]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    x.set(200);
    y.set(200);
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const [typedText, setTypedText] = useState("");
  const fullText = "Full Stack Developer | AI Enthusiast";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="section space-hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      
      <div className="hero-radial-glow"></div>

      <motion.div 
        className="hero-flex-container modern-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ zIndex: 10, width: '100%', maxWidth: '1200px', margin: '0 auto' }}
      >
        <div className="space-hero-content" style={{ flex: 1 }}>
          <motion.h1 variants={itemVariants} className="space-title" style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '1rem', color: 'white', fontWeight: 900 }}>
            Hi, I'm <br />
            <span className="gradient-text-hero">Ritvik Katakam</span>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="typewriter-text" style={{ fontSize: '2rem', fontWeight: 'bold', color: '#e4e4e7', marginBottom: '1.5rem', minHeight: '3rem' }}>
            {typedText}<motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} style={{ color: 'var(--neon-cyan)' }}>|</motion.span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="space-desc" style={{ fontSize: '1.15rem', maxWidth: '550px', marginBottom: '2.5rem', color: '#a1a1aa', lineHeight: '1.6' }}>
            Building immersive digital experiences driven by logic and creativity. Transforming complex problems into sleek, robust, and scalable solutions.
          </motion.p>
          
          <motion.div variants={itemVariants} className="hero-btn-group" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#projects" className="btn-primary-glow">View Projects</a>
            <a href="#contact" className="btn-secondary-outline">Contact Me</a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-3d-interactive"
          variants={itemVariants}
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
          style={{ 
            perspective: 1200, 
            position: 'relative', 
            width: '450px', 
            height: '450px',
            cursor: 'grab',
            flexShrink: 0
          }}
        >
          <motion.div
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
              width: "100%",
              height: "100%",
              position: 'relative',
              borderRadius: '1.5rem'
            }}
            animate={{
              y: [0, -20, 0],   // Floating effect
            }}
            transition={{
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <div className="hero-3d-glass-card">
              <img src={robotImg} alt="AI Hero" className="hero-robot-3d" />
            </div>

            {/* Layered Shadows inside 3d transform for depth */}
            <div className="hero-3d-shadow"></div>

            {/* Floating Tech Icons Layered on 3D Context */}
            <motion.div 
              style={{ position: 'absolute', top: '-10%', left: '-10%', transform: "translateZ(80px)" }}
              animate={{ y: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <img src="/languages/react.png" width="80" alt="React" className="float-icon-glow" />
            </motion.div>

            <motion.div 
              style={{ position: 'absolute', bottom: '-10%', right: '-5%', transform: "translateZ(120px)" }}
              animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
            >
              <img src="/languages/python.png" width="70" alt="Python" className="float-icon-glow" />
            </motion.div>

            <motion.div 
              style={{ position: 'absolute', top: '20%', right: '-15%', transform: "translateZ(60px)" }}
              animate={{ y: [0, 12, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
            >
              <img src="/languages/node.png" width="60" alt="Node" className="float-icon-glow" />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
