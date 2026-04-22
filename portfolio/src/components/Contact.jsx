import { useState } from 'react';
import { Mail, MapPin } from "lucide-react";

const Contact = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);

      setTimeout(() => setShowToast(false), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="project-bg py-16 bg-white/5">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-12 gap-10 items-start">

          {/* LEFT SIDE */}
          <div className="md:col-span-5 space-y-8">

            <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
              Let’s build something amazing together
            </h2>

            <p className="text-white/60 text-sm md:text-base leading-relaxed">
             I’m always open to connecting and creating meaningful digital experiences.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <Mail className="text-[purple] text-xl mt-1" />
                <div>
                  <p className="text-white/50 text-xs">Email</p>
                  <a href="mailto:hello@sachinshrestha.dev" className="text-sm md:text-base hover:text-[#00f5d4]">
                   ukharel111@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-[red] text-xl mt-1" />
                <div>
                  <p className="text-white/50 text-xs">Location</p>
                  <p className="text-sm md:text-base">Butwal, Nepal</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="md:col-span-7">
            <div className="bg-[#111] rounded-2xl p-6 md:p-8 border border-white/10">

              <form onSubmit={handleSubmit} className="space-y-5">

                <div>
                  <label className="text-xs text-white/60">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full italic mt-2 bg-transparent border border-white/20 focus:border-[#00f5d4] rounded-xl px-4 py-3 text-sm outline-none"
                    placeholder="Your Name......"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/60">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="italic w-full mt-2 bg-transparent border border-white/20 focus:border-[#00f5d4] rounded-xl px-4 py-3 text-sm outline-none"
                    placeholder="Your Email......"
                  />
                </div>

                <div>
                  <label className="text-xs text-white/60">Message</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    className="w-full italic mt-2 bg-transparent border border-white/20 focus:border-[#00f5d4] rounded-xl px-4 py-3 text-sm outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#00f5d4] text-black font-semibold rounded-xl text-sm flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>Send Message</>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>

      {/* TOAST */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-[#00f5d4] text-black px-5 py-3 rounded-xl text-sm shadow-xl">
          Message sent successfully!
        </div>
      )}
    </section>
  );
};

export default Contact;