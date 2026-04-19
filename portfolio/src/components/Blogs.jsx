const Blogs = () => {
  const blogs = [
    {
      title: "How I built a production-ready design system in 7 days using Tailwind",
      excerpt: "Lessons learned while scaling UI consistency across multiple products at my latest startup.",
      date: "March 28, 2026",
      category: "DESIGN SYSTEMS",
      readTime: "8 min"
    },
    {
      title: "MERN Stack in 2026: The ultimate performance checklist",
      excerpt: "How to consistently achieve 98+ Lighthouse scores with Next.js 15, Bun, and modern caching strategies.",
      date: "March 12, 2026",
      category: "DEVELOPMENT",
      readTime: "12 min"
    },
    {
      title: "From Figma to Production: My exact workflow as a solo founder",
      excerpt: "How I ship pixel-perfect products in under 10 days without a dedicated design team.",
      date: "February 19, 2026",
      category: "CAREER",
      readTime: "6 min"
    }
  ];

  return (
    <section id="blogs" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl font-semibold tracking-tighter">Latest Writings</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-[#00f5d4]/40 transition-all duration-300"
            >
              <div className="flex justify-between text-xs mb-6">
                <span className="text-[#00f5d4] font-medium tracking-wider">{blog.category}</span>
                <span className="text-white/50">{blog.date}</span>
              </div>

              <h3 className="text-2xl font-semibold leading-tight mb-4 group-hover:text-[#00f5d4] transition-colors line-clamp-3">
                {blog.title}
              </h3>

              <p className="text-white/70 text-[15px] leading-relaxed mb-8 line-clamp-3">
                {blog.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-white/60">{blog.readTime} read</span>
                <button className="text-[#00f5d4] text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article <span className="text-lg leading-none">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;