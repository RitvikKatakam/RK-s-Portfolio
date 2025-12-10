import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  // Refs to access DOM elements
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Fade-in animation for the entire projects section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 }
    );

    // List of cards to animate on scroll
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    // Loop through each card and apply scroll animations
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,       // Starts slightly lowered
          opacity: 0,  // Starts invisible
        },
        {
          y: 0,        // Moves to original position
          opacity: 1,  // Fades in
          duration: 1,
          delay: 0.2 * (index + 1), // Stagger animation delays
          scrollTrigger: {
            trigger: card,        // Trigger animation when card enters viewport
            start: "top bottom-=100", // Starts before reaching the center
          },
        }
      );
    });
  }, []);

  return (
    <div>
      {/* Projects Title */}
      <h2 className="flex flex-row justify-start pt-8 text-5xl ml-20 font-bold pl-5">
        Projects
      </h2>

      {/* Main Projects Section */}
      <div id="projects" ref={sectionRef} className="app-showcase">
        <div className="w-full">
          <div className="showcaselayout">

            {/* First Project Card */}
            <div ref={rydeRef} className="first-project-wrapper">
              <a href="https://github.com/RitvikKatakam/BMS" target="_blank" rel="noreferrer noopener">
                <div className="w-full">
                  <img src="/images/project1.png" alt="BMS - Bank Management System screenshot" className="w-full h-auto object-cover rounded-xl" />
                </div>
                <div className="text-content">
                  <h2>BMS — Bank Management System (Java)</h2>
                  <p className="text-white-50 md:text-xl">
                    A Full Stack Bank Management System with features like account creation, 
                    transactions, and user management.
                  </p>
                </div>
              </a>
            </div>

            {/* Other Projects List */}
            <div className="project-list-wrapper overflow-hidden">

              {/* Second Project */}
              <div className="project mb-2" ref={libraryRef}>
                <a
                  href="https://github.com/RitvikKatakam/AI-Driven-Email-Generator-using-Grok-API"
                  target="_blank" rel="noreferrer noopener"
                >
                  <div className="image-wrapper bg-black">
                    <img
                      src="/images/project2.png"
                      alt="AI-driven Email Generator - screenshot"
                      className="w-full h-auto object-cover rounded-xl"
                    />
                  </div>
                  <h2>AI Driven Email Generator Using Grok API</h2>
                  <p className="text-white-50 pt-2 md:text-xl">
                    An AI-powered email generator that crafts professional emails based 
                    on user prompts.
                  </p>
                </a>
              </div>

              {/* Third Project */}
              <div className="project" ref={ycDirectoryRef}>
                <a
                  href="https://github.com/RitvikKatakam/emp_details_tracking"
                  target="_blank" rel="noreferrer noopener"
                >
                  <div className="image-wrapper bg-black">
                    <img src="/images/project3.png" alt="Employee Details Tracking System - screenshot" className="w-full h-auto object-cover rounded-xl" />
                  </div>
                  <h2>Employee Details Tracking System</h2>
                  <p className="text-white-50 pt-2 md:text-xl">
                    CRUD operations to manage and track employee details efficiently.
                  </p>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
