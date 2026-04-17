import Jobportal from '../assets/photo2.png';
import Taskmanager from '../assets/photo5.png';
import Ecommerce from '../assets/photo1.png';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      desc: "Full-stack online store ",
      image: Ecommerce,
      tech: ["React", "Node.js", "MongoDB", "Express"],
      live: "#",
      github: "#"
    },
    {
      title: "Job Portal (HireNepal)",
      desc: "Connecting job seekers with employers in Nepal",
      image: Jobportal,
      tech: ["React.js", "Tailwind", "MongoDB", "Express"],
      live: "#",
      github: "#"
    },
    {
      title: "Task Manager",
      desc: "Organize and track your tasks efficiently with Authorization and Authentication",
      image: Taskmanager,
      tech: ["React.js", "MongoDB"],
      live: "#",
      github: "#"
    }
  ];

  return (
    <section className="project-bg py-10 bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-semibold tracking-tighter mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="project-card bg-[#111] border border-white/10 rounded-3xl overflow-hidden group">
              <div className="h-50 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover  transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-white/70 mb-6">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-white/10 px-4 py-1 rounded-3xl">{t}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.live} className="flex-1 text-center py-3.5 bg-white text-black rounded-3xl font-semibold text-sm hover:bg-[#00f5d4] hover:text-black">Live Demo</a>
                  <a href={project.github} className="flex-1 text-center py-3.5 border border-white/30 rounded-3xl font-semibold text-sm hover:border-white">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;