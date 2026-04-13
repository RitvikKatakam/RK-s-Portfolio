import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import robotImg from '../assets/profile-ai-robot.jpg';

const Home = () => {
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [8, -8]);
  const rotateY = useTransform(x, [0, 400], [-8, 8]);

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
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          font-weight: 700;
          background: linear-gradient(90deg, #60a5fa, #6366f1);
          color: #fff;
          background-clip: text;
          text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          position: relative;
          z-index: 2;
          text-shadow: 0 4px 15px rgba(99, 102, 241, 0.15); /* Very subtle depth */
        }

        .name-container {
          position: relative;
          display: inline-block;
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
          color: var(--neon-cyan);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          margin-bottom: 2rem;
          font-family: 'Inter', sans-serif;
          background: rgba(var(--neon-cyan-rgb), 0.08);
          border: 1px solid rgba(var(--neon-cyan-rgb), 0.2);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.6rem 2.2rem;
          border-radius: 9999px;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .cyber-role:hover {
          background: rgba(var(--neon-cyan-rgb), 0.12);
          border-color: rgba(var(--neon-cyan-rgb), 0.4);
          transform: translateY(-2px);
          box-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.4);
        }

        .hero-radial-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(var(--neon-cyan-rgb), 0.03) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        .bg-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          z-index: 0;
          opacity: 0.15;
          pointer-events: none;
          animation: blob-float 20s infinite alternate;
        }

        .blob-orange { width: 400px; height: 400px; background: #f97316; top: 10%; right: 10%; animation-delay: 0s; }
        .blob-purple { width: 500px; height: 500px; background: #a78bfa; bottom: 10%; left: 5%; animation-delay: -5s; }
        .blob-blue { width: 350px; height: 350px; background: #3b82f6; top: 40%; left: 30%; animation-delay: -10s; }

        @keyframes blob-float {
          from { transform: translate(0, 0) scale(1); }
          to { transform: translate(50px, 100px) scale(1.1); }
        }

        .neon-btn-primary {
          background: var(--neon-cyan);
          color: #000;
          padding: 0.8rem 2.2rem;
          font-weight: 700;
          border-radius: 12px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          border: none;
        }

        .neon-btn-primary:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 10px 40px rgba(var(--neon-cyan-rgb), 0.3);
          color: #000;
        }

        .neon-btn-outline {
          background: rgba(255, 255, 255, 0.03);
          color: #fff;
          padding: 0.8rem 2.2rem;
          font-weight: 700;
          border-radius: 12px;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
          backdrop-filter: blur(10px);
        }

        .neon-btn-outline:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
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
      <div className="bg-blob blob-orange"></div>
      <div className="bg-blob blob-purple"></div>
      <div className="bg-blob blob-blue"></div>
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
