import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const TermsOfService: React.FC = () => {
  const sections = [
    { title: '1. Acceptance of Terms', content: 'By accessing or using the HireCatalyze service, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service. Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.' },
    { title: '2. Use License', content: 'Permission is granted to temporarily download one copy of the materials on HireCatalyze\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.' },
    { title: '3. Disclaimer', content: 'The materials on HireCatalyze\'s website are provided on an \'as is\' basis. HireCatalyze makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.' },
    { title: '4. Limitations', content: 'In no event shall HireCatalyze or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on HireCatalyze\'s website.' },
    { title: '5. Governing Law', content: 'These terms and conditions are governed by and construed in accordance with the laws of Delaware, USA and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-primary text-light-gray">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">Terms of Service</h1>
          <p className="text-center text-lg text-light-gray mb-12">Last updated: July 20, 2025</p>
          <div className="bg-primary-light p-8 md:p-12 rounded-2xl border border-gray-800 space-y-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold text-secondary mb-3">{section.title}</h2>
                <p className="text-light-gray leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
