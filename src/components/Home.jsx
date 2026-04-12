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
  const fullText = "Life is a game — I play to solve, learn, and innovate.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="section space-hero-section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
      
      <style>{`
        .cyber-name {
          font-family: 'Orbitron', 'Inter', sans-serif;
          background: linear-gradient(90deg, var(--neon-cyan), #8a2be2, var(--neon-magenta));
          background-size: 200% auto;
          color: #fff;
          background-clip: text;
          text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: cyber-gradient 3s linear infinite;
          text-shadow: 0px 0px 20px rgba(var(--neon-cyan-rgb), 0.6), 0px 0px 40px rgba(var(--neon-magenta-rgb), 0.4);
          position: relative;
          z-index: 2;
        }

        .name-container {
          position: relative;
          display: inline-block;
        }

        .name-glow-line {
          position: absolute;
          top: 50%;
          left: -10%;
          width: 120%;
          height: 8px;
          background: linear-gradient(90deg, transparent, rgba(var(--neon-cyan-rgb), 0.5), rgba(var(--neon-magenta-rgb), 0.5), transparent);
          filter: blur(8px);
          transform: translateY(-50%);
          z-index: 1;
          pointer-events: none;
        }

        @keyframes cyber-gradient {
          to {
            background-position: 200% center;
          }
        }

        .cyber-tagline {
          font-family: 'Inter', sans-serif;
          font-style: italic;
          font-size: 1.8rem;
          background: linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0px 0px 10px rgba(var(--neon-cyan-rgb), 0.3);
          animation: pulse-glow 2s infinite alternate;
        }

        @keyframes pulse-glow {
          from { text-shadow: 0px 0px 10px rgba(var(--neon-cyan-rgb), 0.3); }
          to { text-shadow: 0px 0px 20px rgba(var(--neon-magenta-rgb), 0.6); }
        }

        .cyber-role {
          color: #94a3b8;
          font-size: 1.25rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 2rem;
          font-family: 'Inter', monospace;
          background: rgba(var(--neon-cyan-rgb), 0.05);
          border: 1px solid rgba(var(--neon-cyan-rgb), 0.2);
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 4px;
        }

        .neon-btn-primary {
          background: linear-gradient(90deg, var(--neon-cyan), #8a2be2, var(--neon-magenta));
          background-size: 200% auto;
          color: white;
          padding: 0.8rem 2rem;
          font-weight: 700;
          border-radius: 4px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          box-shadow: 0 0 15px rgba(var(--neon-cyan-rgb), 0.4);
          border: none;
          animation: cyber-gradient 4s linear infinite;
        }

        .neon-btn-primary:hover {
          box-shadow: 0 0 30px rgba(var(--neon-magenta-rgb), 0.8);
          transform: scale(1.05);
          color: white;
        }

        .neon-btn-outline {
          background: transparent;
          color: var(--neon-cyan);
          padding: 0.8rem 2rem;
          font-weight: 700;
          border-radius: 4px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 2px solid var(--neon-cyan);
          transition: all 0.3s ease;
          box-shadow: 0 0 10px rgba(var(--neon-cyan-rgb), 0.2) inset, 0 0 10px rgba(var(--neon-cyan-rgb), 0.2);
        }

        .neon-btn-outline:hover {
          background: rgba(var(--neon-cyan-rgb), 0.1);
          box-shadow: 0 0 20px rgba(var(--neon-cyan-rgb), 0.6) inset, 0 0 20px rgba(var(--neon-cyan-rgb), 0.6);
          color: #fff;
          transform: scale(1.05);
          border-color: var(--neon-magenta);
        }
          
        .hero-particles {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
          background-image: radial-gradient(circle, rgba(var(--neon-cyan-rgb), 0.15) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: particle-move 20s linear infinite;
          opacity: 0.4;
        }
        
        @keyframes particle-move {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
      `}</style>
      
      <div className="hero-radial-glow"></div>
      <div className="hero-particles"></div>

      <motion.div 
        className="hero-flex-container modern-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ zIndex: 10, width: '100%', maxWidth: '1200px', margin: '0 auto', position: 'relative' }}
      >
        <div className="space-hero-content" style={{ flex: 1 }}>
          <motion.div variants={itemVariants} className="cyber-role">
            Full Stack Developer | AI Enthusiast
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="space-title" style={{ fontSize: '5.5rem', lineHeight: '1.2', marginBottom: '1.5rem', color: 'white', fontWeight: 900 }}>
            <span style={{ fontSize: '3rem', color: '#a1a1aa' }}>Hi, I'm</span> <br />
            <div className="name-container">
              <div className="name-glow-line"></div>
              <span className="cyber-name">Ritvik Katakam</span>
            </div>
          </motion.h1>
          
          <motion.h2 variants={itemVariants} style={{ marginBottom: '2.5rem', minHeight: '5.5rem', maxWidth: '600px', display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <span className="cyber-tagline">{typedText}</span>
            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} style={{ color: 'var(--neon-cyan)', fontSize: '1.8rem', marginLeft: '5px', textShadow: '0 0 10px var(--neon-cyan)' }}>|</motion.span>
          </motion.h2>
          
          <motion.div variants={itemVariants} className="hero-btn-group" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <a href="#projects" className="neon-btn-primary">View Projects</a>
            <a href="#contact" className="neon-btn-outline">Contact Me</a>
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
              y: [0, -20, 0],
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

            <div className="hero-3d-shadow"></div>

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
