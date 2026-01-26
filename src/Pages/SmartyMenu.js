import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  IoArrowBackOutline,
  IoDownloadOutline,
  IoQrCodeOutline,
  IoDesktopOutline,
  IoStatsChartOutline,
  IoRestaurantOutline,
  IoFolderOpenOutline,
  IoCloudDownloadOutline,
  IoPhonePortraitOutline,
  IoCloseOutline,
  IoLogoWhatsapp,
  IoMailOutline,
} from 'react-icons/io5';

import bgSmarty from '../Images/bg-smarty.webp';
import smartyLogo from '../Images/SmartyMenu.png';

export default function SmartyMenu() {
  const navigate = useNavigate();
  const [contactOpen, setContactOpen] = useState(false);

  // SEO Meta Tags
  useEffect(() => {
    // Page Title
    document.title = 'Smarty Menu | QR Code Restaurant Ordering System | ZervixLab';

    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    const seoDescription = 'Smarty Menu - Modern QR code ordering system for restaurants. Customers scan & order from their phone. Manage menus, track orders, view analytics & daily reports. $425 one-time + $25/month.';
    if (metaDescription) {
      metaDescription.setAttribute('content', seoDescription);
    }

    // Add/Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = 'QR code ordering system, restaurant ordering system, QR menu, digital menu, contactless ordering, restaurant management software, table ordering system, mobile ordering, restaurant POS, menu management, Sri Lanka restaurant software, Smarty Menu, ZervixLab';

    // Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: 'Smarty Menu | QR Code Restaurant Ordering System' },
      { property: 'og:description', content: seoDescription },
      { property: 'og:type', content: 'product' },
      { property: 'og:url', content: 'https://zervixlab.com/smarty-menu' },
      { property: 'og:site_name', content: 'ZervixLab' },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // Twitter Card Tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Smarty Menu | QR Code Restaurant Ordering System' },
      { name: 'twitter:description', content: seoDescription },
    ];

    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = 'https://zervixlab.com/smarty-menu';

    // Cleanup on unmount - restore original title
    return () => {
      document.title = 'ZervixLab – IT & Graphic Solutions';
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    if (!contactOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setContactOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [contactOpen]);

  // Direct ZIP download (S3)
  const downloadHref = 'https://application-mergx.s3.ap-south-1.amazonaws.com/SmartyMenu.zip';

  return (
    <div className="min-h-screen text-white">
      <div
        className="relative min-h-screen overflow-hidden"
        style={{
          backgroundImage: `url(${bgSmarty})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-[#0b0b0b]/80 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 py-10 md:py-14">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition"
            >
              <IoArrowBackOutline className="text-xl" />
              <span>Back</span>
            </Link>

            <span className="inline-flex items-center rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-xs text-orange-300">
              QR Code Restaurant Ordering System
            </span>
          </div>

          {/* Hero */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-white/10 backdrop-blur border border-white/10 shadow-lg">
                  <img
                    src={smartyLogo}
                    alt="Smarty Menu"
                    className="h-14 w-14 md:h-16 md:w-16 object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                    <span className="text-white">Smarty</span>{' '}
                    <span className="text-orange-500">Menu</span>
                  </h1>
                  <p className="mt-1 text-white/70">
                    Modern ordering. Faster service. Better insights.
                  </p>
                </div>
              </div>

              <p className="mt-6 text-white/80 leading-relaxed max-w-xl">
                Smarty Menu is a complete restaurant ordering & management solution.
                Customers scan a QR code, browse your menu, and place orders from their phone — while you manage menu items,
                orders, top dishes, and daily/weekly reports from a powerful admin panel.
              </p>

              {/* Pricing */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl md:text-4xl font-extrabold text-white">$425</span>
                  <span className="text-white/60 text-sm">one-time</span>
                </div>
                <div className="h-8 w-px bg-white/20 hidden sm:block" />
                <div className="flex items-baseline gap-1">
                  <span className="text-xl md:text-2xl font-bold text-orange-400">+$25</span>
                  <span className="text-white/60 text-sm">/month</span>
                </div>
                <span className="inline-flex items-center rounded-full bg-green-500/10 border border-green-500/20 px-3 py-1 text-xs text-green-300">
                  Includes updates & support
                </span>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={downloadHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-semibold text-black hover:brightness-110 transition shadow-lg shadow-orange-500/20"
                >
                  <IoDownloadOutline className="text-xl" />
                  <span>Download Demo</span>
                </a>
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
                >
                  Buy Now
                </button>
              </div>

              <p className="mt-3 text-xs text-white/50">
                Download will start immediately. If it doesn’t, open the link in a new tab and try again.
              </p>
            </div>

            {/* Visual card */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500/30 to-amber-500/20 blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-[#0f0f10]/70 backdrop-blur p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <IoRestaurantOutline className="text-2xl text-orange-400" />
                  <h2 className="text-xl font-bold">Key Benefits</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Benefit
                    icon={<IoQrCodeOutline className="text-xl" />}
                    title="QR Code Ordering"
                    desc="Customers scan & order instantly from any device."
                  />
                  <Benefit
                    icon={<IoDesktopOutline className="text-xl" />}
                    title="Admin Panel"
                    desc="Manage menus, orders, and restaurant settings."
                  />
                  <Benefit
                    icon={<IoStatsChartOutline className="text-xl" />}
                    title="Analytics & Reports"
                    desc="Top dishes, customer trends, daily/weekly reports."
                  />
                  <Benefit
                    icon={<IoRestaurantOutline className="text-xl" />}
                    title="Faster Service"
                    desc="Reduce wait time and improve table turnover."
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom: Install Steps */}
          <div className="mt-14 md:mt-20">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold">
                  Install in <span className="text-orange-500">4 Steps</span>
                </h3>
                <p className="mt-2 text-white/70 max-w-2xl">
                  Download the ZIP, install the desktop app, then scan the QR code on mobile to start ordering.
                </p>
              </div>
              <div className="flex items-center gap-3">
                
                <button
                  type="button"
                  onClick={() => setContactOpen(true)}
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Contact Us
                </button>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StepCard
                step="01"
                icon={<IoCloudDownloadOutline className="text-xl" />}
                title="Click Download"
                desc="Open the download link and save the ZIP file."
              />
              <StepCard
                step="02"
                icon={<IoFolderOpenOutline className="text-xl" />}
                title="Extract the ZIP"
                desc="Right‑click the ZIP → Extract All → choose a folder."
              />
              <StepCard
                step="03"
                icon={<IoDesktopOutline className="text-xl" />}
                title="Install Setup"
                desc="Run “Smarty Menu Setup” from the extracted folder to install."
              />
              <StepCard
                step="04"
                icon={<IoPhonePortraitOutline className="text-xl" />}
                title="Scan QR (Mobile)"
                desc="Use your phone camera/QR scanner. The QR code is included inside the ZIP."
              />
            </div>

            
          </div>

          {/* Contact modal */}
          {contactOpen && (
            <div className="fixed inset-0 z-[60]">
              <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={() => setContactOpen(false)}
                aria-hidden
              />
              <div className="relative h-full flex items-center justify-center px-6">
                <div
                  role="dialog"
                  aria-modal="true"
                  aria-label="Contact options"
                  className="w-full max-w-md rounded-2xl border border-white/10 bg-[#0f0f10]/95 backdrop-blur shadow-2xl"
                >
                  <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                    <div>
                      <div className="text-lg font-bold text-white">Contact Us</div>
                      <div className="text-sm text-white/60">Choose how you’d like to reach us</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setContactOpen(false)}
                      className="h-9 w-9 rounded-xl border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition inline-flex items-center justify-center"
                      aria-label="Close"
                    >
                      <IoCloseOutline className="text-xl" />
                    </button>
                  </div>

                  <div className="p-5 space-y-3">
                    <a
                      href="https://wa.me/94768849340"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition"
                    >
                      <span className="inline-flex items-center gap-3">
                        <span className="h-10 w-10 rounded-xl bg-green-500/10 border border-green-500/20 text-green-300 flex items-center justify-center">
                          <IoLogoWhatsapp className="text-xl" />
                        </span>
                        <span>
                          <span className="block font-semibold text-white">WhatsApp</span>
                          <span className="block text-sm text-white/60">Chat with our team</span>
                        </span>
                      </span>
                      <span className="text-white/50">→</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => {
                        setContactOpen(false);
                        navigate('/#contact');
                      }}
                      className="w-full inline-flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 transition text-left"
                    >
                      <span className="inline-flex items-center gap-3">
                        <span className="h-10 w-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300 flex items-center justify-center">
                          <IoMailOutline className="text-xl" />
                        </span>
                        <span>
                          <span className="block font-semibold text-white">Contact Form</span>
                          <span className="block text-sm text-white/60">Send a message from our website</span>
                        </span>
                      </span>
                      <span className="text-white/50">→</span>
                    </button>
                  </div>

                  
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Benefit({ icon, title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300 flex items-center justify-center">
          {icon}
        </div>
        <div>
          <div className="font-semibold text-white">{title}</div>
          <div className="text-sm text-white/65">{desc}</div>
        </div>
      </div>
    </div>
  );
}

function StepCard({ step, icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-5 overflow-hidden">
      <div className="absolute -top-16 -right-16 h-32 w-32 rounded-full bg-orange-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="flex items-start justify-between gap-3">
        <div className="h-10 w-10 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-300 flex items-center justify-center">
          {icon}
        </div>
        <div className="text-xs font-semibold tracking-widest text-white/45">{step}</div>
      </div>
      <div className="mt-4 font-bold text-white">{title}</div>
      <div className="mt-1 text-sm text-white/70 leading-relaxed">{desc}</div>
    </div>
  );
}
