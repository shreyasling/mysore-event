export default function Footer() {
  return (
    <footer className="bg-ink text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-serif text-2xl font-semibold tracking-wide mb-2">
            Aanya Sowmyaa
          </h2>
          <p className="text-white/50 text-sm">
            Crafting Timeless Celebrations
          </p>
        </div>
        
        <div className="flex gap-6 text-sm text-white/70">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
          <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
        </div>
        
        <div className="text-white/50 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Aanya Sowmyaa Celebrations.</p>
          <p className="mt-1">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
