import { motion } from 'motion/react';
import { Search, Map, Cog, LineChart } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery & Analysis',
    description: 'Deep dive into your current state, challenges, and aspirations. We analyze technology landscape, business processes, and market position.',
    duration: '2-4 weeks'
  },
  {
    icon: Map,
    number: '02',
    title: 'Strategic Roadmap',
    description: 'Develop a comprehensive transformation roadmap aligned with 3-Horizons framework. Clear milestones, priorities, and success metrics.',
    duration: '3-6 weeks'
  },
  {
    icon: Cog,
    number: '03',
    title: 'Implementation',
    description: 'Execute with precision. Our experts work alongside your team to ensure seamless deployment and knowledge transfer.',
    duration: '3-12 months'
  },
  {
    icon: LineChart,
    number: '04',
    title: 'Optimize & Scale',
    description: 'Continuous monitoring, optimization, and scaling. We ensure lasting impact and prepare you for the next horizon.',
    duration: 'Ongoing'
  }
];

export function Approach() {
  return (
    <section id="approach" className="py-24 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            Our Approach
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A proven methodology that transforms vision into reality through structured analysis and strategic execution.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300">
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <span className="text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 inline-flex p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl relative">
                    <step.icon className="size-8 text-blue-400" />
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-xl group-hover:blur-2xl transition-all" />
                  </div>

                  {/* Content */}
                  <h3 className="text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Duration Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <span className="text-blue-300 text-sm">{step.duration}</span>
                  </div>
                </div>

                {/* Connecting Line (except for last items) */}
                {index < steps.length - 2 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-violet-500/10 border border-blue-500/30 rounded-2xl">
              <div className="text-left">
                <h3 className="text-white mb-2">
                  Ready to Begin Your Transformation?
                </h3>
                <p className="text-slate-400">
                  Let&apos;s discuss how our approach can accelerate your journey.
                </p>
              </div>
              <a
                href="#contact"
                className="whitespace-nowrap px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
