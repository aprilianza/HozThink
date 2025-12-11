import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1588866054175-c8347662ec72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNvbnN1bHRpbmd8ZW58MXx8fHwxNzY1Mzc5Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Futuristic technology background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-900/80 to-slate-950" />
      </div>

      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0" 
        style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-8"
          >
            <Sparkles className="size-4 text-blue-400" />
            <span className="text-blue-300">Technology Consulting Redefined</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white mb-6 leading-tight"
          >
            Thinking Beyond
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600">
              The Horizon
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-300 mb-12 max-w-3xl mx-auto text-lg md:text-xl"
          >
            We bridge the present and future through strategic technology consulting. 
            Rooted in the 3-Horizons Model, HozThink empowers visionary leaders to navigate today, 
            innovate tomorrow, and shape the future of their industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
            >
              Start Your Journey
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#horizons"
              className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-full transition-all border border-slate-700"
            >
              Explore Our Vision
            </a>
          </motion.div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-blue-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
