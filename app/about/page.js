'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProducts, setShowProducts] = useState(false);


  return (
    <div
      className="relative text-white min-h-screen font-[var(--font-title)] overflow-x-hidden overflow-y-auto"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10">

        {/* === NAVBAR === */}
        <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-black shadow-lg backdrop-blur-md border-b border-cyan-500">
          <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text animate-glow tracking-wider">
            LaunchSite 🚀
          </h1>

          {/* Hamburger Menu */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none text-cyan-400"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Nav Menu Desktop */}
          <nav className="hidden md:flex space-x-6 text-white font-medium relative z-50">
            <Link href="/" className="hover:text-cyan-400 transition hover:scale-110">Home</Link>
            <Link href="/about" className="hover:text-cyan-400 transition hover:scale-110">About</Link>
            <div className="group relative">
              <button className="hover:text-cyan-400 transition hover:scale-110">Products ▾</button>
              <ul className="absolute bg-black rounded-xl mt-2 shadow-2xl z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition duration-300">
                <li><Link href="/products/web" className="block px-4 py-2 hover:bg-blue-800">Web Apps</Link></li>
                <li><Link href="/products/mobile" className="block px-4 py-2 hover:bg-blue-800">Mobile Apps</Link></li>
                <li><Link href="/products/systems" className="block px-4 py-2 hover:bg-blue-800">Systems</Link></li>
                <li><Link href="/products/enterprise" className="block px-4 py-2 hover:bg-blue-800">Enterprise Solutions</Link></li>
              </ul>
            </div>
            <Link href="/contact" className="hover:text-cyan-400 transition hover:scale-110">Contact</Link>
          </nav>

          {/* Mobile Nav Menu */}
          {menuOpen && (
  <div className="absolute top-20 left-0 w-full bg-black border-t border-blue-500 flex flex-col items-center space-y-4 px-6 py-6 md:hidden z-40">
    <Link href="/" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-400">Home</Link>
    <Link href="/about" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-400">About</Link>

    {/* Products Dropdown */}
    <div className="w-full flex flex-col items-center">
      <button
        onClick={() => setShowProducts(prev => !prev)}
        className="text-blue-400 font-semibold flex items-center gap-1 focus:outline-none"
      >
        Products
        <span className="text-white">{showProducts ? '▲' : '▼'}</span>
      </button>
      {showProducts && (
        <div className="mt-2 space-y-2 flex flex-col items-center">
          <Link href="/products/web" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-400">Web Apps</Link>
          <Link href="/products/mobile" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-400">Mobile Apps</Link>
          <Link href="/products/systems" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-400">Systems</Link>
          <Link href="/products/enterprise" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-400">Enterprise</Link>
        </div>
      )}
    </div>

    <Link href="/contact" onClick={() => setMenuOpen(false)} className="text-white hover:text-blue-400">Contact</Link>
  </div>
)}

        </header>

        {/* === HERO === */}
        <section className="text-center pt-32 py-16 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-pulse"
          >
            Who We Are
          </motion.h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto text-gray-300">
            At <span className="text-cyan-300 font-bold">LaunchSite</span>, we craft powerful full-stack web solutions to launch your ideas into the digital galaxy.
          </p>
        </section>

        {/* === CONTENT === */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-10 space-y-16 text-center">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass glow-box p-6 sm:p-8"
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-4 animate-glow-text">🚀 Our Mission</h2>
            <p className="text-gray-200 leading-relaxed text-lg">
              LaunchSite exists to empower businesses, developers, and creators with cutting-edge, beautifully designed, full-stack software. Whether you are a startup or scaling enterprise, we build the digital tools to get you there faster — and with style.
            </p>
          </motion.div>

          {/* Offerings */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass glow-box p-6 sm:p-8"
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 animate-glow-text">💡 What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Modern, responsive websites & web apps',
                'Custom software tailored to your needs',
                'Animated, game-style UI and UX',
                'SEO optimization and speed-first design',
                'Developer-friendly architecture with Next.js & Tailwind',
                'Full-stack deployment with Vercel & GitHub'
              ].map((point, index) => (
                <div
                  key={index}
                  className="glass glow-box px-6 py-4 text-cyan-200 text-sm shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition duration-300"
                >
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="glass glow-box p-6 sm:p-8"
          >
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 animate-glow-text">🌐 Technologies We Use</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">
              {[
                ['fab fa-html5', 'text-orange-500', 'HTML5'],
                ['fab fa-css3-alt', 'text-blue-500', 'CSS3'],
                ['fab fa-js', 'text-yellow-400', 'JavaScript'],
                ['fab fa-react', 'text-cyan-400', 'React'],
                ['fab fa-node-js', 'text-green-500', 'Node.js'],
                ['fas fa-atom', 'text-emerald-400', 'Electron'],
                ['fab fa-bootstrap', 'text-purple-500', 'Bootstrap'],
                ['fas fa-code', 'text-cyan-300', 'Next.js'],
                ['fab fa-python', 'text-yellow-300', 'Python'],
                ['fas fa-robot', 'text-pink-400', 'AI / ML'],
                ['fas fa-chart-line', 'text-blue-300', 'SEO'],
                ['fab fa-php', 'text-indigo-400', 'PHP'],
                ['fab fa-git-alt', 'text-orange-400', 'Git'],
                ['fab fa-windows', 'text-blue-400', 'WAMP Server'],
                ['fas fa-bolt', 'text-yellow-500', 'Socket.IO'],
                ['fas fa-server', 'text-red-400', 'SQL / MySQL'],
                ['fas fa-globe', 'text-green-400', 'Vercel'],
                ['fab fa-fire', 'text-orange-300', 'Firebase'],
                ['fas fa-bug', 'text-pink-300', 'Selenium IDE'],
                ['fas fa-terminal', 'text-gray-300', 'FastAPI'],
              ].map(([icon, color, label], idx) => (
                <div key={idx} className="glass glow-box p-4 text-center hover:scale-105 transition duration-300">
                  <i className={`${icon} fa-3x mb-2 ${color} animate-pulse`}></i>
                  <h6 className="text-white mt-1 animate-glow-text">{label}</h6>
                </div>
              ))}
              <div className="col-span-full text-cyan-500 mt-4 animate-pulse">... and more</div>
            </div>
          </motion.div>
        </section>

        {/* === FOOTER === */}
        <footer className="bg-black text-center text-gray-400 py-6 border-t border-blue-900 mt-32">
          <p className="text-cyan-400 animate-pulse">© 2025 LaunchSite™ | Crafted with 💙 + 🚀</p>
        </footer>
      </div>
    </div>
  );
}
