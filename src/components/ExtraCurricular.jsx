import React from 'react';

const ExtraCurricular = () => {
  return (
    <section id="extra-curricular" className="section extra-curricular-section">
      <div className="content">
        <h2 className="section-title">Extra Curricular Activities</h2>

        <div className="cyber-table-card">
          <div className="table-header">
            <span className="table-label">TABLE 1: THE ECONOMIC TIMES HACKATHON OVERVIEW</span>
          </div>
          
          <div className="table-grid">
            {/* Cell 1: ET_GEN AI Challenge */}
            <div className="table-cell cell-info">
              <h3 className="cell-heading">ET_GEN AI Challenge</h3>
              <p className="cell-desc">
                Participated in a prestigious national hackathon focused on Generative AI solutions for enterprise fintech applications.
              </p>
              <span className="cell-badge cyan-badge">NATIONAL SHORTLIST</span>
            </div>

            {/* Cell 2: List 1 */}
            <div className="table-cell cell-list">
              {[
                "50,000+ Total Participants",
                "Top 5% National Ranking",
                "Enterprise AI Solutions",
                "Technical Validation Round 1",
                "Shortlisted for Final Round"
              ].map((item, i) => (
                <div key={i} className="list-item">
                  <span className="list-num">{i + 1}</span>
                  <span className="list-text">{item}</span>
                </div>
              ))}
            </div>

            {/* Cell 3: List 2 */}
            <div className="table-cell cell-list divider-top">
              {[
                "AI-Driven Financial Advice",
                "Real-time Data processing",
                "Clean & Scalable Architecture",
                "User-Centric Design Focus",
                "Seamless Frontend Integration"
              ].map((item, i) => (
                <div key={i} className="list-item">
                  <span className="list-num">{i + 1}</span>
                  <span className="list-text">{item}</span>
                </div>
              ))}
            </div>

            {/* Cell 4: AI Financial Mentor */}
            <div className="table-cell cell-info divider-top divider-left">
              <h3 className="cell-heading">Project: AI Financial Mentor</h3>
              <p className="cell-desc">
                Developed a high-impact dashboard for real-time financial calculations and automated advisory services.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                <a 
                   href="https://money-mentor-app-cyan.vercel.app/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="cell-btn orange-btn"
                >
                  LIVE DEMO →
                </a>
                <a 
                   href="/projects/AIMoneyMentor_video.mp4" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="cell-btn"
                   style={{ background: 'transparent', border: '1px solid var(--neon-cyan)', color: 'var(--neon-cyan)' }}
                >
                  DEMO VIDEO ▶
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
