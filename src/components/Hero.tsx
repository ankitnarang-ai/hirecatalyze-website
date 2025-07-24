import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-primary pt-24 pb-20 md:pt-32 md:pb-28">
       <div className="absolute inset-0 bg-gradient-to-b from-primary to-transparent z-10"></div>
       <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-primary to-transparent z-10"></div>
      <div className="container mx-auto px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Revolutionize Your Hiring</span> with AI-Powered Recruitment
          </h1>
          <p className="mt-6 text-lg md:text-xl text-light-gray max-w-3xl mx-auto">
            HireCatalyze streamlines your talent acquisition, from intelligent resume matching to automated AI interviews, finding your perfect candidate faster and smarter.
          </p>
          <div className="mt-10">
            <a
              href="https://app.hirecatalyze.com/signup"
              className="bg-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all transform hover:scale-105"
            >
              Get Started Free Today
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-24 max-w-4xl mx-auto"
        >
          <div className="bg-primary-light/50 p-2 rounded-xl border border-gray-700 backdrop-blur-sm shadow-2xl shadow-secondary/20">
             <video
                className="w-full rounded-lg"
                src="https://res.cloudinary.com/dm2wxjddh/video/upload/v1753354148/hirecatalyze-demo_jndnnx.mp4"
                autoPlay
                muted
                loop
                playsInline
              />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
