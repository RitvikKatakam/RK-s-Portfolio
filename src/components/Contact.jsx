import React from 'react';
import { Mail } from 'lucide-react';
import contactLogo from '../assets/contact-3d-dev.png';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-wrapper">
        <div className="contact-text-header">
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>Get In Touch</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.25rem', marginBottom: '2rem' }}>Interested in working together? Drop me a message.</p>

          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.linkedin.com/in/ritvik-katakam-894221381/" target="_blank" rel="noopener noreferrer" className="social-pill">
              <img src="/social/linkedin.png" alt="LinkedIn" style={{ width: '18px', height: '18px', filter: 'brightness(1.5) grayscale(100%)' }} />
              <span>LinkedIn</span>
            </a>
            
            <a href="mailto:katakamritvik047@gmail.com" className="social-pill active-pill">
              <Mail size={18} />
              <span>katakamritvik047@gmail.com</span>
            </a>

            <a href="mailto:katakamritvik1@gmail.com" className="social-pill active-pill">
              <Mail size={18} />
              <span>katakamritvik1@gmail.com</span>
            </a>

            <a href="https://github.com/RitvikKatakam" target="_blank" rel="noopener noreferrer" className="social-pill">
              <img src="/social/github.png" alt="GitHub" style={{ width: '18px', height: '18px', filter: 'brightness(1.5)' }} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="contact-grid" style={{ marginTop: '4rem' }}>
          <div className="contact-3d-wrapper">
            <img src={contactLogo} alt="3D Contact Developer" className="contact-3d-logo" />
          </div>

          <form action="https://formsubmit.co/katakamritvik047@gmail.com" method="POST" className="contact-form">
            <input type="hidden" name="_subject" value="New submission from Portfolio!" />
            <input type="hidden" name="_captcha" value="false" />
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn" style={{ cursor: 'pointer' }}>Send Message</button>
          </form>
        </div>
      </div>

      <style>{`
        .social-pill {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.8rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.03);
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
        }

        .social-pill:hover {
          background: rgba(var(--neon-cyan-rgb), 0.1);
          border-color: var(--neon-cyan);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .active-pill {
          background: rgba(var(--neon-cyan-rgb), 0.15);
          border-color: var(--neon-cyan);
          box-shadow: 0 0 20px rgba(var(--neon-cyan-rgb), 0.2);
        }
      `}</style>
    </section>
  );
};

export default Contact;
