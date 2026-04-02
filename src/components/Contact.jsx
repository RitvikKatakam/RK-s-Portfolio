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
            <a href="https://www.linkedin.com/in/ritvik-katakam-894221381/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', borderRadius: '2rem' }}>
              <img src="/social/linkedin.png" alt="LinkedIn" style={{ width: '20px', height: '20px', filter: 'brightness(1.2)' }} />
              <span className="social-name">LinkedIn</span>
            </a>
            <a href="mailto:katakamritvik047@gmail.com" className="social-icon" title="Email" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', borderRadius: '2rem' }}>
              <img src="/social/mail.png" alt="Email" style={{ width: '24px', height: '24px' }} />
              <span className="social-name">Email</span>
            </a>
            <a href="https://github.com/RitvikKatakam" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.6rem 1.2rem', borderRadius: '2rem' }}>
              <img src="/social/github.png" alt="GitHub" style={{ width: '22px', height: '22px' }} />
              <span className="social-name">GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="contact-grid">
          <div className="contact-3d-wrapper">
            <img src={contactLogo} alt="3D Contact Developer" className="contact-3d-logo" style={{ filter: 'drop-shadow(0 0 15px rgba(0, 245, 255, 0.4))' }} />
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
