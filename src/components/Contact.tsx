import React, { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    location: '',
    guests: '',
    details: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `*New Booking Inquiry* 🌟\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Event Type:* ${formData.eventType}\n*Event Date:* ${formData.eventDate || 'Not specified'}\n*Location:* ${formData.location || 'Not specified'}\n*Expected Guests:* ${formData.guests || 'Not specified'}\n*Details:* ${formData.details || 'None'}`;
    
    const url = `https://wa.me/919731573373?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="relative py-24 bg-bg-warm overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-orange-100/40 to-rose-100/40 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-stone-200/40 to-orange-50/40 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
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
                <p className="text-ink mb-4">Silk City, Ramanagara, Karnataka 562159</p>
                <div className="w-full h-48 rounded-2xl overflow-hidden shadow-sm border border-ink/10">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.970588636402!2d77.28259097507424!3d12.72733398756976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae4d3fa473d26b%3A0x447d3154697fa50f!2sAanya%20Sowmyaa%20celebrations%2C%20mini%20party%20hall%2C%20event%20planner!5e0!3m2!1sen!2sus!4v1708857418000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Aanya Sowmyaa Celebrations Location"
                  ></iframe>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-widest text-ink/50 mb-1">Follow Us</h4>
                <a href="https://www.instagram.com/aanyasowmyaa.celebrations/" target="_blank" rel="noopener noreferrer" className="text-ink hover:underline underline-offset-4">@aanyasowmyaacelebrations</a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/40 backdrop-blur-2xl border border-white/60 p-8 md:p-12 rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ink/70">Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 focus:bg-white/80 focus:ring-2 focus:ring-ink/20 outline-none transition-all placeholder:text-ink/30"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ink/70">Phone *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 focus:bg-white/80 focus:ring-2 focus:ring-ink/20 outline-none transition-all placeholder:text-ink/30"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ink/70">Event Type</label>
                  <select 
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 focus:bg-white/80 focus:ring-2 focus:ring-ink/20 outline-none transition-all text-ink/80 appearance-none"
                  >
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
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 focus:bg-white/80 focus:ring-2 focus:ring-ink/20 outline-none transition-all text-ink/80"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ink/70">Location</label>
                  <input 
                    type="text" 
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 focus:bg-white/80 focus:ring-2 focus:ring-ink/20 outline-none transition-all placeholder:text-ink/30"
                    placeholder="Bengaluru / Mysore"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-widest text-ink/70">Expected Guests</label>
                  <input 
                    type="number" 
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 focus:bg-white/80 focus:ring-2 focus:ring-ink/20 outline-none transition-all placeholder:text-ink/30"
                    placeholder="500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-ink/70">Additional Details</label>
                <textarea 
                  rows={4}
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  className="w-full bg-white/50 border border-white/40 rounded-xl px-4 py-3 focus:bg-white/80 focus:ring-2 focus:ring-ink/20 outline-none transition-all resize-none placeholder:text-ink/30"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-ink text-white rounded-xl py-4 uppercase tracking-widest text-sm font-medium hover:bg-ink/90 transition-colors shadow-md"
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
