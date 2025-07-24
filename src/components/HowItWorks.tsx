import React from 'react';
import { UploadCloud, Mail, FileSignature } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      step: 1,
      title: 'Define & Discover',
      description: 'Upload resumes and add job descriptions. Our AI instantly matches the most relevant candidates.',
      icon: <UploadCloud className="w-10 h-10 text-secondary" />,
    },
    {
      step: 2,
      title: 'Engage & Assess',
      description: 'Send automated AI interview invites. Candidates complete them on their own schedule.',
      icon: <Mail className="w-10 h-10 text-secondary" />,
    },
    {
      step: 3,
      title: 'Analyze & Hire',
      description: 'Receive detailed, data-driven reports to make objective and confident hiring decisions.',
      icon: <FileSignature className="w-10 h-10 text-secondary" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-primary-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Your Path to Smarter Hiring in 3 Simple Steps</h2>
        </motion.div>
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2"></div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.3 }}
            className="grid md:grid-cols-3 gap-12 relative"
          >
            {steps.map((s) => (
              <motion.div
                key={s.step}
                variants={{ offscreen: { y: 50, opacity: 0 }, onscreen: { y: 0, opacity: 1 } }}
                className="text-center bg-primary p-8 rounded-xl shadow-lg border border-gray-700"
              >
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-secondary/10 rounded-full ring-2 ring-secondary/30">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-light-gray">{s.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
