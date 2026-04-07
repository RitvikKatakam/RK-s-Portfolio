import React from 'react';

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

  return (
    <section id="skills" className="section skills-cyber-section">
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
      </div>
    </section>
  );
};

export default Skills;
