import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Mail, User, MessageSquare, Send } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ success: true, message: 'Message sent successfully!' });
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus({ success: false, message: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setStatus({ success: false, message: 'Failed to send message. Try again later.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-primary text-light-gray">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">Get In Touch</h1>
            <p className="mt-4 text-lg md:text-xl text-light-gray max-w-2xl mx-auto">
              Have a question or want to learn more? We'd love to hear from you.
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="bg-primary-light p-8 rounded-2xl border border-gray-800 space-y-6">
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>
              <p>For direct inquiries, partnership opportunities, or support, please email us. We'll get back to you as soon as possible.</p>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-secondary" />
                <a
                  href="mailto:ankitnarangwork@gmail.com"
                  className="text-lg text-white font-semibold hover:text-secondary transition-colors"
                >
                  ankitnarangwork@gmail.com
                </a>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <h3 className="text-xl font-semibold text-white">Business Hours</h3>
                <p className="mt-2 text-light-gray">Monday - Friday: 9:00 AM - 6:00 PM (IST)</p>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-primary-light p-8 rounded-2xl border border-gray-800 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-light-gray mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                    placeholder="Alex Johnson"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-light-gray mb-2">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-primary border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-light-gray mb-2">Message</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-500" />
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-primary border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:ring-2 focus:ring-secondary focus:outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-accent text-white px-6 py-3 rounded-lg font-bold text-lg hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-5 h-5" />
              </button>
              {status && (
                <p className={`text-sm text-center pt-2 ${status.success ? 'text-green-400' : 'text-red-400'}`}>
                  {status.message}
                </p>
              )}
              <p className="text-xs text-center text-gray-500 pt-2">Note: For a faster response, please use the email address provided.</p>
            </form>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
