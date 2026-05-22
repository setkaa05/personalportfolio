import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
            <span className="text-neon-purple mr-4 font-mono text-2xl">01.</span>
            About Me
            <div className="h-px bg-gray-800 flex-grow ml-8 relative overflow-hidden">
              <motion.div 
                initial={{ x: '-100%' }}
                whileInView={{ x: '100%' }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-electric-cyan to-transparent"
              />
            </div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-card p-8 relative overflow-hidden group"
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-electric-cyan/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-white/10 pb-4">
                System <span className="text-electric-cyan">Profile</span>
              </h3>
              
              <div className="space-y-6 text-gray-300">
                <p className="leading-relaxed">
                  I am an <span className="text-electric-cyan font-semibold">AI-focused engineer</span>, cybersecurity enthusiast, IoT systems developer, and full stack creator dedicated to building intelligent real-world solutions.
                </p>
                <p className="leading-relaxed">
                  My work lives at the intersection of robust security architectures, deep learning models, and interconnected physical devices, resulting in platforms that are not only highly functional but also defensively sound.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 font-mono text-sm">
                <div>
                  <span className="block text-gray-500 mb-1">Status:</span>
                  <span className="text-green-400 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse mr-2"></span>
                    Available for Hire
                  </span>
                </div>
                <div>
                  <span className="block text-gray-500 mb-1">Location:</span>
                  <span className="text-white">Chennai, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-card p-6 border-l-4 border-l-neon-purple hover:-translate-y-1 transition-transform duration-300">
              <h4 className="text-xl font-bold text-white mb-2">Education</h4>
              <p className="text-gray-400">B.Tech in CSE (Cybersecurity & IoT)</p>
              <p className="text-sm text-gray-500 mt-2">Sri Ramachandra Institute of Higher Education and Research</p>
              <div className="mt-4 inline-block px-3 py-1 bg-black/50 border border-neon-purple/30 rounded text-electric-cyan font-mono text-sm">
                Current GPA: 7.64
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center flex flex-col items-center justify-center hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-shadow duration-300">
                <span className="text-4xl font-bold text-electric-cyan mb-2">4+</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest">Projects</span>
              </div>
              <div className="glass-card p-6 text-center flex flex-col items-center justify-center hover:shadow-[0_0_20px_rgba(176,38,255,0.2)] transition-shadow duration-300">
                <span className="text-4xl font-bold text-neon-purple mb-2">3</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest">Internships</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
