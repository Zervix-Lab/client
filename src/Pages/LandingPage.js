import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../Images/logo.png';
import ceo from '../Images/ceo.jpeg';
import homeImage from '../Images/homeImage.webp';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};

const LandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock body scroll when menu is open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? 'hidden' : original || '';
    return () => (document.body.style.overflow = original);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen text-white font-sans scroll-smooth">
      {/* Header (overlay on hero) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-24">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Zervix Lab Logo" className="h-[72px] md:h-[72px] w-auto" />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 text-base">
            <a href="#home" className="text-white/90 hover:text-white transition">Home</a>
            <a href="#services" className="text-white/90 hover:text-white transition">Services</a>
            <a href="#about" className="text-white/90 hover:text-white transition">About</a>
            <a href="#contact" className="text-white/90 hover:text-white transition">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label="Toggle navigation"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              // X icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile slide-over + backdrop */}
        <div className={`${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'} md:hidden`}>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={closeMenu}
          />
          {/* Panel */}
          <nav
            id="mobile-menu"
            className={`fixed top-0 right-0 z-50 h-full w-72 bg-[#0b0b0b]/95 backdrop-blur-md border-l border-white/10 pt-20 px-6 flex flex-col gap-4 transform transition-transform duration-300 ${
              menuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <a href="#home" onClick={closeMenu} className="py-2 text-white/90 hover:text-white">Home</a>
            <a href="#services" onClick={closeMenu} className="py-2 text-white/90 hover:text-white">Services</a>
            <a href="#about" onClick={closeMenu} className="py-2 text-white/90 hover:text-white">About</a>
            <a href="#contact" onClick={closeMenu} className="py-2 text-white/90 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id='home' className="relative h-[100svh] md:h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={homeImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/80 to-black/90" />
        </div>

        {/* Foreground content */}
        <div className="relative z-10">
          <motion.h2 
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Each word is hoverable. 'Launch.' is orange by default; hover -> white */}
            {['Innovate.', 'Design.', 'Build.', 'Launch.'].map((word, i) => {
              const isLaunch = word === 'Launch.';
              return (
                <React.Fragment key={i}>
                  <motion.span
                    className={`inline-block mr-2 cursor-pointer select-none ${isLaunch ? 'text-orange-500' : ''}`}
                    whileHover={{ y: -8, color: isLaunch ? '#ffffff' : '#f97316' }}
                    whileTap={{ y: -6, scale: 0.98, color: isLaunch ? '#ffffff' : '#f97316' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 18 }}
                  >
                    {word}
                  </motion.span>
                  {/* 2 rows on mobile */}
                  {i === 1 && <br className="block md:hidden" />}
                </React.Fragment>
              );
            })}
          </motion.h2>
          <motion.p 
            className="mt-6 text-lg max-w-xl mx-auto text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Welcome to Zervix Lab – where technology meets creativity. We craft next-gen IT solutions and captivating graphic designs with cutting-edge technologies and user-first experiences.
          </motion.p>
          <motion.a 
            href="#contact"
            className="mt-8 inline-block px-8 py-3 text-lg font-semibold rounded-full bg-white text-black shadow-lg hover:bg-gray-300 transition"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            Get Started
          </motion.a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="scroll-mt-24 py-20 px-8 bg-black text-white text-center">
        <motion.h3 
          className="text-3xl font-bold mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Our Services
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { title: 'Web Development', desc: 'Building responsive and scalable websites tailored to your business needs.' },
            { title: 'Mobile App Development', desc: 'Crafting seamless mobile applications for iOS and Android platforms.' },
            { title: "Desktop Application Development", desc: "Developing powerful desktop apps for Windows, Mac, and Linux." },
            { title: 'UI/UX Design', desc: 'Designing user-first experiences that are both functional and beautiful.' }
          ].map((service, i) => (
            <motion.div
              key={i}
              className="bg-[#111] p-6 rounded-xl shadow-md hover:shadow-white/10 transition"
              custom={i * 0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
              <p className="text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="scroll-mt-24 py-20 px-8 bg-[#0a0a0a] text-white text-center">
        <motion.h3
          className="text-3xl font-bold mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          About Us
        </motion.h3>
        <motion.div
          className="max-w-3xl mx-auto text-lg text-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="mb-6">
            Zervix Lab is a passionate software development team crafting unique digital solutions using the latest technologies. Our mission is to deliver quality, creativity, and user-centered designs.
          </p>
          <p>
            From startups to enterprises, we empower businesses to scale and succeed through innovative platforms and digital products.
          </p>
        </motion.div>

        {/* CEO's Word */}
        <motion.div
          className="mt-16 bg-[#111] p-8 rounded-xl shadow-lg max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <img
            src={ceo}
            alt="CEO"
            className="w-32 h-32 object-cover rounded-full border-4 border-orange-500"
          />
          <div className="text-left">
            <h4 className="text-xl font-semibold mb-2 text-orange-400">A Word from Our CEO</h4>
            <p className="text-gray-300 italic">
              “At Zervix Lab, we believe in pushing the boundaries of what's possible through passion, innovation, and teamwork. We’re not just building software—we’re shaping experiences.”
            </p>
            <p className="mt-2 font-semibold text-white">— Tharindu Dilshan, CEO</p>
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 py-20 px-8 bg-[#111] text-white text-center">
        <motion.h3
          className="text-3xl font-bold mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          Contact Us
        </motion.h3>
        <motion.div
          className="max-w-xl mx-auto text-gray-300 text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="mb-6">
            Have an idea or project in mind? We'd love to hear from you!
          </p>
          <form  action="https://formspree.io/f/mzzrepje" method="POST" className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#222] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#222] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
             name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#222] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold text-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
