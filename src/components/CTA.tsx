import { motion } from 'motion/react';
import { ArrowRight, Mail, Linkedin, Twitter } from 'lucide-react';

export function CTA() {
  return (
    <>
      {/* Main CTA Section */}
      <section id="contact" className="py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-12 md:p-16 shadow-2xl shadow-blue-500/10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white mb-6"
              >
                Let&apos;s Shape the Future Together
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-slate-300 mb-10 text-lg max-w-2xl mx-auto"
              >
                Partner with HozThink to navigate your transformation journey. 
                From strategic planning to full-scale implementation, we&apos;re here to help you think beyond the horizon.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              >
                <a
                  href="mailto:hello@hozthink.com"
                  className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                >
                  <Mail className="size-5" />
                  Get in Touch
                  <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-white rounded-full transition-all border border-slate-700"
                >
                  Explore Services
                </a>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="pt-8 border-t border-slate-700"
              >
                <p className="text-slate-400 mb-4">Connect with us</p>
                <div className="flex items-center justify-center gap-6">
                  <a href="mailto:hello@hozthink.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                    <Mail className="size-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                    <Linkedin className="size-5" />
                  </a>
                  <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                    <Twitter className="size-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl text-white">
                  HozThink<span className="text-blue-500">!</span>
                </span>
              </div>
              <p className="text-slate-400 max-w-md">
                Strategic technology consulting rooted in the 3-Horizons Model. 
                Empowering visionary leaders to navigate today, innovate tomorrow, and shape the future.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#horizons" className="text-slate-400 hover:text-blue-400 transition-colors">Our Philosophy</a></li>
                <li><a href="#services" className="text-slate-400 hover:text-blue-400 transition-colors">Services</a></li>
                <li><a href="#approach" className="text-slate-400 hover:text-blue-400 transition-colors">Approach</a></li>
                <li><a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>hello@hozthink.com</li>
                <li>+1 (555) 123-4567</li>
                <li className="pt-2">
                  <a href="#" className="hover:text-blue-400 transition-colors">Schedule a Call</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 HozThink. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
