const TechStack = () => {
  const technologies = [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Express",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4T1YOdxe--UDu6VlEaqifJFs_dIXyiJUM0A&s",
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Figma",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    {
      name: "Tailwind",
      icon: "https://logowik.com/content/uploads/images/tailwind-css7675.logowik.com.webp",
    },
  ];

  return (
    <section className=" py-24">
      <div className="max-w-8xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tighter mb-2">
            <span className="text-[#00f5d4]">Technologies</span> I Work With
          </h2>
          <p className="text-white/60">My current tech stack</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="tech-logo group flex flex-col items-center gap-3"
            >
              <div className="w-24 h-26 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center p-5 hover:border-[#00f5d4]/50 transition-all hover:scale-110">
                <img src={tech.icon} alt={tech.name} className="w-14 h-14" />
              </div>
              <span className="text-sm text-white/70 group-hover:text-[#00f5d4]">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="text-start ml-10 max-w-3xl text-white/60 mt-12">
          I work with these technologies to design and build modern full-stack
          applications, from interactive frontend experiences to robust backend
          APIs and database-driven systems. I focus on creating responsive,
          performant, and user-friendly solutions that solve real-world problems
          and deliver smooth user experiences.
        </p>
      </div>
    </section>
  );
};

export default TechStack;
