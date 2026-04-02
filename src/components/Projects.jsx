import React, { useState } from 'react';
import eduWriteLogo from '../assets/edu_write_logo.png';
import dsaAssistantLogo from '../assets/dsa_ai_assistant_logo.png';
import brainWaveLogo from '../assets/brain_wave_ai_logo.png';
import { Folder, FileCode, X } from 'lucide-react';

const Projects = () => {
  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
  const [showAllRT, setShowAllRT] = useState(false);

  const mlProjects = [
    { title: 'Face Detection System', desc: 'A real-time face detection system built using machine learning techniques.', github: 'https://github.com/RitvikKatakam/facedetectionsystem' },
    { title: 'BMS – Bank Management System (Java)', desc: 'A Full Stack Bank Management System with features like account creation, transactions, and user management.', github: 'https://github.com/RitvikKatakam/BMS' },
    { title: 'Hate Speech Detection using NLP & Machine Learning', desc: 'Developed an NLP-based system to detect and classify hate speech in social media text, enabling automated identification of harmful and offensive content to promote safer online interactions.', github: 'https://github.com/RitvikKatakam/hatespeechdetectionusing_twitter_dataset' }
  ];

  const archiveProjects = [
    { name: 'jarvis-ai', type: 'folder', url: 'https://github.com/RitvikKatakam/jarvis-ai' },
    { name: 'creditcardfrauddetection', type: 'folder', url: 'https://github.com/RitvikKatakam/nitk_projects/tree/main/data%20science' },
    { name: 'emergency_vehicle_dispatch', type: 'folder', url: 'https://github.com/RitvikKatakam/nitk_projects/tree/main/daa' },
    { name: 'intrusion_detection_system', type: 'folder', url: 'https://github.com/RitvikKatakam/nitk_projects/tree/main/ml' },
    { name: 'phonebook_management.cpp', type: 'file', url: 'https://github.com/RitvikKatakam/nitk_projects/blob/main/c%2B%2B_PhonebookMangement.cpp' },
    { name: 'qr_code_generator.py', type: 'file', url: 'https://github.com/RitvikKatakam/nitk_projects/blob/main/python_QRcodeGenerator' },
    { name: 'locating_darker_pixel_grovers', type: 'folder', url: 'https://github.com/RitvikKatakam/nitk_projects/tree/main/qc' }
  ];

  const realTimeProjects = [
    { 
      title: 'eduWrite', 
      desc: 'AI-driven writing assistant designed for educational environments.',
      url: 'https://ai-driven-edu-write.vercel.app/',
      logo: eduWriteLogo,
      github: null
    },
    { 
      title: 'DSA AI Assistant', 
      desc: 'Smart assistant for data structures and algorithms learning.',
      url: 'https://dsa-ai-assistant--aimaster956.replit.app/#groq-answer',
      logo: dsaAssistantLogo,
      github: 'https://github.com/RitvikKatakam/DSA_Ai_Assistant_Flask'
    },
    { 
      title: 'Brain Wave AI', 
      desc: 'AI powered brain activity monitoring and intelligence analytics.',
      url: 'https://brainwaveai.streamlit.app/',
      logo: brainWaveLogo,
      github: 'https://github.com/RitvikKatakam/chatapp_using_Groq'
    }
  ];

  const displayedRT = showAllRT ? realTimeProjects : realTimeProjects.slice(0, 3);

  return (
    <section id="projects" className="section projects-section">
      <div className="content">
        <h2 className="section-title">Projects</h2>
        
        <div className="portfolio-division">
          <div className="project-category">
            <h3 className="category-title">Core Projects</h3>
            <div className="projects-grid">
              {mlProjects.map((project, index) => (
                <div key={index} className="project-card">
                  <div className="card-header">
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.desc}</p>
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" onClick={e => e.stopPropagation()}>View Code ⌥</a>
                  ) : (
                    <div className="project-link" style={{ opacity: 0.5 }}>View Details →</div>
                  )}
                </div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button 
                className="btn-secondary-outline" 
                style={{ cursor: 'pointer', padding: '0.6rem 1.8rem', fontSize: '0.95rem' }}
                onClick={() => setIsFolderModalOpen(true)}
              >
                View More
              </button>
            </div>
          </div>

          <div className="project-category">
            <h3 className="category-title">Real Time Projects</h3>
            <div className="projects-grid">
              {displayedRT.map((project, index) => (
                <div key={index} className="project-card realtime-card">
                  <div className="card-logo">
                    <img src={project.logo} alt={project.title} />
                  </div>
                  <div className="card-content">
                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>
                    <div className="card-actions">
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link" onClick={e => e.stopPropagation()}>Visit Website →</a>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github-link" onClick={e => e.stopPropagation()}>View Code ⌥</a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {realTimeProjects.length > 3 && (
              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button 
                  className="btn-secondary-outline" 
                  style={{ cursor: 'pointer', padding: '0.6rem 1.8rem', fontSize: '0.95rem' }}
                  onClick={() => setShowAllRT(!showAllRT)}
                >
                  {showAllRT ? "Show Less" : "See More"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Code Editor Style Folder Modal */}
      {isFolderModalOpen && (
        <div className="folder-modal-overlay" onClick={() => setIsFolderModalOpen(false)}>
          <div className="folder-modal-content" onClick={e => e.stopPropagation()}>
            <div className="folder-modal-header">
              <div className="window-controls">
                <span className="close-dot red-dot" onClick={() => setIsFolderModalOpen(false)}></span>
                <span className="close-dot yellow-dot"></span>
                <span className="close-dot green-dot"></span>
              </div>
              <span className="window-title">~/projects/archive</span>
              <button className="modal-close-btn-clean" onClick={() => setIsFolderModalOpen(false)}>
                 <X size={18} />
              </button>
            </div>
            
            <div className="folder-modal-body">
              <div className="directory-sidebar">
                <span className="sidebar-title">EXPLORER</span>
                <span className="sidebar-sub">❯ PORTFOLIO</span>
                <span className="sidebar-sub active">▼ ARCHIVE</span>
              </div>
              <ul className="directory-list">
                {archiveProjects.map((proj, idx) => (
                  <li key={idx} className="directory-item">
                    <a href={proj.url} target="_blank" rel="noopener noreferrer" className="directory-link">
                      {proj.type === 'folder' ? <Folder size={18} className="folder-icon" /> : <FileCode size={18} className="file-icon" />}
                      <span className="directory-name">{proj.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
