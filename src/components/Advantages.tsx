import { motion } from 'motion/react';
import { Target, Users, Zap, Shield, TrendingUp, Award } from 'lucide-react';

const advantages = [
  {
    icon: Target,
    title: 'Strategic Clarity',
    description: 'We cut through complexity to deliver clear, actionable strategies aligned with your vision.'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Seasoned consultants with deep expertise across industries and emerging technologies.'
  },
  {
    icon: Zap,
    title: 'Rapid Execution',
    description: 'From strategy to implementation, we deliver results that matter, fast.'
  },
  {
    icon: Shield,
    title: 'Risk Mitigation',
    description: 'Thorough analysis and proven frameworks minimize transformation risks.'
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Growth',
    description: 'Solutions designed for long-term impact, not short-term fixes.'
  },
  {
    icon: Award,
    title: 'Proven Methodology',
    description: 'Battle-tested approaches refined through hundreds of successful engagements.'
  }
];

export function Advantages() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            Why Choose HozThink
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            We combine strategic thinking with technical excellence to deliver transformative results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:bg-slate-800/50 hover:border-blue-500/30 transition-all duration-300">
                {/* Icon */}
                <div className="mb-4 relative inline-flex">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-cyan-500/30 transition-all">
                    <advantage.icon className="size-6 text-blue-400" />
                  </div>
                  <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <h3 className="text-white mb-2">
                  {advantage.title}
                </h3>
                <p className="text-slate-400">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {[
            { number: '200+', label: 'Projects Delivered' },
            { number: '95%', label: 'Client Satisfaction' },
            { number: '50+', label: 'Industry Experts' },
            { number: '15+', label: 'Years Experience' }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2"
              >
                {stat.number}
              </motion.div>
              <p className="text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
