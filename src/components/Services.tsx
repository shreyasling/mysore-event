import { motion } from 'motion/react';
import { Flower2, Sparkles, Heart, Crown } from 'lucide-react';

const services = [
  {
    title: 'Wedding Planning',
    description: 'Comprehensive management for grand celebrations, ensuring every detail is perfect.',
    icon: Crown,
  },
  {
    title: 'Custom Floral Decor',
    description: 'Bespoke stage backdrops and intricate floral arrangements tailored to your vision.',
    icon: Flower2,
  },
  {
    title: 'Seemantha Styling',
    description: 'Intricate baby shower plate decorations and serene, vintage-styled traditional setups.',
    icon: Heart,
  },
  {
    title: 'Engagement Ceremonies',
    description: 'Elegant solutions for entrance decor, mandaps, and atmospheric stage lighting.',
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24 bg-bg-warm overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-rose-100/50 to-orange-100/50 blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-stone-200/50 to-orange-50/50 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-6"
          >
            Our <span className="italic">Specialities</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-ink/70 text-lg"
          >
            Transforming dream events into reality through a variety of specialized services tailored to your unique vision.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-white/40 backdrop-blur-2xl border border-white/60 p-8 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 bg-white/60 border border-white/80 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <service.icon className="w-6 h-6 text-ink" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-4">{service.title}</h3>
              <p className="text-ink/60 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
