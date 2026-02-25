import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const images = [
  'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=60&w=1600&auto=format&fit=crop&fm=webp', // Elegant wedding setup
  'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=60&w=1600&auto=format&fit=crop&fm=webp', // Floral decor
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=60&w=1600&auto=format&fit=crop&fm=webp', // Event lighting
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-ink">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt="Event Decoration"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          referrerPolicy="no-referrer"
          decoding="async"
          fetchPriority={currentIndex === 0 ? "high" : "auto"}
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/80 uppercase tracking-[0.3em] text-sm md:text-base mb-6"
        >
          Bengaluru & Mysore
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white font-light mb-8 max-w-5xl leading-tight"
        >
          Crafting <span className="italic font-serif">Timeless</span> Celebrations
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#portfolio"
            className="inline-block px-8 py-4 bg-white text-ink rounded-full uppercase tracking-widest text-sm hover:bg-white/90 transition-colors"
          >
            View Our Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}
