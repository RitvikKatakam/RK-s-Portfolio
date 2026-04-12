import React from 'react';
import { Brain, Cpu, Award, BookOpen, Binary, Atom, PenTool, FlaskConical, Calculator, Code, Eye, Activity, Database, Sparkles } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      skills: [
        { name: 'Python', icon: '/languages/python.png' },
        { name: 'C',      icon: '/languages/c.png' },
        { name: 'C++',    icon: '/languages/cpp.png' },
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: 'HTML5',      icon: '/languages/html.png' },
        { name: 'CSS3',       icon: '/languages/css.png' },
        { name: 'JavaScript', icon: '/languages/js.png' },
        { name: 'React',      icon: '/languages/react.png' },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: 'Node.js',    icon: '/languages/node.png' },
        { name: 'Express',    icon: '/languages/express.png' },
      ]
    },
    {
      title: "Databases",
      skills: [
        { name: 'MongoDB',    icon: '/languages/mongodb.png' },
      ]
    },
    {
      title: "Data & Analytics",
      skills: [
        { name: 'Power BI',   icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg' },
      ]
    },
    {
      title: "Development Tools",
      skills: [
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
        { name: 'Vercel', icon: 'https://cdn.worldvectorlogo.com/logos/vercel.svg', invert: true }
      ]
    },
    {
      title: "AI Platforms",
      skills: [
        { name: 'OpenAI', icon: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg', invert: true },
        { name: 'Gemini', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg' },
        { name: 'Claude', icon: '/languages/anthropic.png'},
        { name: 'Groq',   icon: '/languages/groq.png' }
      ]
    },
    {
      title: "ML Tools",
      skills: [
        { name: 'Hugging Face', icon: 'https://huggingface.co/front/assets/huggingface_logo-noborder.svg' },
        { name: 'Streamlit',    icon: '/languages/streamlit.png' },
        { name: 'Flask',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', invert: true },
        { name: 'FastAPI',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' }
      ]
    },
    {
      title: "Operating Systems",
      skills: [
        { name: 'Windows',    icon: '/os/windows.png' },
        { name: 'Kali Linux', icon: '/os/kali.png' },
        { name: 'Ubuntu',     icon: '/os/ubuntu.png' }
      ]
    }
  ];

  const academicData = [
    {
      title: "Courses",
      icon: <Brain className="academic-head-icon text-cyan-400" size={28} />,
      items: [
        { name: "Artificial Intelligence", icon: <Brain size={20} /> },
        { name: "Machine Learning", icon: <Cpu size={20} /> },
        { name: "Natural Language Processing (NLP)", icon: <BookOpen size={20} /> },
        { name: "Computer Vision", icon: <Eye size={20} /> },
        { name: "Reinforcement Learning", icon: <Activity size={20} /> },
        { name: "Parallel and Distributed Processing", icon: <Database size={20} /> },
        { name: "Quantum Computing", icon: <Atom size={20} /> },
        { name: "Data Structures and Algorithms (DSA)", icon: <Binary size={20} /> },
        { name: "Python Programming", icon: <Code size={20} /> },
      ]
    },
    {
      title: "Certifications",
      icon: <Award className="academic-head-icon text-pink-400" size={28} />,
      items: [
        { name: "Human Intelligence", icon: <Sparkles size={20} /> },
        { name: "Python", icon: <Code size={20} /> },
        { name: "Data Structures and Algorithms (DSA)", icon: <Binary size={20} /> },
      ]
    },
    {
      title: "General Subjects",
      icon: <BookOpen className="academic-head-icon text-purple-400" size={28} />,
      items: [
        { name: "Mathematics", icon: <Calculator size={20} /> },
        { name: "Physics", icon: <Atom size={20} /> },
        { name: "Chemistry", icon: <FlaskConical size={20} /> },
        { name: "Engineering Drawing", icon: <PenTool size={20} /> },
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-cyber-section" style={{ position: 'relative' }}>
      <style>{`
        .academic-section {
          margin-top: 6rem;
          position: relative;
          z-index: 2;
        }

        .academic-title {
          font-family: 'Orbitron', 'Inter', sans-serif;
          font-size: 3rem;
          font-weight: 800;
          text-align: center;
          margin-bottom: 4rem;
          background: linear-gradient(90deg, var(--neon-cyan), var(--neon-magenta), var(--neon-cyan));
          background-size: 200% auto;
          color: #fff;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: cyber-gradient 4s linear infinite;
          text-transform: uppercase;
          letter-spacing: 2px;
          text-shadow: 0px 0px 20px rgba(var(--neon-cyan-rgb), 0.4);
        }

        .academic-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 3rem;
        }

        .academic-category-card {
          background: rgba(10, 10, 15, 0.6);
          border: 1px solid rgba(var(--neon-cyan-rgb), 0.2);
          border-radius: 12px;
          padding: 2.5rem 2rem;
          backdrop-filter: blur(15px);
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
        }

        .academic-category-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; width: 100%; height: 2px;
          background: linear-gradient(90deg, transparent, var(--neon-cyan), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .academic-category-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(var(--neon-cyan-rgb), 0.6);
          box-shadow: 0 10px 40px rgba(var(--neon-cyan-rgb), 0.15), inset 0 0 20px rgba(var(--neon-cyan-rgb), 0.05);
        }

        .academic-category-card:hover::before {
          opacity: 1;
        }

        .academic-cat-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 1rem;
        }

        .academic-cat-title {
          font-family: 'Poppins', 'Inter', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          letter-spacing: 1px;
        }

        .academic-head-icon {
          color: var(--neon-cyan);
          filter: drop-shadow(0 0 8px rgba(var(--neon-cyan-rgb), 0.6));
        }

        .academic-item-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .academic-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: #94a3b8;
          font-family: 'Inter', sans-serif;
          font-size: 1.05rem;
          transition: all 0.3s ease;
          padding: 0.5rem;
          border-radius: 8px;
        }

        .academic-item:hover {
          color: var(--neon-cyan);
          background: rgba(var(--neon-cyan-rgb), 0.08);
          transform: translateX(5px);
          text-shadow: 0 0 8px rgba(var(--neon-cyan-rgb), 0.3);
        }

        .academic-item-icon {
          color: var(--neon-magenta);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .academic-item:hover .academic-item-icon {
          color: var(--neon-cyan);
          filter: drop-shadow(0 0 8px rgba(var(--neon-cyan-rgb), 0.8));
          transform: scale(1.1);
        }
      `}</style>
      
      <div className="content">
        <h2 className="section-title neon-text">Skills & Technologies</h2>
        
        <div className="portfolio-division">
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="project-category" style={{ marginBottom: '4rem' }}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-cyber-grid">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-card-cyber">
                    <div className="skill-header" style={{ justifyContent: 'center', marginBottom: 0 }}>
                      <div className="skill-info-meta">
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className="skill-minimal-icon" 
                          style={{ 
                            width: '45px', 
                            height: '45px', 
                            filter: skill.invert ? 'invert(1)' : 'none' 
                          }} 
                        />
                        <span className="skill-label" style={{ fontSize: '1.2rem', marginLeft: '0.5rem' }}>{skill.name}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Courses & Certifications Section */}
        <div className="academic-section">
          <h2 className="academic-title">Courses & Certifications</h2>
          
          <div className="academic-grid">
            {academicData.map((category, idx) => (
              <div key={idx} className="academic-category-card">
                <div className="academic-cat-header">
                  {category.icon}
                  <h3 className="academic-cat-title">{category.title}</h3>
                </div>
                
                <div className="academic-item-list">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="academic-item">
                      <div className="academic-item-icon">
                        {item.icon}
                      </div>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
