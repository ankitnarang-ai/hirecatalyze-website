import React from 'react';
import { FileText, Send, Smile, BarChart2, Icon } from 'lucide-react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  icon: Icon;
  title: string;
  description: string;
}

const cardVariants = {
  offscreen: { scale: 0.8, opacity: 0 },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <motion.div
    variants={cardVariants}
    className="flex flex-col items-center text-center p-6 bg-primary-light/50 rounded-lg border border-gray-800"
  >
    <div className="bg-accent/10 text-accent p-4 rounded-full mb-5 ring-2 ring-accent/30">
      <Icon size={36} />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-light-gray">{description}</p>
  </motion.div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: FileText,
      title: 'AI-Powered Resume Matching',
      description: 'Effortlessly upload resumes and let our intelligent algorithms perform swift analysis to streamline candidate screening and find quality applicants.',
    },
    {
      icon: Send,
      title: 'Automated AI Interview Invitations',
      description: 'Easily send personalized interview links to candidates, automating the initial interview stage and saving valuable time and coordination.',
    },
    {
      icon: Smile,
      title: 'Seamless Candidate AI Interview',
      description: 'Candidates use a unique link to take the interview at their convenience on a user-friendly platform, ensuring a smooth and engaging experience.',
    },
    {
      icon: BarChart2,
      title: 'Data-Driven AI Interview Reports',
      description: 'Get comprehensive reports with objective insights into candidate responses and communication style, enabling informed hiring decisions.',
    },
  ];

  return (
    <section id="features" className="py-20 bg-primary-light">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Transform Your Hiring Process</h2>
          <p className="mt-4 text-lg text-light-gray max-w-2xl mx-auto">From sourcing to decision-making, we provide the tools you need for smarter talent acquisition.</p>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
