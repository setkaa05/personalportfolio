import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-40 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full px-6 py-3 border border-white/10 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
        <div className="text-xl font-bold font-mono tracking-tighter">
          <span className="text-white">S</span>
          <span className="text-electric-cyan">M</span>
          <span className="text-neon-purple text-2xl leading-none">.</span>
        </div>
        
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href}
                className="text-sm uppercase tracking-widest text-gray-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className="md:hidden flex flex-col justify-center gap-1.5 w-6 h-6 cursor-pointer">
          <div className="w-full h-0.5 bg-white"></div>
          <div className="w-2/3 h-0.5 bg-electric-cyan"></div>
          <div className="w-full h-0.5 bg-white"></div>
        </div>
      </div>
    </motion.nav>
  );
}
