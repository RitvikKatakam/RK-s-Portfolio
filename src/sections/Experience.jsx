import React from "react";
import TitleHeader from "../components/TitleHeader";

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative bg-black text-white-100">
      <div className="px-5 md:px-20">
        <TitleHeader title="Experience & Education" sub="My background" />

        <div className="grid-2-cols mt-12 gap-8 items-start">
          {/* LEFT: Education */}
          <div className="card-border rounded-xl p-8 flex flex-col gap-4">
            <h3 className="text-xl md:text-2xl font-semibold">Education</h3>
            <div className="flex items-start gap-6 mt-4">
              <img src="/images/nitk-logo.png" alt="NITK" className="w-24 h-24 object-cover rounded-lg" />
              <div className="flex flex-col">
                <strong className="text-lg">NITK — National Institute of Technology Karnataka</strong>
                <p className="text-white-50 mt-2">Branch: AI (Intelligent Technologies & Techniques)</p>
                <p className="text-white-50">Duration: 2021 — 2025</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Internship / Work Experience */}
          <div className="card-border rounded-xl p-8 flex flex-col gap-4">
            <h3 className="text-xl md:text-2xl font-semibold">Internship</h3>
            <div className="flex items-start gap-6 mt-4">
              <img src="/images/tcs.png" alt="TCS" className="w-24 h-24 object-cover rounded-lg" />
              <div className="flex flex-col">
                <strong className="text-lg">TCS — Intern</strong>
                <p className="text-white-50 mt-2">Duration: 3 months</p>
                <p className="text-white-50 mt-2">Role: Data Analyst — worked with Python and Power BI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
