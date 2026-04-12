import React from 'react';
import contactLogo from '../assets/contact-3d-dev.png';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-wrapper">
        <div className="contact-text-header">
          <h2>Get In Touch</h2>
          <p>Interested in working together? Drop me a message.</p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            <a href="https://www.linkedin.com/in/ritvik-katakam-894221381/" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.5rem', borderRadius: '2rem', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--neon-cyan)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(var(--neon-cyan-rgb), 0.4)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}>
              <img src="/social/linkedin.png" alt="LinkedIn" style={{ width: '22px', height: '22px', filter: 'brightness(1.2)' }} />
              <span style={{ fontWeight: '600' }}>LinkedIn</span>
            </a>
            <a href="mailto:katakamritvik047@gmail.com" title="Email" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.5rem', borderRadius: '2rem', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--neon-cyan)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(var(--neon-cyan-rgb), 0.4)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}>
              <img src="/social/mail.png" alt="Email" style={{ width: '24px', height: '24px' }} />
              <span style={{ fontWeight: '600' }}>Email</span>
            </a>
            <a href="https://github.com/RitvikKatakam" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.5rem', borderRadius: '2rem', border: '1px solid rgba(255, 255, 255, 0.2)', color: 'white', textDecoration: 'none', transition: 'all 0.3s ease' }} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--neon-cyan)'; e.currentTarget.style.boxShadow = '0 0 15px rgba(var(--neon-cyan-rgb), 0.4)'; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}>
              <img src="/social/github.png" alt="GitHub" style={{ width: '22px', height: '22px' }} />
              <span style={{ fontWeight: '600' }}>GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="contact-grid">
          <div className="contact-3d-wrapper">
            <img src={contactLogo} alt="3D Contact Developer" className="contact-3d-logo" style={{ filter: 'drop-shadow(0 0 15px rgba(var(--neon-cyan-rgb), 0.4))' }} />
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
    </section>
  );
};

export default Contact;
