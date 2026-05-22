import { motion } from 'framer-motion';
import { FaTrophy } from 'react-icons/fa';

const achievements = [
  {
    title: "NIT App Development Workshop",
    category: "Development",
    icon: <FaTrophy />
  },
  {
    title: "SSN Cyber Security Workshop",
    category: "Security",
    icon: <FaTrophy />
  },
  {
    title: "CIT Drone Technology Workshop",
    category: "Hardware / IoT",
    icon: <FaTrophy />
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
            <span className="text-neon-purple mr-4 font-mono text-2xl">05.</span>
            Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 flex flex-col items-center text-center relative overflow-hidden group cursor-default"
            >
              {/* Background animate */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 rounded-full bg-black border border-white/10 flex items-center justify-center text-2xl text-neon-purple mb-6 group-hover:text-electric-cyan group-hover:border-electric-cyan/50 transition-all shadow-[0_0_15px_rgba(176,38,255,0.2)] group-hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]">
                {achievement.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
              <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">{achievement.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
