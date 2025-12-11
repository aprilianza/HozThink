import { motion } from 'motion/react';
import { Layers3 } from 'lucide-react';

export function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Layers3 className="size-8 text-blue-500" />
              <div className="absolute inset-0 blur-xl bg-blue-500/30" />
            </div>
            <span className="text-2xl text-white">
              HozThink<span className="text-blue-500">!</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#horizons" className="text-slate-300 hover:text-blue-400 transition-colors">
              Horizons
            </a>
            <a href="#services" className="text-slate-300 hover:text-blue-400 transition-colors">
              Services
            </a>
            <a href="#approach" className="text-slate-300 hover:text-blue-400 transition-colors">
              Approach
            </a>
            <a 
              href="#contact" 
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
