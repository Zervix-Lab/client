import React, { useEffect, useState } from 'react';
import { IoMailOutline, IoLogoWhatsapp, IoLogoLinkedin, IoLogoFacebook } from 'react-icons/io5';
import logo from '../Images/logo.png';

export default function Products() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Handle navigation to landing page sections - direct navigation with hash
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();
    // Use window.location for direct navigation with hash
    window.location.href = `/#${sectionId}`;
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-100 ${
          menuOpen ? 'bg-black' : scrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black/50 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-24">
          <div className="flex items-center gap-3">
            <a href="/">
              <img src={logo} alt="Zervix Lab Logo" className="h-[82px] md:h-[102px] w-auto" />
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 text-base">
            <a
              href="/"
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-white/90 hover:text-white transition"
            >
              Home
            </a>
             <a
              href="/products"
              className="text-orange-500 transition"
            >
              Products
            </a>
            <a
              href="/#services"
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-white/90 hover:text-white transition"
            >
              Services
            </a>
            <a
              href="/#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-white/90 hover:text-white transition"
            >
              About
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-white/90 hover:text-white transition"
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
      </header>

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
            href="/"
            onClick={(e) => handleNavClick(e, 'home')}
            className="py-2 text-white/90 hover:text-white transition"
          >
            Home
          </a>
           <a
            href="/products"
            className="py-2 text-orange-500 transition"
          >
            Products
          </a>
          <a
            href="/#services"
            onClick={(e) => handleNavClick(e, 'services')}
            className="py-2 text-white/90 hover:text-white transition"
          >
            Services
          </a>
          <a
            href="/#about"
            onClick={(e) => handleNavClick(e, 'about')}
            className="py-2 text-white/90 hover:text-white transition"
          >
            About
          </a>
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="py-2 text-white/90 hover:text-white transition"
          >
            Contact
          </a>
         

          {/* Mobile Nav Contact Info */}
          <div className="mt-auto pb-8">
            <hr className="border-white/10 my-6" />
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">Get in Touch</p>
              <div className="flex justify-center items-center gap-6">
                <a href="mailto:zervixlab@gmail.com" className="text-gray-400 hover:text-orange-500 transition" aria-label="Email">
                  <IoMailOutline size={24} />
                </a>
                <a href="https://wa.me/94768849340" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition" aria-label="WhatsApp">
                  <IoLogoWhatsapp size={24} />
                </a>
                <a href="https://www.linkedin.com/company/zervix-lab" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition" aria-label="LinkedIn">
                  <IoLogoLinkedin size={24} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61571592040526" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition" aria-label="Facebook">
                  <IoLogoFacebook size={24} />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <main className="pt-24 md:pt-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Products</h1>
          <p className="text-gray-400 text-lg">Explore our range of products and solutions.</p>
          
          {/* Add your product content here */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product cards placeholder */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition">
              <h3 className="text-xl font-semibold mb-3">Coming Soon</h3>
              <p className="text-gray-400">Our products are being prepared. Stay tuned!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
