'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Home() {
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { once: false });

  const [performance, setPerformance] = useState(0);
  const [seo, setSeo] = useState(0);
  const [ux, setUx] = useState(0);
  const [best, setBest] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    if (isInView) {
      let p = 0, s = 0, u = 0, b = 0;
      const interval = setInterval(() => {
        if (p < 95) setPerformance(++p);
        if (s < 100) setSeo(++s);
        if (u < 100) setUx(++u);
        if (b < 100) setBest(++b);
        if (p >= 95 && s >= 100 && u >= 100 && b >= 100) clearInterval(interval);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [isInView]);

  const features = [
    { label: "⚡ Fast Performance", value: performance },
    { label: "🔍 SEO Optimized", value: seo },
    { label: "🧠 User Friendly", value: ux },
    { label: "✅ Best Practices", value: best },
  ];

  const whyItems = [
    {
      title: "🧩 Modular and Scalable Code",
      desc: "Built for long-term growth, our codebase scales with your business.",
    },
    {
      title: "🛡️ Security-Focused Architecture",
      desc: "We prioritize safety using best industry standards and practices.",
    },
    {
      title: "🕹️ More professional Animations & Design",
      desc: "Crafted to look stunning and interactive like a modern powerfull  UI.",
    },
    {
      title: "🧠 Intelligent UI/UX Systems",
      desc: "Our UI adapts intuitively to users across devices.",
    },
    {
      title: "📱 100% Responsive & Fast",
      desc: "Looks amazing on all devices with lightning speed.",
    },
  ];

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
          <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text animate-glow tracking-wider">
            LaunchSite 🚀
          </h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 text-white font-medium relative z-50">
            <Link href="/" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">Home</Link>
            <Link href="/about" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">About</Link>
            <div className="group inline-block relative">
              <button className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">Products ▾</button>
              <ul className="absolute bg-black text-left shadow-2xl rounded-xl mt-2 z-50 group-hover:block invisible group-hover:visible transition-all duration-300 opacity-0 group-hover:opacity-100">
                <li><Link href="/products/web" className="block px-4 py-2 hover:bg-blue-800">Web Apps</Link></li>
                <li><Link href="/products/mobile" className="block px-4 py-2 hover:bg-blue-800">Mobile Apps</Link></li>
                <li><Link href="/products/systems" className="block px-4 py-2 hover:bg-blue-800">Systems</Link></li>
                <li><Link href="/products/enterprise" className="block px-4 py-2 hover:bg-blue-800">Enterprise Solutions</Link></li>
              </ul>
            </div>
            <Link href="/contact" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">Contact</Link>
          </nav>

          {/* Mobile Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden z-50 text-white">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu Dropdown */}
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


          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-10 animate-shimmer z-0"></div>
        </header>

        {/* === HEADING === */}
        <div className="text-center pt-28 py-12 overflow-hidden">
          <motion.h2
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-pulse"
          >
            Power Up Your Digital Business with LaunchSite
          </motion.h2>
          <p className="text-lg sm:text-xl mt-4 text-blue-200 italic">
            Premium Full Stack Websites with Game-Level Performance.
          </p>
        </div>

        {/* === HERO IMAGE === */}
        <div className="flex justify-center mt-10 px-4 max-w-full">
          <Image
            src="/images/game-hero.jpg"
            alt="Hero"
            width={800}
            height={400}
            className="rounded-xl shadow-lg hover:scale-105 transition duration-500 border-4 border-blue-700 w-full max-w-[800px] h-auto"
          />
        </div>

        {/* === PERFORMANCE METRICS === */}
        <section ref={chartRef} className="mt-16 px-4 sm:px-6 max-w-6xl mx-auto">
          <h3 className="text-3xl text-center font-bold text-cyan-300 mb-10">Performance Metrics</h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 px-4">
            {features.map((feature, idx) => (
              <div key={idx} className="min-w-[200px] bg-black border border-blue-700 rounded-xl p-6 flex flex-col items-center">
                <svg className="w-32 h-32">
                  <circle cx="64" cy="64" r="50" stroke="blue" strokeWidth="10" fill="none" />
                  <circle
                    cx="64" cy="64" r="50"
                    stroke="cyan"
                    strokeWidth="10"
                    strokeDasharray={`${(feature.value / 100) * 314}, 314`}
                    fill="none"
                    transform="rotate(-90 64 64)"
                  />
                </svg>
                <p className="text-2xl mt-4 font-bold text-blue-400">{feature.value}%</p>
                <p className="text-lg text-center mt-2">{feature.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* === WHY CHOOSE SECTION === */}
        <section className="mt-24 px-4 sm:px-6">
          <h3 className="text-4xl text-center text-blue-300 font-bold mb-10">Why Choose LaunchSite?</h3>
          <div className="space-y-8 max-w-4xl mx-auto">
            {whyItems.map((item, idx) => (
              <details
                key={idx}
                className="bg-gradient-to-r from-black via-blue-800 to-black text-white p-4 rounded-lg shadow-md border-l-4 border-cyan-400 transition-transform duration-300 hover:scale-105"
              >
                <summary className="cursor-pointer text-lg font-medium">{item.title}</summary>
                <p className="mt-2 text-blue-200 text-sm sm:text-base">{item.desc}</p>
              </details>
            ))}
          </div>
        </section>

        {/* === CTA BUTTON === */}
        <div className="text-center mt-20 relative">
          <Link href="/products/web">
            <motion.button
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5 }}
              className="relative bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 text-white text-xl md:text-2xl font-bold py-3 px-6 md:py-4 md:px-8 rounded-full shadow-2xl ring-2 ring-cyan-400 hover:ring-4 hover:shadow-cyan-500/50 transition z-10 animate-glow"
            >
              💼 Buy LaunchSite Premium Software Now
            </motion.button>
          </Link>
        </div>

        {/* === FOOTER === */}
        <footer className="bg-black text-center text-gray-400 py-6 border-t border-blue-900 mt-32">
          <p className="text-cyan-400 animate-pulse">© 2025 LaunchSite™ | Crafted with 💙 + 🚀</p>
        </footer>
      </div>
    </div>
  );
}
