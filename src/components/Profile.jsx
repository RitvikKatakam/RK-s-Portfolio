import React, { useState } from 'react';
import profileImg from '../assets/profile.jpg';
import { Globe, Mail, Code, X, Copy, Check } from 'lucide-react';

const Profile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(null);

  const emails = [
    "katakamritvik047@gmail.com",
    "katakamritvik1@gmail.com"
  ];

  const handleCopy = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="profile" className="section modern-profile-section" style={{ position: 'relative' }}>
      <div className="modern-hero-container">
        {/* Left Sidebar Card */}
        <div className="hero-sidebar">
          <div className="sidebar-header">
            <h2 className="sidebar-name">Ritvik<br/>Katakam</h2>
            <span className="sidebar-role">Full Stack<br/>Developer</span>
          </div>
          
          <div className="sidebar-img-wrapper">
             <img src={profileImg} alt="Ritvik Katakam" className="sidebar-img" />
          </div>
          
          <div className="sidebar-info-group">
            <div className="sidebar-info">
              <h4 className="info-label">Specialization:</h4>
              <p className="info-value">Full Stack Developer And<br/>UI/UX Designer</p>
            </div>
            <div className="sidebar-info">
              <h4 className="info-label">Based in:</h4>
              <p className="info-value">Hyderabad, India</p>
            </div>
          </div>

          <div className="sidebar-socials" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', marginTop: '2rem' }}>
            <a href="https://www.linkedin.com/in/ritvik-katakam-894221381/" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem 1.2rem', borderRadius: '0.8rem' }}>
              <img src="/social/linkedin.png" alt="LinkedIn" style={{ width: '24px', height: '24px', filter: 'brightness(1.2)' }} />
              <span className="social-name">LinkedIn</span>
            </a>
            <button className="social-icon" title="Email" onClick={() => setIsModalOpen(true)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem 1.2rem', borderRadius: '0.8rem', background: 'transparent' }}>
              <img src="/social/mail.png" alt="Email" style={{ width: '28px', height: '28px' }} />
              <span className="social-name">Email</span>
            </button>
            <a href="https://github.com/RitvikKatakam" target="_blank" rel="noopener noreferrer" className="social-icon" title="GitHub" style={{ width: '100%', display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.8rem 1.2rem', borderRadius: '0.8rem' }}>
              <img src="/social/github.png" alt="GitHub" style={{ width: '26px', height: '26px' }} />
              <span className="social-name">GitHub</span>
            </a>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="hero-main">
          
          <h1 className="hero-title">
            I'm Ritvik Katakam,<br/>Full Stack Developer
          </h1>
          
          <p className="profile-bio" style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: '1.7', maxWidth: '700px', marginBottom: '2.5rem' }}>
            Full Stack Developer with a strong foundation in artificial intelligence and data-driven applications. Experienced in building scalable web solutions and applying machine learning techniques to solve real-world problems. Proficient in modern technologies and committed to continuous learning and delivering high-quality, impactful results.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn-primary">My Projects</a>
            <a href="https://drive.google.com/file/d/1afKBnZlAzsCbXX6zoAQjE5EZwKImoppk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-secondary">Download CV</a>
          </div>

        </div>
      </div>

      {/* Email Modal */}
      {isModalOpen && (
        <div className="email-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="email-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <h3 className="modal-title">Contact Me</h3>
            <p className="modal-subtitle">Pick an email address to reach out.</p>
            
            <div className="email-list">
              {emails.map((email, index) => (
                <div key={index} className="email-item">
                  <a href={`mailto:${email}`} className="email-link">
                    <Mail size={18} />
                    {email}
                  </a>
                  <button 
                    className="copy-btn" 
                    onClick={() => handleCopy(email)}
                    title="Copy to clipboard"
                  >
                    {copiedEmail === email ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Profile;
