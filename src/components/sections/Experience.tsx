import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Violavizn Technologies",
    role: "Cybersecurity & IoT Intern",
    details: [
      "Secured IoT-enabled printing kiosk",
      "Implemented reliable payment integration",
      "Achieved 99% system uptime"
    ]
  },
  {
    company: "Tansam — TIDEL Park",
    role: "IoT Development Intern",
    details: [
      "Developed smart waste management solution",
      "Integrated cloud monitoring dashboard",
      "Automated sensor data collection"
    ]
  },
  {
    company: "Incubitu Private Limited",
    role: "IoT Intern",
    details: [
      "Built energy management system",
      "Implemented MQTT analytics pipeline",
      "Designed automation workflows"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 z-10 bg-black/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
            <span className="text-neon-purple mr-4 font-mono text-2xl">04.</span>
            Experience
          </h2>
          <p className="text-gray-400 font-mono text-sm">Professional Timeline</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-800">
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-electric-cyan to-neon-purple"
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: true }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`relative flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-[4px] md:-translate-x-1/2 w-3 h-3 rounded-full bg-black border-2 border-electric-cyan z-10 shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
                
                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-8 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                  <div className="glass-card p-6 hover:border-electric-cyan/50 transition-colors duration-300 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-electric-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-electric-cyan transition-colors">{exp.role}</h3>
                    <h4 className="text-neon-purple font-mono text-sm mb-4">{exp.company}</h4>
                    <ul className={`space-y-2 text-gray-400 text-sm list-none ${idx % 2 === 0 ? 'md:flex md:flex-col md:items-end' : ''}`}>
                      {exp.details.map((detail, i) => (
                        <li key={i} className={`flex items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <span className={`text-electric-cyan mt-1 ${idx % 2 === 0 ? 'md:ml-2 mr-2 md:mr-0' : 'mr-2'}`}>▹</span>
                          <span className={idx % 2 === 0 ? 'md:text-right' : ''}>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
