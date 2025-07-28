'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaEnvelope, FaUser, FaCommentDots, FaGithub, FaLinkedin, FaFacebook, FaYoutube, FaPhone } from 'react-icons/fa';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);
const [showMobileProducts, setShowMobileProducts] = useState(false);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email address.';
    if (!form.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    const response = await fetch('https://formspree.io/f/mjkorwky', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setErrors({});
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Something went wrong. Please try again.');
  }
};



  return (
    <div
      className="relative text-white min-h-screen font-[var(--font-title)] overflow-x-hidden flex flex-col"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 flex-grow">
        {/* === NAVBAR === */}
        <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 bg-black shadow-lg backdrop-blur-md border-b border-cyan-500">
  <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text animate-glow tracking-wider">
    LaunchSite 🚀
  </h1>

  {/* Desktop Nav */}
  <nav className="hidden md:flex space-x-6 text-white font-medium relative z-50">
    <Link href="/" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">Home</Link>
    <Link href="/about" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">About</Link>
    <div className="group relative">
      <button className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">Products ▾</button>
      <ul className="absolute left-0 mt-2 bg-black shadow-xl rounded-xl z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-opacity duration-300 w-44 text-left">
        <li><Link href="/products/web" className="block px-4 py-2 hover:bg-blue-800">Web Apps</Link></li>
        <li><Link href="/products/mobile" className="block px-4 py-2 hover:bg-blue-800">Mobile Apps</Link></li>
        <li><Link href="/products/systems" className="block px-4 py-2 hover:bg-blue-800">Systems</Link></li>
        <li><Link href="/products/enterprise" className="block px-4 py-2 hover:bg-blue-800">Enterprise</Link></li>
      </ul>
    </div>
    <Link href="/contact" className="hover:text-cyan-400 transition-all duration-300 hover:scale-110">Contact</Link>
  </nav>

  {/* Hamburger for Mobile */}
  <div className="md:hidden">
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="text-white focus:outline-none text-xl"
    >
      {menuOpen ? '✖' : '☰'}
    </button>
  </div>
</header>
{menuOpen && (
  <div className="md:hidden absolute top-[72px] left-0 w-full bg-black border-t border-blue-600 z-40 px-6 py-6 flex flex-col items-center space-y-4 text-white text-lg">
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


      <div className="max-w-4xl mx-auto pt-28 px-4 sm:px-6">

          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-center bg-gradient-to-r from-blue-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-glow drop-shadow-md mb-6"
          >
            📞 Contact Information
          </motion.h1>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

            {[{
              icon: <FaUser />, text: 'Shalini Archana'
            }, {
              icon: <FaPhone />, text: '072 274 7647'
            }, {
              icon: <FaEnvelope />, text: 'sliitshalini@gmail.com'
            }, {
              icon: <FaGithub />, text: 'GitHub', link: 'https://github.com/shaliniarchana'
            }, {
              icon: <FaLinkedin />, text: 'LinkedIn', link: 'https://www.linkedin.com/in/shalini-archana-vidanaarachchi-417a08314/'
            }, {
              icon: <FaFacebook />, text: 'Facebook', link: 'https://www.facebook.com/share/16wDRaq9cF/'
            }, {
              icon: <FaYoutube />, text: 'YouTube', link: 'https://youtube.com/@launchsite-pro?si=P5sI-RgTBTSnBXxJ' }].map(({ icon, text, link }, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={link || '#'}
                target="_blank"
               className="flex items-center gap-3 px-6 py-4 bg-black/40 border border-cyan-500 rounded-2xl shadow-xl transition-all duration-300 text-lg hover:bg-cyan-950 hover:border-cyan-400 backdrop-blur-sm animate-shimmer group"

              >
                <span className="text-cyan-400 text-xl group-hover:text-white">{icon}</span>
                <span className="text-white group-hover:text-cyan-300 font-medium">{text}</span>
              </motion.a>
            ))}
          </div>

         <div className="flex justify-center pb-20 sm:pb-0">
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => setShowForm(!showForm)}
    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold py-3 px-6 sm:px-8 rounded-full shadow-xl hover:shadow-cyan-600 transition-all duration-300"
  >
    {showForm ? 'Hide' : 'Open'} Contact Form
  </motion.button>
</div>


          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-10 pb-16"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 300 }}
                  className="text-center text-white font-bold text-2xl bg-gradient-to-br from-cyan-600 via-blue-700 to-black p-8 rounded-3xl border-4 border-cyan-400 shadow-2xl animate-pulse ring-2 ring-cyan-500"
                >
                  ⚡️ Message Sent! Thank you for reaching out — our cosmic crew will get back to you at warp speed! 🛸
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  onSubmit={handleSubmit}
                  className="bg-gradient-to-br from-blue-950 via-black to-blue-950 backdrop-blur-md p-10 rounded-3xl shadow-2xl border border-cyan-500/60 space-y-6 relative mt-6"
                >
                  <div className="absolute top-0 left-0 w-full h-full rounded-3xl border-4 border-cyan-400/30 animate-border-glow pointer-events-none" />

                  <div className="flex flex-col">
                    <label className="text-cyan-300 mb-2 flex items-center gap-2">
                      <FaUser /> Your Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter your name"
                      className="bg-black/40 border border-cyan-700 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div className="flex flex-col">
                    <label className="text-cyan-300 mb-2 flex items-center gap-2">
                      <FaEnvelope /> Email Address
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="example@email.com"
                      className="bg-black/40 border border-cyan-700 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div className="flex flex-col">
                    <label className="text-cyan-300 mb-2 flex items-center gap-2">
                      <FaCommentDots /> Your Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us what you're looking for..."
                      className="bg-black/40 border border-cyan-700 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-3 px-4  sm:px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-700"
                  >
                    🚀 Send Message
                  </motion.button>
                </motion.form>
              )}
            </motion.div>
          )}
        </div>
      </div>

      <footer className="bg-black text-center text-gray-400 py-6 border-t border-blue-900 mt-auto">
        <p className="text-cyan-400 animate-pulse">© 2025 LaunchSite™ | Crafted with 💙 + 🚀</p>
      </footer>
    </div>
    
  );
}
