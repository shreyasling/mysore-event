import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg"
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Let's Plan Your <br/><span className="italic">Dream Event</span>
            </h2>
            <p className="text-ink/70 text-lg mb-8">
              Whether it's a grand wedding or an intimate traditional ceremony, we're here to bring your vision to life. Fill out the form, and we'll get back to you shortly.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-ink/50 mb-1">Location</h4>
                <p className="text-ink">Bengaluru & Mysore, Karnataka</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-ink/50 mb-1">Follow Us</h4>
                <a href="#" className="text-ink hover:underline underline-offset-4">@aanyasowmyaacelebrations</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ink/70">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-bg-warm border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-ink/20 outline-none transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ink/70">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-bg-warm border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-ink/20 outline-none transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ink/70">Event Type</label>
                  <select className="w-full bg-bg-warm border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-ink/20 outline-none transition-all text-ink/80 appearance-none">
                    <option>Wedding</option>
                    <option>Engagement</option>
                    <option>Seemantha (Baby Shower)</option>
                    <option>Corporate Event</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ink/70">Event Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-bg-warm border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-ink/20 outline-none transition-all text-ink/80"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ink/70">Location</label>
                  <input 
                    type="text" 
                    className="w-full bg-bg-warm border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-ink/20 outline-none transition-all"
                    placeholder="Bengaluru / Mysore"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ink/70">Expected Guests</label>
                  <input 
                    type="number" 
                    className="w-full bg-bg-warm border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-ink/20 outline-none transition-all"
                    placeholder="500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-ink/70">Additional Details</label>
                <textarea 
                  rows={4}
                  className="w-full bg-bg-warm border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-ink/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-ink text-white rounded-xl py-4 uppercase tracking-widest text-sm font-medium hover:bg-ink/90 transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
