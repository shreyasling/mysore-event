import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Aanya Sowmyaa transformed our wedding venue into an absolute dream. The floral mandap was beyond anything we could have imagined. Their attention to detail and professionalism made our special day stress-free.",
    author: "Priya & Rahul",
    event: "Luxury Wedding, Bengaluru"
  },
  {
    id: 2,
    text: "For my Seemantha, I wanted something serene and minimalist. The white-themed setup with the intricate plate decorations was stunning. Everyone was asking who did the decor!",
    author: "Sneha Reddy",
    event: "Seemantha Ceremony, Mysore"
  },
  {
    id: 3,
    text: "From the entrance decor to the stage lighting, everything was perfect for our engagement. They truly understood our vision and executed it flawlessly. Highly recommended!",
    author: "Karthik & Ananya",
    event: "Engagement Ceremony, Bengaluru"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-24 bg-blush/30 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-white/60 to-orange-50/60 blur-3xl" />
        <div className="absolute bottom-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-stone-100/60 to-rose-50/60 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Quote className="absolute top-0 left-4 md:left-20 w-32 h-32 text-ink/5 -z-10" />
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl mb-4"
          >
            Client <span className="italic">Stories</span>
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center px-8 md:px-16 py-12 bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[3rem] shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
            >
              <p className="text-xl md:text-3xl font-serif leading-relaxed text-ink/90 mb-10">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <h4 className="font-semibold text-lg tracking-wide uppercase text-ink">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-ink/60 text-sm mt-1">
                  {testimonials[currentIndex].event}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={prev}
              className="p-3 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm hover:bg-ink hover:text-white transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={next}
              className="p-3 rounded-full bg-white/50 backdrop-blur-md border border-white/60 shadow-sm hover:bg-ink hover:text-white transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
