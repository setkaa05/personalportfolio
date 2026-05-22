import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/10 z-10 bg-black">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-bold font-mono tracking-tighter cursor-default">
          <span className="text-white">S</span>
          <span className="text-electric-cyan">M</span>
          <span className="text-neon-purple text-2xl leading-none">.</span>
        </div>

        <p className="text-gray-500 text-sm flex items-center font-mono">
          Designed & Built with <FaHeart className="text-red-500 mx-2 animate-pulse" /> by Sethukannan M
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/setkaa05"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-electric-cyan transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/sethukannan-m-812534294/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 hover:text-electric-cyan transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:msethukannan05@gmail.com"
            className="text-gray-600 hover:text-electric-cyan transition-colors"
          >
            <FaEnvelope size={18} />
          </a>
          <span className="font-mono text-xs text-gray-700">v2.0.0 // {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
