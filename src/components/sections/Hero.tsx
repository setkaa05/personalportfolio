import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import ParticleBackground from '../ui/ParticleBackground';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParticleBackground />
      
      {/* Cyber Grid Background overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(1000px)_rotateX(60deg)_translateY(-100px)_translateZ(-200px)] opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="inline-block px-3 py-1 mb-6 border border-electric-cyan/30 rounded-full bg-electric-cyan/10 backdrop-blur-sm">
            <span className="font-mono text-xs text-electric-cyan uppercase tracking-widest">System Online // Initialization Complete</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            <span className="block text-white">Sethukannan M</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-300 font-mono">
            <span className="text-electric-cyan">Cybersecurity Engineer</span> • <span className="text-neon-purple">AI Developer</span> • IoT Innovator
          </h2>
          
          <p className="text-lg text-gray-400 mb-10 max-w-lg border-l-2 border-neon-purple pl-4 italic">
            "Building intelligent, secure, and futuristic digital systems."
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 bg-white text-black font-bold rounded-md hover:bg-electric-cyan transition-colors duration-300 shadow-[0_0_15px_rgba(0,240,255,0.4)]">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 bg-transparent border border-gray-600 text-white font-bold rounded-md hover:border-white transition-colors duration-300 glass hover:bg-white/5">
              Contact
            </a>
            <div className="flex items-center gap-4 ml-4">
              <a href="https://github.com/setkaa05" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:text-electric-cyan hover:border-electric-cyan transition-all duration-300 group">
                <FaGithub size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
              </a>
              <a href="https://www.linkedin.com/in/sethukannan-m-812534294/" target="_blank" rel="noreferrer" className="p-3 glass rounded-full hover:text-electric-cyan hover:border-electric-cyan transition-all duration-300 group">
                <FaLinkedin size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Floating Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="perspective-1000 hidden lg:block"
        >
          <div className="terminal-window bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(176,38,255,0.15)] transform rotate-y-[-10deg] rotate-x-[5deg] transition-transform duration-500 hover:rotate-0">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-gray-800">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-xs font-mono text-gray-400">root@sethukannan:~</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="flex items-center mb-2">
                <span className="text-green-400 mr-2">➜</span>
                <span className="text-blue-400 mr-2">~</span>
                <span className="text-white">./display_skills.sh</span>
              </div>
              <div className="text-gray-300 space-y-1 mb-4">
                <p className="text-electric-cyan">Loading core modules...</p>
                <ul className="list-none pl-4 space-y-1 border-l border-gray-800 ml-2 mt-2">
                  <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }} className="flex items-center before:content-['>'] before:mr-2 before:text-gray-500 hover:text-white transition-colors duration-200">Network Security</motion.li>
                  <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="flex items-center before:content-['>'] before:mr-2 before:text-gray-500 hover:text-white transition-colors duration-200">AI Systems</motion.li>
                  <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="flex items-center before:content-['>'] before:mr-2 before:text-gray-500 hover:text-white transition-colors duration-200">React.js</motion.li>
                  <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} className="flex items-center before:content-['>'] before:mr-2 before:text-gray-500 hover:text-white transition-colors duration-200">FastAPI</motion.li>
                  <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="flex items-center before:content-['>'] before:mr-2 before:text-gray-500 hover:text-white transition-colors duration-200">MQTT</motion.li>
                  <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }} className="flex items-center before:content-['>'] before:mr-2 before:text-gray-500 hover:text-white transition-colors duration-200">Ethical Hacking</motion.li>
                  <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="flex items-center before:content-['>'] before:mr-2 before:text-gray-500 hover:text-white transition-colors duration-200">LLM Integration</motion.li>
                </ul>
              </div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }} className="flex items-center mt-4">
                <span className="text-green-400 mr-2">➜</span>
                <span className="text-blue-400 mr-2">~</span>
                <span className="w-2 h-4 bg-gray-400 animate-pulse"></span>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
