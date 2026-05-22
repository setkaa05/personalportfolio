import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 z-10 bg-black/80">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-neon-purple mr-4 font-mono text-2xl">06.</span>
            Initiate Contact
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you have a question or just want to say hi, my inbox is always open.
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div className="glass-card p-6 border-l-2 border-electric-cyan">
              <h3 className="text-xl font-bold text-white mb-6 font-mono text-electric-cyan">Connection Nodes</h3>

              <div className="space-y-6">
                <a href="mailto:msethukannan05@gmail.com" className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center mr-4 group-hover:border-electric-cyan group-hover:text-electric-cyan transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-mono uppercase">Email</p>
                    <p className="text-gray-300 group-hover:text-white transition-colors text-sm break-all">msethukannan05@gmail.com</p>
                  </div>
                </a>

                <a href="tel:+919840390108" className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center mr-4 group-hover:border-electric-cyan group-hover:text-electric-cyan transition-colors shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm font-mono uppercase">Secure Line</p>
                    <p className="text-gray-300 group-hover:text-white transition-colors">+91 98403 90108</p>
                  </div>
                </a>
              </div>

              <div className="mt-10">
                <p className="text-gray-500 text-sm font-mono uppercase mb-4">Social Network</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/setkaa05"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded bg-black flex items-center justify-center border border-white/10 hover:border-neon-purple hover:text-neon-purple hover:shadow-[0_0_15px_rgba(176,38,255,0.5)] transition-all"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sethukannan-m-812534294/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 rounded bg-black flex items-center justify-center border border-white/10 hover:border-neon-purple hover:text-neon-purple hover:shadow-[0_0_15px_rgba(176,38,255,0.5)] transition-all"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form className="glass-card p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neon-purple/10 blur-[50px] pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-electric-cyan/10 blur-[50px] pointer-events-none"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-electric-cyan">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-black/50 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-electric-cyan">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-black/50 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-mono text-electric-cyan">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-black/50 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors"
                  placeholder="Transmission Subject"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-electric-cyan">Message Payload</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-black/50 border border-white/10 rounded-md p-3 text-white focus:outline-none focus:border-electric-cyan focus:ring-1 focus:ring-electric-cyan transition-colors resize-none"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>

              <a
                href="mailto:msethukannan05@gmail.com"
                className="block w-full text-center py-4 bg-transparent border border-electric-cyan text-electric-cyan font-bold font-mono tracking-widest rounded-md hover:bg-electric-cyan hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]"
              >
                SEND TRANSMISSION
              </a>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
