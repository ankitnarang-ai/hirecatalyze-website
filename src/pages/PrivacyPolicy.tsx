import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const PrivacyPolicy: React.FC = () => {
    const sections = [
    { title: '1. Information We Collect', content: 'We collect information you provide directly to us, such as when you create an account, upload resumes, or communicate with us. We may also collect information automatically as you navigate the site, such as usage details, IP addresses, and information collected through cookies.' },
    { title: '2. How We Use Your Information', content: 'We use the information we collect to operate, maintain, and provide the features and functionality of the Service, to analyze how the Service is used, diagnose service or technical problems, maintain security, and personalize content.' },
    { title: '3. Sharing of Your Information', content: 'We will not rent or sell your personally identifiable information to others. We may share your information with third-party business partners for the purpose of providing the Service to you (e.g., email providers, hosting services).' },
    { title: '4. Data Security', content: 'We use commercially reasonable physical, administrative, and technological safeguards to preserve the integrity and security of all information collected through the Service. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%.' },
    { title: '5. Changes to Our Privacy Policy', content: 'We may modify or update this Privacy Policy from time to time to reflect the changes in our business and practices, and so you should review this page periodically. When we change the policy in a material manner we will let you know and update the ‘last updated’ date at the top of this page.' },
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
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-4">Privacy Policy</h1>
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

export default PrivacyPolicy;
