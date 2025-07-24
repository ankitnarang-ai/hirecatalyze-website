import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  return (
    <section id="cta" className="bg-gradient-to-r from-secondary to-accent">
      <div className="container mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Ready to Transform Your Recruitment?</h2>
          <p className="mt-4 text-lg text-primary/80 max-w-2xl mx-auto">
            Join hundreds of companies hiring smarter, not harder. Start your journey with HireCatalyze today and build your dream team.
          </p>
          <div className="mt-8">
            <a
              href="https://app.hirecatalyze.com/signup"
              className="bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-2xl transform hover:scale-105"
            >
              Start Your Free Trial
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
