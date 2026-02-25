import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ['All', 'Traditional', 'Luxury', 'Minimalist'];

const portfolioItems = [
  {
    id: 1,
    title: 'Serene White Seemantha',
    category: 'Minimalist',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Grand Floral Mandap',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Vintage Engagement Setup',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Pastel Themed Wedding',
    category: 'Minimalist',
    image: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Royal Heritage Decor',
    category: 'Traditional',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Crystal & Lights Reception',
    category: 'Luxury',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = portfolioItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl mb-6"
            >
              Portfolio <span className="italic">Highlights</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-ink/70 text-lg"
            >
              A glimpse into our crafted experiences, from intimate traditional ceremonies to grand luxury weddings.
            </motion.p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm tracking-wide transition-all ${
                  activeCategory === category
                    ? 'bg-ink text-white'
                    : 'bg-bg-warm text-ink/70 hover:bg-ink/10'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-bg-warm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-white/80 text-xs uppercase tracking-widest mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-white text-2xl font-serif">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
