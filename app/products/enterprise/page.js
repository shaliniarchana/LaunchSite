'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Slider from 'react-slick';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaSearch } from 'react-icons/fa';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Add enterprise data
const enterprise = [
  /*
  {
    
    id: 1,
    title: 'ERP Manager Pro',
    images: ['/images/1.png', '/images/2.png'],
    tech: ['Next.js', 'PostgreSQL', 'TailwindCSS'],
    link: '#',
  },
  */
  
];

export default function EnterprisePage() {
  const [search, setSearch] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMobileProducts, setShowMobileProducts] = useState(false);

  const filteredApps = enterprise.filter((app) => {
  const query = search.toLowerCase();
  return (
      app.title.toLowerCase().includes(query) ||
  app.tech.some((tech) => tech.toLowerCase().includes(query)) ||
  app.category?.toLowerCase().includes(query) ||
  app.description?.toLowerCase().includes(query)
  );
});


  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
  };

  return (
    <div
      className="relative text-white min-h-screen font-[var(--font-title)] overflow-x-hidden"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10">
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-lg backdrop-blur-md border-b border-cyan-500">
          <div className="flex justify-between items-center px-6 py-4">
            <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text animate-glow tracking-wider">
              LaunchSite 🚀
            </h1>

            {/* Hamburger for Mobile */}
            <div className="md:hidden text-white text-3xl z-50" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX /> : <HiMenu />}
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-6 text-white font-medium">
              <Link href="/" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">Home</Link>
              <Link href="/about" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">About</Link>
             <div className="relative group">
  <div className="hover:text-cyan-400 transition-all duration-300 hover:scale-110 cursor-pointer">
    Products ▾
  </div>

  <div className="absolute left-0 mt-2 bg-black shadow-2xl rounded-xl z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200">
    <ul className="py-2 pointer-events-auto">
      <li><Link href="/products/web" className="block px-4 py-2 hover:bg-blue-800 whitespace-nowrap">Web Apps</Link></li>
      <li><Link href="/products/mobile" className="block px-4 py-2 hover:bg-blue-800 whitespace-nowrap">Mobile Apps</Link></li>
      <li><Link href="/products/systems" className="block px-4 py-2 hover:bg-blue-800 whitespace-nowrap">Systems</Link></li>
      <li><Link href="/products/enterprise" className="block px-4 py-2 hover:bg-blue-800 whitespace-nowrap">Enterprise Solutions</Link></li>
    </ul>
  </div>
</div>
              <Link href="/contact" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">Contact</Link>
            </nav>
          </div>

          {/* Hamburger for Mobile */}
  
</header>
{menuOpen && (
  <div className="md:hidden fixed top-[72px] left-0 w-full bg-black border-t border-blue-600 z-40 px-6 py-6 flex flex-col items-center space-y-4 text-white text-lg max-h-[calc(100vh-72px)] overflow-y-auto">

    <Link href="/" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Home</Link>
    <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">About</Link>

    <button
      onClick={() => setShowMobileProducts(prev => !prev)}
      className="flex items-center gap-2 text-blue-400 font-semibold"
    >
      Products {showMobileProducts ? '▲' : '▼'}
    </button>

    {showMobileProducts && (
      <div className="flex flex-col items-center space-y-2">
        <Link href="/products/web" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Web Apps</Link>
        <Link href="/products/mobile" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Mobile Apps</Link>
        <Link href="/products/systems" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Systems</Link>
        <Link href="/products/enterprise" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Enterprise</Link>
      </div>
    )}

    <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-400">Contact</Link>
  </div>
)}

        

        {/* Page content */}
        <main className="pt-28 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
             className="bg-gradient-to-br from-blue-950 to-black border border-cyan-500 rounded-2xl p-6 shadow-2xl hover:shadow-cyan-400/40 animate-blue-burning"
          >
            ⚙️ Enterprise Softwares Showcase
          </motion.h1>

          {/* Search Bar */}
     
 <div className="flex justify-center items-center w-full md:w-1/2 mx-auto relative pb-6">
  <input
    type="text"
    placeholder="Search enterprise softwares using any key..."
    className="w-full px-4 py-3 pr-10 text-white bg-blue-950 border border-cyan-500 rounded-lg focus:outline-none shadow-lg hover:ring-2 hover:ring-cyan-400 transition placeholder-white"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
  <FaSearch className="absolute right-3 text-white pointer-events-none" />
</div>


          {/* Software Grid */}
          <div className="min-h-[400px] mb-24">
            {filteredApps.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {filteredApps.map((app) => (
                  <motion.div
                    key={app.id}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-blue-950 to-black border border-cyan-500 rounded-2xl p-6 shadow-2xl hover:shadow-cyan-400/40"
                  >
                  <div className="w-full h-[160px] sm:h-[220px] rounded-lg overflow-hidden border-2 border-cyan-700 shadow-md mb-4">
  <Slider {...sliderSettings}>
    {app.images.map((img, idx) => (
      <div key={idx} className="w-full h-full bg-black flex items-center justify-center">
        <Image
          src={img}
          alt={`${app.title} ${idx + 1}`}
          width={1000}     // Set image to smaller size
          height={130}
       className="object-contain pt-2"

           
        />
      </div>
    ))}
  </Slider>
</div>

                    <h2 className="text-xl md:text-2xl font-bold text-cyan-300 mb-3">{app.title}</h2>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {app.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-sm bg-blue-800 text-cyan-200 rounded-full border border-cyan-300 shadow"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-center mt-4">
                      <Link
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative inline-block text-black font-extrabold py-3 px-6 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-300 shadow-xl hover:scale-105 transition-transform duration-300"
                      >
                        🛒 Buy Now
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center text-cyan-300 text-lg mt-20 mb-32">
                ❌ No Enterprise Systems found matching your search.
              </div>
            )}
          </div>
        </main>

        <footer className="bg-black text-center text-gray-400 py-6 border-t border-blue-900">
          <p className="text-cyan-400 animate-pulse">© 2025 LaunchSite™ | Crafted with 💙 + 🚀</p>
        </footer>
      </div>
    </div>
  );
}
