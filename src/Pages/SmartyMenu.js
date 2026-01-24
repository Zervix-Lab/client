import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  IoArrowBackOutline,
  IoDownloadOutline,
  IoQrCodeOutline,
  IoDesktopOutline,
  IoStatsChartOutline,
  IoRestaurantOutline,
} from 'react-icons/io5';

import bgSmarty from '../Images/bg-smarty.webp';
import smartyLogo from '../Images/SmartyMenu.png';

export default function SmartyMenu() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Google Drive direct-download endpoint (best-effort).
  // Note: Drive may still show a confirmation page for large/exe files.
  const driveFileId = '17qu4Ht7j7BCRKe9kDpMo4jCmoKOK-FeU';
  const downloadHref = `https://drive.google.com/uc?export=download&id=${driveFileId}`;

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

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={downloadHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-3 font-semibold text-black hover:brightness-110 transition shadow-lg shadow-orange-500/20"
                >
                  <IoDownloadOutline className="text-xl" />
                  <span>Download</span>
                </a>
                <a
                  href="https://wa.me/94768849340"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
                >
                  Request a Demo
                </a>
              </div>

              <p className="mt-3 text-xs text-white/50">
                If Google Drive shows a confirmation screen, click <span className="font-semibold">Download anyway</span>.
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-lg font-bold">Install & Setup</h3>
                <ol className="mt-3 space-y-2 text-sm text-white/75 list-decimal pl-5">
                  <li>Click the <span className="font-semibold text-white">Download</span> button.</li>
                  <li>After download, <span className="font-semibold text-white">extract</span> the ZIP file (Right click → Extract All).</li>
                  <li>Open the extracted folder and run <span className="font-semibold text-white">Smarty Menu Setup</span> to install.</li>
                  <li>
                    For mobile: use your phone camera (or any QR scanner) to scan the QR code.
                    The QR code file is included inside the extracted ZIP.
                  </li>
                </ol>
                <p className="mt-3 text-xs text-white/50">
                  Tip: If Windows shows a security warning, choose “More info” → “Run anyway” (only if you trust the source).
                </p>
              </div>
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
