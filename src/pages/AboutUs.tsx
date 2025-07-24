import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
  {
    name: 'Ankit Narang',
    role: 'Founder & CEO',
    imageUrl: 'https://res.cloudinary.com/dm2wxjddh/image/upload/v1753348884/ankit_pic_kbklai.jpg',
    bio: 'Visionary leader with a passion for leveraging AI to solve complex HR challenges and build happier, more efficient workplaces.',
  }
];

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary text-light-gray">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-20 md:py-28 text-center bg-primary-light"
        >
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              The Minds Behind <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Smarter Hiring</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-light-gray max-w-3xl mx-auto">
              We are a team of innovators, thinkers, and builders dedicated to revolutionizing the world of recruitment through the power of artificial intelligence.
            </p>
          </div>
        </motion.section>

        {/* Mission Section */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-lg text-light-gray leading-relaxed">
                Our mission is to empower organizations to build extraordinary teams by making the hiring process faster, fairer, and more intelligent. We believe that the right technology can eliminate hiring bottlenecks, reduce unconscious bias, and ultimately connect the best talent with the right opportunities, creating a win-win for companies and candidates.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
              className="h-80 bg-primary-light rounded-2xl flex items-center justify-center border border-gray-800"
            >
               <div className="text-center p-8">
                 <h3 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-secondary to-accent">AI + HR</h3>
                 <p className="text-light-gray mt-2">The Future of Talent Acquisition</p>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 md:py-24 bg-primary-light">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white">Meet the Leadership Team</h2>
              <p className="mt-4 text-lg text-light-gray max-w-2xl mx-auto">The passionate individuals driving HireCatalyze forward.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-primary p-8 rounded-2xl text-center border border-gray-800 shadow-lg hover:shadow-glow-secondary transition-shadow duration-300"
                >
                  <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-secondary/50" />
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-secondary font-semibold mb-4">{member.role}</p>
                  <p className="text-light-gray mb-6">{member.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <a href="https://x.com/Ankit_narang_07" className="text-light-gray hover:text-white"><Twitter size={24} /></a>
                    <a href="https://www.linkedin.com/in/ankitnarang1/" className="text-light-gray hover:text-white"><Linkedin size={24} /></a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
