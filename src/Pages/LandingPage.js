import React from 'react';
import { motion } from 'framer-motion';
import logo from '../Images/logo.png';
import ceo from '../Images/ceo.jpeg';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 shadow-md bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Zervix Lab Logo" className="h-16 w-auto" />
        </div>
        <nav className="space-x-6 text-lg">
          <a href="#services" className="hover:text-gray-300 transition">Services</a>
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#contact" className="hover:text-gray-300 transition">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center py-28 px-6 bg-gradient-to-br from-black via-gray-900 to-black">
        <motion.h2 
          className="text-5xl font-extrabold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Innovate. Build. Launch.
        </motion.h2>
        <motion.p 
          className="mt-6 text-lg max-w-xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Welcome to Zervix Lab – crafting next-gen digital solutions with cutting-edge technologies and user-first designs.
        </motion.p>
        <motion.a 
          href="#contact"
          className="mt-8 px-8 py-3 text-lg font-semibold rounded-full bg-white text-black shadow-lg hover:bg-gray-200 transition"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          Get Started
        </motion.a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-8 bg-black text-white text-center">
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
      <section id="about" className="py-20 px-8 bg-[#0a0a0a] text-white text-center">
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
      <section id="contact" className="py-20 px-8 bg-[#111] text-white text-center">
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
