import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  const scrollLinks = [
    { href: '/#features', label: 'Features' },
    { href: '/#benefits', label: 'Benefits' },
    { href: '/#how-it-works', label: 'How It Works' },
  ];

  const pageLinks = [
    { href: '/about', label: 'About Us' },
  ];

  const allLinks = isLandingPage ? [...scrollLinks, ...pageLinks] : pageLinks;

  const renderLink = (link: { href: string, label: string }) => {
    if (isLandingPage && link.href.startsWith('/#')) {
      return (
        <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-light-gray hover:text-white transition-colors">
          {link.label}
        </a>
      );
    }
    return (
      <Link key={link.href} to={link.href} onClick={() => setIsOpen(false)} className="text-light-gray hover:text-white transition-colors">
        {link.label}
      </Link>
    );
  };

  return (
    <header className="bg-primary/70 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white hover:text-secondary transition-colors">
          HireCatalyze
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          {allLinks.map(renderLink)}
        </nav>
        <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://app.hirecatalyze.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-5 py-2 rounded-lg font-semibold hover:bg-opacity-80 transition-all shadow-glow-accent"
            >
              Sign In
            </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-primary-light border-t border-gray-800">
          <nav className="flex flex-col items-center space-y-4 p-6">
            {allLinks.map(renderLink)}
            <a
              href="https://app.hirecatalyze.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white w-full text-center px-5 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-all shadow-glow-accent"
            >
              Sign In
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
