import React from 'react';
import { Users, Clock, ClipboardCheck, Icon } from 'lucide-react';
import { motion } from 'framer-motion';

interface SolutionCardProps {
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

const SolutionCard: React.FC<SolutionCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={cardVariants}
    className="bg-primary-light p-6 rounded-xl shadow-lg hover:shadow-glow-secondary transition-all border border-gray-800 transform hover:-translate-y-2"
  >
    <div className="bg-secondary/10 text-secondary inline-block p-3 rounded-full mb-4 ring-2 ring-secondary/30">
      <Icon size={32} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-light-gray">{description}</p>
  </motion.div>
);

const ProblemSolution: React.FC = () => {
  const solutions = [
    {
      icon: Users,
      title: 'Manual Screening Overload',
      description: 'Our AI intelligently matches candidates to job descriptions, eliminating manual effort and surfacing top talent instantly.',
    },
    {
      icon: Clock,
      title: 'Lengthy Interview Processes',
      description: 'Automate initial screening with AI interviews that candidates can take anytime, saving countless coordination hours.',
    },
    {
      icon: ClipboardCheck,
      title: 'Subjective Hiring Decisions',
      description: 'Receive data-backed reports on every candidate, providing objective insights for fairer, more informed hiring choices.',
    },
  ];

  return (
    <section id="problem-solution" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Tired of Manual Hiring Bottlenecks?</h2>
          <p className="mt-4 text-lg text-light-gray max-w-2xl mx-auto">Inefficient, traditional hiring processes cost you time, money, and the best candidates. Here’s how we fix it.</p>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {solutions.map((s, i) => (
            <SolutionCard key={i} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
