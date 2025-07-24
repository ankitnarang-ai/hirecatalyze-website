import React from 'react';
import { Zap, Target, Shield, DollarSign, Icon } from 'lucide-react';
import { motion } from 'framer-motion';

interface BenefitCardProps {
  icon: Icon;
  title: string;
  description: string;
}

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={cardVariants}
    className="bg-primary-light p-8 rounded-xl shadow-lg text-center border-t-4 border-secondary"
  >
    <div className="text-secondary inline-block mb-4">
      <Icon size={40} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-light-gray">{description}</p>
  </motion.div>
);

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Boost Efficiency',
      description: 'Reduce your time-to-hire by up to 70% with automated screening and interviews.',
    },
    {
      icon: Target,
      title: 'Improve Accuracy',
      description: 'Our AI matching ensures you connect with the best-fit candidates for every role.',
    },
    {
      icon: Shield,
      title: 'Reduce Bias',
      description: 'Objective AI assessments lead to fairer, more consistent hiring decisions.',
    },
    {
      icon: DollarSign,
      title: 'Cost Savings',
      description: 'Optimize your recruitment spend by focusing resources on top-tier candidates.',
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Unlock Superior Talent Acquisition</h2>
          <p className="mt-4 text-lg text-light-gray max-w-2xl mx-auto">Choosing HireCatalyze means choosing a faster, smarter, and fairer hiring process.</p>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((b, i) => (
            <BenefitCard key={i} {...b} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
