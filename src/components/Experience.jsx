import React from 'react';
import { GraduationCap, Briefcase, Calendar, User, Code2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="content">
        <h2 className="section-title neon-text">Experience & Education</h2>
        
        <div className="experience-timeline-container">
          {/* Education Card */}
          <div className="experience-card-item">
            <div className="experience-card">
              <div className="experience-card-header">
                <GraduationCap size={32} className="expr-icon" />
                <h3>Education</h3>
              </div>
              
              <div className="expr-body">
                <div className="expr-detail" style={{ alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                  <img src="/Experience & Education/nitk.png" alt="NITK Logo" className="expr-org-logo" />
                  <span className="expr-highlight" style={{ fontSize: '1.25rem', display: 'block' }}>
                    NITK (National Institute of Technology Karnataka)
                  </span>
                </div>
                
                <div className="expr-detail">
                  <Code2 size={18} className="expr-icon-small" />
                  <span>B.Tech in Artificial Intelligence (Intelligent Technologies & Techniques)</span>
                </div>
                
                <div className="expr-detail">
                  <Calendar size={18} className="expr-icon-small" />
                  <span>2021 – 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Internship Card */}
          <div className="experience-card-item">
            <div className="experience-card">
              <div className="experience-card-header">
                <Briefcase size={32} className="expr-icon" style={{color: 'var(--neon-magenta)'}} />
                <h3>Internship</h3>
              </div>
              
              <div className="expr-body">
                <div className="expr-detail" style={{ alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                  <img src="/Experience & Education/tcs.png" alt="TCS Logo" className="expr-org-logo" />
                  <span className="expr-highlight" style={{ fontSize: '1.25rem', color: 'var(--neon-cyan)', display: 'block' }}>
                    TCS (Tata Consultancy Services)
                  </span>
                </div>
                
                <div className="expr-detail">
                  <User size={18} className="expr-icon-small" />
                  <span>Data Analyst Intern</span>
                </div>
                
                <div className="expr-detail">
                  <Calendar size={18} className="expr-icon-small" />
                  <span>Duration: 3 months</span>
                </div>

                <ul className="expr-bullets">
                  <li>Built dynamic operational dashboards using Power BI.</li>
                  <li>Analyzed and preprocessed large datasets using Python (Pandas, NumPy).</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-container">
          <a href="#projects" className="view-projects-btn">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
