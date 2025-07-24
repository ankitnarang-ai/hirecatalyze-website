import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProblemSolution from '../components/ProblemSolution';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <Benefits />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
