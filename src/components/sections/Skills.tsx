import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaReact, FaNodeJs, FaLinux, FaGithub,
} from 'react-icons/fa';
import { 
  SiJavascript, SiTypescript, SiHtml5, SiFastapi, 
  SiArduino, SiRaspberrypi, SiMongodb, SiMysql
} from 'react-icons/si';

const skillCategories = [
  {
    title: "Programming",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C", icon: null },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: null }
    ]
  },
  {
    title: "AI & Backend",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "NLP", icon: null },
      { name: "Speech Recognition", icon: null },
      { name: "Emotion Detection", icon: null },
      { name: "LLM Integration", icon: null }
    ]
  },
  {
    title: "Cybersecurity",
    color: "from-red-500 to-orange-500",
    skills: [
      { name: "Network Security", icon: null },
      { name: "Vulnerability Assessment", icon: null },
      { name: "Security Testing", icon: null },
      { name: "Auth Protocols", icon: null }
    ]
  },
  {
    title: "IoT",
    color: "from-green-500 to-emerald-400",
    skills: [
      { name: "Arduino", icon: <SiArduino /> },
      { name: "Raspberry Pi", icon: <SiRaspberrypi /> },
      { name: "MQTT", icon: null },
      { name: "Sensors", icon: null },
      { name: "Cloud Platforms", icon: null }
    ]
  },
  {
    title: "Web Development",
    color: "from-electric-cyan to-blue-500",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Responsive Design", icon: null },
      { name: "SEO Optimization", icon: null },
      { name: "Payment Integration", icon: null }
    ]
  },
  {
    title: "Tools",
    color: "from-gray-400 to-gray-600",
    skills: [
      { name: "Git", icon: <FaGithub /> },
      { name: "Linux", icon: <FaLinux /> },
      { name: "VS Code", icon: null },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 z-10 bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
            <span className="text-neon-purple mr-4 font-mono text-2xl">02.</span>
            Technical Arsenal
            <div className="h-px bg-gray-800 flex-grow ml-8 relative overflow-hidden">
               <motion.div 
                initial={{ x: '-100%' }}
                whileInView={{ x: '100%' }}
                transition={{ duration: 2, ease: "linear", repeat: Infinity, delay: 0.5 }}
                className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-neon-purple to-transparent"
              />
            </div>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 border-t-2 relative overflow-hidden group hover:-translate-y-2 transition-all duration-300"
              style={{ borderTopColor: 'transparent' }}
            >
              {/* Dynamic border top based on category color gradient */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}></div>
              
              {/* Background glow on hover */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <h3 className="text-xl font-bold mb-6 text-white font-mono flex items-center">
                <span className="text-electric-cyan mr-2">&gt;</span> {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-2 px-3 py-1.5 bg-black/60 rounded-md border border-white/5 text-sm text-gray-300 hover:text-white hover:border-white/30 transition-colors duration-200"
                  >
                    {skill.icon && <span className="text-electric-cyan">{skill.icon}</span>}
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
