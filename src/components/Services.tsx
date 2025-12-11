import { motion } from 'motion/react';
import { Compass, Layers, Brain, Lightbulb } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Compass,
    title: 'Technology Strategy',
    description: 'Align your technology investments with business objectives. We craft strategic roadmaps that drive sustainable competitive advantage.',
    features: ['Strategic Planning', 'Tech Stack Optimization', 'ROI Analysis', 'Vendor Selection'],
    image: 'https://images.unsplash.com/photo-1726138406359-673f93a70e46?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NjUzNjUyMDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Layers,
    title: 'Digital Transformation',
    description: 'Transform your organization with proven methodologies. We guide you through every stage of digital evolution with precision and care.',
    features: ['Process Automation', 'Cloud Migration', 'Legacy Modernization', 'Change Management'],
    image: 'https://images.unsplash.com/photo-1588866054175-c8347662ec72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGNvbnN1bHRpbmd8ZW58MXx8fHwxNzY1Mzc5Mjk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Brain,
    title: 'AI & Data Solutions',
    description: 'Unlock the power of intelligent systems. From data architecture to AI implementation, we turn information into actionable insights.',
    features: ['AI Strategy', 'Data Architecture', 'Machine Learning', 'Predictive Analytics'],
    image: 'https://images.unsplash.com/photo-1642775196125-38a9eb496568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGRhdGElMjBhbmFseXRpY3N8ZW58MXx8fHwxNzY1Mjg0MzM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    icon: Lightbulb,
    title: 'Future Innovation Consulting',
    description: 'Stay ahead of disruption. We help you identify, evaluate, and adopt emerging technologies that will define your industry&apos;s future.',
    features: ['Innovation Labs', 'Emerging Tech', 'R&D Strategy', 'Pilot Programs'],
    image: 'https://images.unsplash.com/photo-1763289685121-21c4e3f03aff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGZ1dHVyZSUyMGlubm92YXRpb258ZW58MXx8fHwxNzY1Mzc5Mjk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">
            Our Services
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive technology consulting services designed to accelerate your journey across all three horizons.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                
                {/* Icon Badge */}
                <div className="absolute top-4 left-4 p-3 bg-blue-600/90 backdrop-blur-sm rounded-xl">
                  <service.icon className="size-6 text-white" />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8">
                <h3 className="text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
