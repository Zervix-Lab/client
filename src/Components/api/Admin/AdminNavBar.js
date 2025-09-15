import React from 'react';

export default function AdminNavBar() {
  return (
    <div className="bg-[#1e1e1e] text-gray-300 min-h-screen w-full md:w-64 p-4 flex flex-col">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      <nav className="space-y-6 flex flex-col">
        <a
          href="#dashboard"
          className="hover:text-[#f97316] transition-colors duration-200"
        >
          Dashboard
        </a>
        <a
          href="#projects"
          className="hover:text-[#f97316] transition-colors duration-200"
        >
          Projects
        </a>
        <a
          href="#blogs"
          className="hover:text-[#f97316] transition-colors duration-200"
        >
          Blogs
        </a>
        <a
          href="#notifications"
          className="hover:text-[#f97316] transition-colors duration-200"
        >
          Notifications
        </a>
      </nav>
    </div>
  );
}
