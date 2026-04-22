import React from "react";

const Certificates = () => {
  const certificates = [
    {
      title: "MERN Stack Development",
      platform: "Udemy",
      desc: "Completed a comprehensive full-stack MERN course covering MongoDB, Express.js, React, and Node.js with multiple real-world projects.",
      link: "https://www.udemy.com/certificate/UC-7e40c35b-7ed2-43fa-a588-aa1d93854d36/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
      date: "13 April 2025",
      duration: "19 Total hours",
    },
    {
      title: "UI/UX Design Fundamentals",
      platform: "CodeIt",
      desc: "Mastered user interface design, user experience principles, wireframing, prototyping, and design thinking methodologies.",
      link: "https://www.codeit.com.np/certificate-verification/CION-19718",
      date: "17 March 2025",
      duration: "21 days",
    },
  ];

  return (
    <section className="py-14 bg-gradient-to-b from-zinc-950 to-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-3">
              Certificates
            </h2>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-zinc-900/50 border border-white/10 rounded-3xl p-8 hover:border-white/30 hover:bg-zinc-900/70 transition-all duration-300 flex flex-col"
            >
              {/* Platform Badge */}
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-400/10 border border-emerald-500/20 rounded-2xl w-fit text-xs font-medium tracking-widest text-emerald-400 mb-6 hover:border-emerald-400/40 transition-colors">
                {cert.platform.toUpperCase()}
              </div>

              <h3 className="text-3xl font-semibold leading-tight mb-4 group-hover:text-white transition-colors">
                {cert.title}
              </h3>

              <p className="text-white/70 leading-relaxed mb-8 flex-grow">
                {cert.desc}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-white/50 mb-8">
                <span className="text-purple-400">{cert.date}</span>
                <span className="text-purple-400">{cert.duration}</span>
              </div>

              {/* View Button */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl border border-white/20  font-medium "
              >
                View Certificate
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
