import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Mail, Copy, Check, Loader2, Send } from 'lucide-react';
import contactLogo from '../assets/contact-3d-dev.png';

const Contact = () => {
  const form = useRef();
  const [isMailOpen, setIsMailOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: '' });

  // Obfuscated email parts
  const primaryParts = ["katakamritvik047", "gmail.com"];
  const secondaryParts = ["katakamritvik1", "gmail.com"];

  const handleCopy = (parts) => {
    const email = parts[0] + "@" + parts[1];
    try {
      navigator.clipboard.writeText(email);
    } catch(err) {
      console.warn("Clipboard restricted", err);
    }
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
    
    // Also trigger native mail client automatically after slight delay
    setTimeout(() => {
      window.location.href = `mailto:${email}`;
    }, 500);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    // IMPORTANT: Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setIsSubmitting(false);
          setSubmitStatus({ type: 'success', message: 'Message sent successfully 🚀' });
          e.target.reset(); // Clear form
      }, (error) => {
          setIsSubmitting(false);
          setSubmitStatus({ type: 'error', message: 'Failed to send message. Please select an email from the Emails button to contact me directly.' });
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-wrapper">
        <div className="contact-text-header">
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>Get In Touch</h2>
          <p style={{ color: '#94a3b8', fontSize: '1.25rem', marginBottom: '2rem' }}>Interested in working together? Drop me a message.</p>

          <div style={{ display: 'flex', gap: '1.2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://www.linkedin.com/in/ritvik-katakam-894221381/" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="LinkedIn">
              <img src="/social/linkedin.png" alt="LinkedIn" style={{ width: '18px', height: '18px', filter: 'brightness(1.5) grayscale(100%)' }} />
              <span>LinkedIn</span>
            </a>
            
            <button onClick={() => setIsMailOpen(true)} className="social-pill active-pill" aria-label="Open Emails Box">
              <Mail size={18} />
              <span>Emails</span>
            </button>

            <a href="https://github.com/RitvikKatakam" target="_blank" rel="noopener noreferrer" className="social-pill" aria-label="GitHub">
              <img src="/social/github.png" alt="GitHub" style={{ width: '18px', height: '18px', filter: 'brightness(1.5)' }} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="contact-grid" style={{ marginTop: '4rem' }}>
          <div className="contact-3d-wrapper">
            <img src={contactLogo} alt="3D Contact Developer" className="contact-3d-logo" />
          </div>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input type="text" name="user_name" placeholder="Name" required className="form-input" />
            </div>
            <div className="form-group">
              <input type="email" name="user_email" placeholder="Email" required className="form-input" />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Message" rows="5" required className="form-input"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="submit-btn smooth-btn">
              {isSubmitting ? (
                <><Loader2 className="spinner" size={18} /> Sending...</>
              ) : (
                <><Send size={18} style={{ marginRight: '8px' }} /> Send Message</>
              )}
            </button>
            {submitStatus.message && (
              <div className={`status-message ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>

      {/* Confidential Email Box / Modal */}
      <AnimatePresence>
        {isMailOpen && (
          <div className="mac-modal-overlay" onClick={() => setIsMailOpen(false)}>
            <motion.div 
              className="mac-window" 
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="mac-header">
                <div className="mac-dots">
                  <span className="mac-dot red" onClick={() => setIsMailOpen(false)}></span>
                  <span className="mac-dot yellow"></span>
                  <span className="mac-dot green"></span>
                </div>
                <span className="mac-title">Mail.app</span>
              </div>
              
              <div className="mac-body">
                <div className="mail-intro">
                  <Mail size={40} className="mail-icon-large" />
                  <h3>Confidential Information</h3>
                  <p>Click below to copy email and securely open your mail client.</p>
                </div>

                <div className="email-list-mac">
                  <div className="email-item-mac">
                    <button className="email-link-mac" onClick={() => handleCopy(primaryParts)}>
                      <Mail size={16} />
                      <span>{primaryParts[0]}@{primaryParts[1]}</span>
                    </button>
                    <button className="mac-copy-btn" onClick={() => handleCopy(primaryParts)} title="Copy to clipboard">
                      {copiedEmail === `${primaryParts[0]}@${primaryParts[1]}` ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                    </button>
                  </div>

                  <div className="email-item-mac">
                    <button className="email-link-mac" onClick={() => handleCopy(secondaryParts)}>
                      <Mail size={16} />
                      <span>{secondaryParts[0]}@{secondaryParts[1]}</span>
                    </button>
                    <button className="mac-copy-btn" onClick={() => handleCopy(secondaryParts)} title="Copy to clipboard">
                      {copiedEmail === `${secondaryParts[0]}@${secondaryParts[1]}` ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style>{`
        .social-pill {
          position: relative;
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
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .active-pill {
          background: rgba(var(--neon-cyan-rgb), 0.15);
          border-color: var(--neon-cyan);
          box-shadow: 0 0 20px rgba(var(--neon-cyan-rgb), 0.2);
        }

        .form-input {
          width: 100%;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-family: 'Inter', sans-serif;
          transition: all 0.3s ease;
        }

        .form-input:focus {
          outline: none;
          border-color: var(--neon-cyan);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 0 4px rgba(var(--neon-cyan-rgb), 0.1);
        }

        .smooth-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .smooth-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        .spinner {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        .status-message {
          margin-top: 1rem;
          padding: 1rem;
          border-radius: 8px;
          font-weight: 500;
          text-align: center;
          font-size: 0.9rem;
          animation: fadeSlideIn 0.3s ease-out;
        }

        .status-message.success {
          background: rgba(34, 197, 94, 0.1);
          color: #4ade80;
          border: 1px solid rgba(34, 197, 94, 0.2);
        }

        .status-message.error {
          background: rgba(239, 68, 68, 0.1);
          color: #f87171;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* macOS Modal Styles */
        .mac-modal-overlay {
          position: fixed;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10002;
        }

        .mac-window {
          background: rgba(20, 20, 25, 0.85);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          width: 90%;
          max-width: 450px;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6);
        }

        .mac-header {
          background: rgba(255, 255, 255, 0.05);
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mac-dots {
          display: flex;
          gap: 8px;
        }

        .mac-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          cursor: pointer;
        }

        .red { background: #ff5f56; }
        .yellow { background: #ffbd2e; }
        .green { background: #27c93f; }

        .mac-title {
          flex-grow: 1;
          text-align: center;
          font-size: 0.85rem;
          color: #a1a1aa;
          font-weight: 500;
          margin-right: 48px;
        }

        .mac-body {
          padding: 2.5rem;
          text-align: center;
        }

        .mail-intro {
          margin-bottom: 2rem;
        }

        .mail-icon-large {
          color: var(--neon-cyan);
          margin-bottom: 1rem;
          filter: drop-shadow(0 0 15px rgba(var(--neon-cyan-rgb), 0.5));
        }

        .mac-body h3 {
          font-size: 1.5rem;
          color: white;
          margin-bottom: 0.5rem;
        }

        .mac-body p {
          color: #94a3b8;
          font-size: 0.95rem;
        }

        .email-list-mac {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .email-item-mac {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1rem;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .email-item-mac:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: rgba(var(--neon-cyan-rgb), 0.3);
        }

        .email-link-mac {
          flex-grow: 1;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: white;
          text-decoration: none;
          font-size: 0.95rem;
          font-family: var(--font-mono);
          transition: color 0.2s;
          background: none;
          border: none;
          cursor: pointer;
        }

        .email-link-mac:hover {
          color: var(--neon-cyan);
        }

        .mac-copy-btn {
          background: transparent;
          border: none;
          color: #71717a;
          cursor: pointer;
          transition: color 0.2s;
          padding: 5px;
          border-radius: 4px;
        }

        .mac-copy-btn:hover {
          color: var(--neon-cyan);
          background: rgba(255,255,255,0.05);
        }
      `}</style>
    </section>
  );
};

export default Contact;
