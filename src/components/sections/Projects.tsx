import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "AURA - AI Mental Health Assistant",
    description:
      "A multimodal AI platform integrating LLMs, NLP, Speech Recognition, and Facial Emotion Detection. Built a futuristic AI dashboard with real-time emotional analytics, empathetic chatbot, and voice interaction.",
    tech: ["React", "FastAPI", "LLMs", "NLP", "OpenCV", "DeepFace"],
    featured: true,
    github: "https://github.com/setkaa05/AURA-AI-Mental-Health-Assistant-Website",
    live: null,
  },
  {
    title: "Interview Slot Management System",
    description:
      "Enterprise SaaS dashboard featuring JWT Authentication, Role-based Access Control, Slot Booking Constraints, and full Database Persistence for seamless interview scheduling.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    featured: false,
    github: "https://github.com/setkaa05",
    live: null,
  },
  {
    title: "Freelance Web Development",
    description:
      "Developed and deployed responsive business websites with SEO optimization, performance enhancements, payment gateway integration, and ongoing maintenance.",
    tech: ["HTML/CSS", "JavaScript", "React", "SEO", "Payments"],
    featured: false,
    github: "https://github.com/setkaa05",
    live: null,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
            <span className="text-neon-purple mr-4 font-mono text-2xl">03.</span>
            Featured Projects
            <div className="h-px bg-gray-800 flex-grow ml-8 relative overflow-hidden">
              <motion.div
                initial={{ x: '-100%' }}
                whileInView={{ x: '100%' }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity, delay: 1 }}
                className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white to-transparent"
              />
            </div>
          </h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${idx % 2 === 0 ? '' : 'lg:text-right'}`}
            >
              {/* Mockup panel */}
              <div className={`lg:col-span-7 glass rounded-xl overflow-hidden aspect-video relative group ${idx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-6'}`}>
                <div className="absolute inset-0 bg-gradient-to-tr from-deep-navy to-black opacity-80 group-hover:opacity-40 transition-opacity duration-500 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-700 m-4 rounded-lg z-0">
                  <span className="text-gray-600 font-mono text-sm tracking-widest uppercase">Visual Interface Demo</span>
                </div>
                <div className="absolute top-4 left-4 right-4 h-6 border-b border-gray-700 flex gap-2 z-0 items-center">
                  <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                </div>
              </div>

              {/* Content */}
              <div className={`relative z-20 lg:col-span-6 ${idx % 2 === 0 ? 'lg:col-start-7' : 'lg:col-start-1 lg:row-start-1'}`}>
                <p className={`font-mono text-sm mb-2 ${project.featured ? 'text-neon-purple' : 'text-electric-cyan'}`}>
                  {project.featured ? 'Featured System' : 'Application'}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 hover:text-electric-cyan transition-colors cursor-pointer">
                  {project.title}
                </h3>

                <div className={`glass-card p-6 mb-6 shadow-2xl backdrop-blur-xl border border-white/10 ${idx % 2 === 0 ? 'lg:-ml-12' : 'lg:-mr-12'}`}>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                </div>

                <ul className={`flex flex-wrap gap-4 font-mono text-xs text-gray-400 mb-8 ${idx % 2 === 0 ? '' : 'justify-end'}`}>
                  {project.tech.map((t) => (
                    <li key={t} className="px-2 py-1 bg-black/40 border border-white/5 rounded">{t}</li>
                  ))}
                </ul>

                <div className={`flex gap-4 ${idx % 2 === 0 ? '' : 'justify-end'}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-electric-cyan transition-colors"
                    title="View on GitHub"
                  >
                    <FaGithub size={22} />
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-gray-300 hover:text-neon-purple transition-colors"
                      title="Live Demo"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
