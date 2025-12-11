import { motion } from 'motion/react';
import { Calendar, GitBranch, Rocket } from 'lucide-react';

const horizons = [
  {
    icon: Calendar,
    number: '01',
    title: 'Horizon 1: Present',
    subtitle: 'Optimizing Today',
    description: 'Strengthen and optimize your current technology landscape. We help you maximize efficiency, reduce technical debt, and build a solid foundation for growth.',
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500/30',
    glowColor: 'bg-blue-500/20'
  },
  {
    icon: GitBranch,
    number: '02',
    title: 'Horizon 2: Transition',
    subtitle: 'Bridging Innovation',
    description: 'Navigate the transformation journey with confidence. We bridge the gap between your current state and future vision through strategic roadmaps and change management.',
    color: 'from-cyan-500 to-cyan-600',
    borderColor: 'border-cyan-500/30',
    glowColor: 'bg-cyan-500/20'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Horizon 3: Future',
    subtitle: 'Creating Tomorrow',
    description: 'Explore disruptive innovations and emerging technologies. We help you identify and capture future opportunities before they become mainstream.',
    color: 'from-violet-500 to-purple-600',
    borderColor: 'border-violet-500/30',
    glowColor: 'bg-violet-500/20'
  }
];

export function Horizons() {
  return (
    <section id="horizons" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            The 3-Horizons Model
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Our philosophy is rooted in McKinsey&apos;s 3-Horizons framework, 
            enabling balanced growth across present operations, transitional innovation, and future disruption.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {horizons.map((horizon, index) => (
            <motion.div
              key={horizon.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className={`relative bg-slate-900/50 backdrop-blur-sm border ${horizon.borderColor} rounded-2xl p-8 hover:bg-slate-800/50 transition-all duration-300`}>
                {/* Number Badge */}
                <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${horizon.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <span className="text-white">{horizon.number}</span>
                </div>

                {/* Icon */}
                <div className="mb-6 relative">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${horizon.color} relative`}>
                    <horizon.icon className="size-8 text-white" />
                    <div className={`absolute inset-0 ${horizon.glowColor} blur-xl rounded-xl group-hover:blur-2xl transition-all`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white mb-2">
                  {horizon.title}
                </h3>
                <p className={`text-transparent bg-clip-text bg-gradient-to-r ${horizon.color} mb-4`}>
                  {horizon.subtitle}
                </p>
                <p className="text-slate-400 leading-relaxed">
                  {horizon.description}
                </p>

                {/* Glow Effect */}
                <div className={`absolute inset-0 ${horizon.glowColor} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Connecting Line */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-violet-500 opacity-20" />
      </div>
    </section>
  );
}
