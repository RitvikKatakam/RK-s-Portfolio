import React from "react";

const About = () => (
  <section id="about" className="relative overflow-hidden bg-black text-white-100">

    {/* --- MAIN ABOUT LAYOUT --- */}
    <div className="about-layout mb-20 pt-5 flex flex-col md:flex-row items-center justify-center min-h-[60vh] gap-10 md:gap-20 px-5 md:px-20 py-16">

      {/* LEFT SIDE: About Text */}
      <div className="max-w-xl flex-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h2>

        <p className="text-lg md:text-xl text-white-50 leading-relaxed">
          Hello, I am Ritvik Katakam, an enthusiastic graduate from NITK with a strong technical focus on Artificial Intelligence, Machine Learning, NLP, Computer Vision, and Data Science. I bring solid expertise in Python, SQL, Power BI, OpenCV, Flask, and scalable cloud-based workflows. I am passionate about developing optimized, reliable, and high-performance models, backed by strong analytical thinking and a research-driven mindset. I enjoy solving complex problems, understanding data deeply, and building intelligent systems that deliver measurable impact. I aim to contribute to innovative teams where technology, learning, and real-world solutions come together.
        </p>
      </div>

      {/* RIGHT SIDE: Profile Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/images/profile2.jpg"
          alt="About Me"
          className="w-100 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>

    {/* --- SKILLS SECTION --- */}
    <div className="px-5 md:px-20 mt-4 md:mt-10">
      <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Skills</h3>

      {/* Scrolling Skills (Marquee) */}
      <div className="marquee h-36 rounded-xl card-border bg-black-100">
        <div className="marquee-box">

          {/* Python */}
          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/python.png" alt="python" className="w-20 h-20 object-contain" />
              <span className="label">Python</span>
            </div>
          </div>

          {/* Java */}
          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/java.png" alt="java" className="w-20 h-20 object-contain" />
              <span className="label">Java</span>
            </div>
          </div>

          {/* C */}
          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/c.png" alt="c" className="w-20 h-20 object-contain" />
              <span className="label">C</span>
            </div>
          </div>

          {/* GitHub */}
          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/github.png" alt="github" className="w-20 h-20 object-contain" />
              <span className="label">GitHub</span>
            </div>
          </div>

          {/* Linux */}
          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/linux.png" alt="linux" className="w-20 h-20 object-contain" />
              <span className="label">Linux</span>
            </div>
          </div>

          {/* HTML */}
          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/html.pmg.jpg" alt="html" className="w-20 h-20 object-contain" />
              <span className="label">HTML</span>
            </div>
          </div>

          {/* CSS */}
          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/css.png" alt="css" className="w-20 h-20 object-contain" />
              <span className="label">CSS</span>
            </div>
          </div>

          {/* JavaScript */}
          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/js.png" alt="javascript" className="w-20 h-20 object-contain" />
              <span className="label">JavaScript</span>
            </div>
          </div>

          {/* Power BI */}
          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/powerbi.png" alt="powerbi" className="w-20 h-20 object-contain" />
              <span className="label">Power BI</span>
            </div>
          </div>

          {/* Vercel */}
          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/vercel.png" alt="vercel" className="w-20 h-20 object-contain" />
              <span className="label">Vercel</span>
            </div>
          </div>

        {/* Duplicate icons for a continuous marquee (Power BI intentionally only appears once) */}
          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/python.png" alt="python" className="w-20 h-20 object-contain" />
              <span className="label">Python</span>
            </div>
          </div>

          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/java.png" alt="java" className="w-20 h-20 object-contain" />
              <span className="label">Java</span>
            </div>
          </div>

          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/c.png" alt="c" className="w-20 h-20 object-contain" />
              <span className="label">C</span>
            </div>
          </div>

          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/github.png" alt="github" className="w-20 h-20 object-contain" />
              <span className="label">GitHub</span>
            </div>
          </div>

          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/linux.png" alt="linux" className="w-20 h-20 object-contain" />
              <span className="label">Linux</span>
            </div>
          </div>

          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/html.pmg.jpg" alt="html" className="w-20 h-20 object-contain" />
              <span className="label">HTML</span>
            </div>
          </div>

          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/css.png" alt="css" className="w-20 h-20 object-contain" />
              <span className="label">CSS</span>
            </div>
          </div>

          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/js.png" alt="javascript" className="w-20 h-20 object-contain" />
              <span className="label">JavaScript</span>
            </div>
          </div>

          <div className="marquee-item flex items-center justify-center p-4">
            <div className="flex flex-col items-center gap-2 skill-badge">
              <img src="/images/vercel.png" alt="vercel" className="w-20 h-20 object-contain" />
              <span className="label">Vercel</span>
            </div>
          </div>

        
      </div>
    </div>
    </div>

  </section>
);

export default About;
