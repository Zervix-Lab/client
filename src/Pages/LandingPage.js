import React, { useEffect, useState, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import toast, { Toaster } from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';
import { IoDiamondOutline, IoFlashOutline, IoColorPaletteOutline, IoPeopleOutline, IoCodeSlashOutline, IoChatbubblesOutline,  IoLogoLinkedin, IoLogoFacebook, IoLogoInstagram, IoGlobeOutline, IoLogoWhatsapp, IoCallOutline, IoMailOutline} from 'react-icons/io5';
import logo from '../Images/logo.png';
import ceo from '../Images/ceo.jpeg';
import homeImage from '../Images/homeImage.webp';
import homeImage2 from '../Images/homeImage2.webp';
import service from '../Images/services.webp'
import uiux from '../Images/uiux.png'
import marketing from '../Images/marketing.png'
import branding from '../Images/branding.png'
import social from '../Images/social.png'
import software from '../Images/software.png'
import website from '../Images/website.png'
import about from '../Images/about.webp'

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
  })
};

const LandingPage = () => {
  const [state, handleSubmit] = useForm("mwpndnbw");
  const formRef = useRef();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // highlight active section in nav
  const [activeSection, setActiveSection] = useState('home');
  // Add a tab for Services
  const [serviceTab, setServiceTab] = useState('it');

  // Data for both tabs
  const serviceData = React.useMemo(() => ({
    it: [
      { title: 'UI/UX Design', desc: 'Wireframes, prototypes, and beautiful, user-first design systems.', image: uiux },
      { title: 'Software Development', desc: 'Custom solutions tailored to your business goals.', image: software },
      { title: 'Website Development', desc: 'Fast, SEO-friendly websites with modern stacks.', image: website },
    ],
    graphic: [
      { title: 'Branding & Identity', desc: 'Logos, color palettes, typography, and brand systems.', image: branding },
      { title: 'Social Media Graphics', desc: 'On-brand creatives optimized for every platform.', image: social },
      { title: 'Marketing Assets', desc: 'Banners, posters, slide decks, and more.', image: marketing },
    ],
  }), []);

  // --- Background Slideshow State ---
  const images = React.useMemo(() => [homeImage, homeImage2], []);
  const [bgIndex, setBgIndex] = useState(0);

  // Preload images to prevent flash on first load
  useEffect(() => {
    images.forEach(src => { const img = new Image(); img.src = src; });
  }, [images]);

  // Cycle through images every 15 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setBgIndex(i => (i + 1) % images.length);
    }, 15000);
    return () => clearInterval(id);
  }, [images.length]);
  // --- End Slideshow State ---

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

  // Track which section is in view
  useEffect(() => {
    const ids = ['home', 'services', 'about', 'contact'];
    const els = ids
      .map(id => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -60% 0px' } // Active when in the middle 20% of the screen
    );

    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleMobileLinkClick = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message sent successfully!");
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded]);

  return (
    <div className="min-h-screen text-white font-sans scroll-smooth">
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      {/* Header (overlay on hero) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-100 ${
          scrolled && !menuOpen ? 'bg-black/30 backdrop-blur-md md:bg-black/20' : ''
        } ${menuOpen ? 'bg-black' : 'md:bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-24">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Zervix Lab Logo" className="h-[82px] md:h-[102px] w-auto" />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 text-base">
            <a
              href="#home"
              aria-current={activeSection === 'home' ? 'page' : undefined}
              className={`transition ${activeSection === 'home' ? 'text-orange-500' : 'text-white/90 hover:text-white'}`}
            >
              Home
            </a>
            <a
              href="#services"
              aria-current={activeSection === 'services' ? 'page' : undefined}
              className={`transition ${activeSection === 'services' ? 'text-orange-500' : 'text-white/90 hover:text-white'}`}
            >
              Services
            </a>
            <a
              href="#about"
              aria-current={activeSection === 'about' ? 'page' : undefined}
              className={`transition ${activeSection === 'about' ? 'text-orange-500' : 'text-white/90 hover:text-white'}`}
            >
              About
            </a>
            <a
              href="#contact"
              aria-current={activeSection === 'contact' ? 'page' : undefined}
              className={`transition ${activeSection === 'contact' ? 'text-orange-500' : 'text-white/90 hover:text-white'}`}
            >
              Contact
            </a>
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
            className={`fixed top-0 right-0 z-50 h-full w-72 bg-black border-l border-white/10 pt-20 px-6 flex flex-col gap-4 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            <a
              href="#home"
              onClick={(e) => handleMobileLinkClick(e, 'home')}
              aria-current={activeSection === 'home' ? 'page' : undefined}
              className={`py-2 transition ${activeSection === 'home' ? 'text-orange-500' : 'text-white/90 hover:text-white'}`}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => handleMobileLinkClick(e, 'services')}
              aria-current={activeSection === 'services' ? 'page' : undefined}
              className={`py-2 transition ${activeSection === 'services' ? 'text-orange-500' : 'text-white/90 hover:text-white'}`}
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => handleMobileLinkClick(e, 'about')}
              aria-current={activeSection === 'about' ? 'page' : undefined}
              className={`py-2 transition ${activeSection === 'about' ? 'text-orange-500' : 'text-white/90 hover:text-white'}`}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => handleMobileLinkClick(e, 'contact')}
              aria-current={activeSection === 'contact' ? 'page' : undefined}
              className={`py-2 transition ${activeSection === 'contact' ? 'text-orange-500' : 'text-white/90 hover:text-white'}`}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id='home' className="relative h-[100svh] md:h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          <AnimatePresence>
            {/* Simple cross-fade transition */}
            <motion.img
              key={bgIndex}
              src={images[bgIndex]}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, ease: 'easeInOut' }} // Slow, smooth fade
            />
          </AnimatePresence>
          {/* Dark gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#19191A]/75 via-[#19191A]/90 to-[#19191A]" />
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
            <span className="text-orange-500">Zervix Lab</span> blends technology and creativity to build modern, user-first solutions and standout designs.
          </motion.p>

          <div className='mt-8 flex flex-row justify-center items-center gap-4'>
           <motion.a 
              href="#contact"
              className="inline-block px-6 py-2.5 text-base md:px-8 md:py-3 md:text-lg font-semibold rounded-xl bg-white text-black shadow-lg hover:bg-gray-300 transition border-2 border-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              Get Started
            </motion.a>
            <motion.a
              href="#services"
              className="inline-block px-6 py-2.5 text-base md:px-8 md:py-3 md:text-lg font-semibold rounded-xl border-2 border-white text-white hover:bg-white/10 transition"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
            >
              View Services
            </motion.a>
          </div>
          
          
        </div>
        {/* Key Features Bar */}
        <div className="absolute bottom-0 left-0 right-0 w-screen px-3 md:px-6 pb-3 md:pb-6">
          <motion.div
            className="mx-auto max-w-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-r from-orange-100/10 via-amber-100/60 to-orange-100/70 ">
              <div className="relative rounded-2xl bg-[#19191A]/95 backdrop-blur-xl">
                {/* subtle top gloss */}
                <div className="pointer-events-none absolute inset-x-0 -top-1 h-1 rounded-t-2xl bg-gradient-to-r from-white/5 via-white/10 to-transparent blur-sm" />
                {/* dividers between 3 equal columns */}
                <div className="relative w-full grid grid-cols-3 items-center text-xs md:text-base lg:text-lg py-2.5 md:py-3.5 px-4 md:px-8 divide-x divide-white/10">
                  <div className="px-4 md:px-6 lg:px-8 flex justify-center">
                    <Feature
                      icon={<IoDiamondOutline className="text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.35)]" />}
                      label="Quality Work"
                    />
                  </div>
                  <div className="px-4 md:px-6 lg:px-8 flex justify-center">
                    <Feature
                      icon={<IoFlashOutline className="text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.35)]" />}
                      label="Fast Delivery"
                    />
                  </div>
                  <div className="px-4 md:px-6 lg:px-8 flex justify-center">
                    <Feature
                      icon={<IoColorPaletteOutline className="text-orange-400 drop-shadow-[0_0_8px_rgba(251,146,60,0.35)]" />}
                      label="Creativity"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative scroll-mt-1 min-h-[100svh] px-8 py-16 md:py-24 text-white text-center overflow-hidden flex items-center">
         {/* Background image + overlay */}
         <div aria-hidden className="absolute inset-0">
           <img src={service} alt="" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-[#19191A]/90" />
         </div>

         {/* Foreground content */}
         <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.h3 
            className="text-4xl font-bold mb-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            Our Services
          </motion.h3>
          <motion.p
            className="text-gray-400 text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={1.5}
          >
            Explore the solutions we offer to elevate your business.
          </motion.p>

          {/* Tabs: IT | Graphic */}
          <div className="mt-10 mb-10 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-xl bg-[#101112] border border-white/10 p-1">
              <button
                type="button"
                aria-pressed={serviceTab === 'it'}
                onClick={() => setServiceTab('it')}
                className={`px-4 py-2 rounded-lg text-sm md:text-base transition
                  ${serviceTab === 'it'
                    ? 'text-orange-500 bg-white/10 ring-1 ring-orange-500/40'
                    : 'text-white/80 hover:text-white'}`}
              >
                IT Services
              </button>
              <button
                type="button"
                aria-pressed={serviceTab === 'graphic'}
                onClick={() => setServiceTab('graphic')}
                className={`px-4 py-2 rounded-lg text-sm md:text-base transition
                  ${serviceTab === 'graphic'
                    ? 'text-orange-500 bg-white/10 ring-1 ring-orange-500/40'
                    : 'text-white/80 hover:text-white'}`}
              >
                Graphic Services
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
           {serviceData[serviceTab].map((svc, i) => (
             <motion.div
               key={`${serviceTab}-${i}`}
               className="group relative rounded-xl border border-white/10 bg-[#0f1011]/70 backdrop-blur-sm shadow-lg shadow-black/20 hover:shadow-black/40 transition-all duration-300 h-full overflow-hidden"
               custom={i + 1}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true }}
               variants={fadeIn}
               whileHover={{ y: -6, scale: 1.02 }}
               transition={{ type: 'spring', stiffness: 300, damping: 22 }}
             >
               {/* subtle hover glow */}
               <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                 style={{ background: 'radial-gradient(380px at 50% 0%, rgba(249,115,22,0.18), transparent 70%)' }}
               />
               <div className="relative flex flex-col h-full">
                 <div className="relative h-40 w-full overflow-hidden">
                   <img src={svc.image} alt={svc.title} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 border-2 border-transparent group-hover:border-orange-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                 </div>
                 <div className="p-5 flex-grow flex flex-col text-left">
                   <h4 className="text-lg md:text-xl font-semibold text-white mb-1">{svc.title}</h4>
                   <p className="text-orange-400 text-sm flex-grow">{svc.desc}</p>
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
        </div>
       </section>

      {/* About Section */}
      <section id="about" className="relative scroll-mt-1 pt-20 md:pt-[120px] pb-20 md:pb-32 px-8 bg-[#0a0a0a] text-white overflow-hidden">
        <div aria-hidden className="absolute inset-0 z-0">
          <img src={about} alt="About background" className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-[#0a0a0a]/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          
          
          <div className="grid md:grid-cols-2 gap-12 items-start ">
            {/* Left Column: Main Content */}
            <motion.div 
              className="text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h4 className="text-2xl md:text-3xl font-bold mb-6">
                Driven by Passion, Defined by <span className="text-orange-500">Excellence</span>.
              </h4>
              <p className="text-gray-300 text-lg mb-6">
                Zervix Lab is more than just a software house; we are architects of the digital future. We are a passionate team of developers, designers, and strategists dedicated to crafting unique digital solutions with the latest technologies.
              </p>
              <p className="text-gray-300 text-lg mb-10">
                Our mission is to deliver unparalleled quality, boundless creativity, and intuitive, user-centered designs that empower businesses to scale and succeed.
              </p>
              
              {/* Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="bg-[#111] p-4 rounded-lg border border-white/10">
                  <IoDiamondOutline className="mx-auto text-3xl text-orange-400 mb-2" />
                  <h5 className="font-semibold">Quality</h5>
                  <p className="text-sm text-gray-400">Delivering robust and polished products.</p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-white/10">
                  <IoFlashOutline className="mx-auto text-3xl text-orange-400 mb-2" />
                  <h5 className="font-semibold">Innovation</h5>
                  <p className="text-sm text-gray-400">Pushing boundaries with modern tech.</p>
                </div>
                <div className="bg-[#111] p-4 rounded-lg border border-white/10">
                  <IoColorPaletteOutline className="mx-auto text-3xl text-orange-400 mb-2" />
                  <h5 className="font-semibold">Creativity</h5>
                  <p className="text-sm text-gray-400">Crafting unique and engaging experiences.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Why Choose Us */}
            <motion.div
              className="text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              custom={1.5}
            >
              <h4 className="text-2xl md:text-3xl font-bold mb-6">
                Why <span className="text-orange-500">Choose Us?</span>
              </h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 p-2 rounded-full border border-orange-500/30">
                    <IoPeopleOutline className="text-2xl text-orange-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Client-Centric Approach</h5>
                    <p className="text-gray-400">Your goals are our priority. We collaborate closely with you to ensure the final product exceeds expectations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 p-2 rounded-full border border-orange-500/30">
                    <IoCodeSlashOutline className="text-2xl text-orange-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Cutting-Edge Technology</h5>
                    <p className="text-gray-400">We utilize the latest frameworks and technologies to build scalable, secure, and future-proof solutions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 p-2 rounded-full border border-orange-500/30">
                    <IoChatbubblesOutline className="text-2xl text-orange-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Transparent Communication</h5>
                    <p className="text-gray-400">We believe in clear, consistent communication, keeping you informed at every stage of the project lifecycle.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* CEO Card - Centered */}
          <motion.div
            className="mt-20 md:mt-24 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="bg-[#111] p-6 rounded-xl shadow-lg border border-white/10 text-center flex flex-col sm:flex-row items-center gap-6">
              <img
                src={ceo}
                alt="Tharindu Dilshan, CEO"
                className="w-28 h-28 object-cover rounded-full border-4 border-orange-500 flex-shrink-0"
              />
              <div className="text-center sm:text-left">
                <h4 className="text-xl font-semibold text-orange-400">A Word from Our CEO</h4>
                <p className="mt-2 text-gray-300 italic">
                  “We’re not just building digital solutions—we’re shaping experiences. Our passion for blending technology and creativity drives us to push the boundaries of what's possible.”
                </p>
                <p className="mt-3 font-semibold text-white text-center sm:text-right">— Tharindu Ekanayake, CEO</p>
                <div className="flex justify-center sm:justify-start items-center gap-4 mt-4">
                  <a href="https://www.linkedin.com/in/tharindu-dilshan-ekanayake-462919195" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <IoLogoLinkedin size={22} />
                  </a>
                  <a href="https://www.facebook.com/tharindu.dilshan.3154" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <IoLogoFacebook size={22} />
                  </a>
                  <a href="https://www.instagram.com/tharindu_dilshan_ekanayake_/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <IoLogoInstagram size={22} />
                  </a>
                  <a href="https://tharindudilshanekanayake-8f97816b421e.herokuapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                    <IoGlobeOutline size={22} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
          <p className="mb-8">
            Have an idea or project in mind? We'd love to hear from you! Get in touch directly or fill out the form below.
          </p>

          {/* Contact Icons */}
          <div className="flex justify-center items-center gap-6 md:gap-8 mb-8">
            <a href="mailto:info@zervixlab.com" className="text-gray-400 hover:text-orange-500 transition-colors duration-300" aria-label="Email">
              <IoMailOutline size={30} />
            </a>
            <a href="https://wa.me/94768849340" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-300" aria-label="WhatsApp">
              <IoLogoWhatsapp size={30} />
            </a>
            <a href="tel:+94768849340" className="text-gray-400 hover:text-orange-500 transition-colors duration-300" aria-label="Call">
              <IoCallOutline size={30} />
            </a>
            <a href="https://www.linkedin.com/company/zervix-lab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-300" aria-label="LinkedIn">
              <IoLogoLinkedin size={30} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61571592040526" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors duration-300" aria-label="Facebook">
              <IoLogoFacebook size={30} />
            </a>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#222] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
              className="text-red-500 text-sm text-left -mt-2"
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#222] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm text-left -mt-2"
            />
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#222] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm text-left -mt-2"
            />
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition font-semibold text-lg disabled:bg-gray-500 disabled:cursor-not-allowed"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 text-gray-400">
        <div className="max-w-7xl mx-auto py-16 px-8 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center sm:text-left">
            {/* Column 1: About */}
            <div className="lg:col-span-1">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
                <img src={logo} alt="Zervix Lab Logo" className="h-24 w-auto -ml-3" />
              </div>
              <p className="text-sm text-gray-400">
                Architects of the digital future, blending technology and creativity to build modern solutions.
              </p>
            </div>
            
            {/* Column 2: Quick Links */}
            <div>
              <h5 className="font-bold text-white text-lg mb-4">Quick Links</h5>
              <ul className="space-y-3 text-sm">
                <li><a href="#home" className="hover:text-orange-500 transition">Home</a></li>
                <li><a href="#services" className="hover:text-orange-500 transition">Services</a></li>
                <li><a href="#about" className="hover:text-orange-500 transition">About</a></li>
                <li><a href="#contact" className="hover:text-orange-500 transition">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div>
              <h5 className="font-bold text-white text-lg mb-4">Get in Touch</h5>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:zervixlab@gmail.com" className="flex items-center justify-center sm:justify-start gap-2 hover:text-orange-500 transition">
                    <IoMailOutline />
                    <span>zervixlab@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+94768849340" className="flex items-center justify-center sm:justify-start gap-2 hover:text-orange-500 transition">
                    <IoCallOutline />
                    <span>(+94) 76 884 9340</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/94768849340" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center sm:justify-start gap-2 hover:text-orange-500 transition">
                    <IoLogoWhatsapp />
                    <span>WhatsApp</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Social Links & Subscribe */}
            <div>
              <h5 className="font-bold text-white text-lg mb-4">Follow Us</h5>
              <div className="flex justify-center sm:justify-start items-center gap-4 mb-6">
                <a href="https://www.linkedin.com/company/zervix-lab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition" aria-label="LinkedIn">
                  <IoLogoLinkedin size={24} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61571592040526" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition" aria-label="Facebook">
                  <IoLogoFacebook size={24} />
                </a>
              </div>

              
              <p className="text-sm mb-3">Get the latest updates and news from us.</p>
              <form className="flex items-center">
                <input
                  type="email"
                  name="subscribe_email"
                  placeholder="Your email address"
                  className="w-full px-3 py-2.5 text-sm rounded-l-md bg-[#222] text-white border border-r-0 border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-orange-500 text-white rounded-r-md hover:bg-orange-600 transition font-semibold text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Zervix Lab. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

// Small UI helpers for the feature strip
const Feature = ({ icon, label, className = '' }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    className={`group flex shrink-0 items-center gap-2 md:gap-3 ${className}`}
  >
    <span className="text-base md:text-2xl lg:text-3xl">{icon}</span>
    <span className="text-white/90 group-hover:text-white transition-colors">
      {label}
    </span>
  </motion.div>
);

