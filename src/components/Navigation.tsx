import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-drp-black/90 backdrop-blur-md py-4 border-b border-drp-maroon/30"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-display text-3xl font-bold tracking-tighter text-drp-cream z-50 relative group">
          Dr
          <span className="text-drp-red ml-1 transition-colors group-hover:text-drp-cream">Pepper</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {["Flavors", "Story", "Quiz", "Shop"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-display uppercase tracking-widest text-sm text-drp-cream/80 hover:text-drp-cream hover:drop-shadow-[0_0_8px_rgba(200,16,46,0.8)] transition-all"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <button className="text-drp-cream hover:text-drp-red transition-colors">
            <MapPin className="w-5 h-5" />
          </button>
          <button className="text-drp-cream hover:text-drp-red transition-colors relative group">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-drp-red text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>
          <button className="bg-drp-red hover:bg-drp-maroon text-drp-cream px-6 py-2 rounded-full font-display uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_4px_14px_0_rgba(200,16,46,0.39)]">
            Buy Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-drp-cream z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-drp-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
          >
            {["Flavors", "Story", "Quiz", "Shop"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-4xl uppercase tracking-widest text-drp-cream hover:text-drp-red transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex space-x-8 pt-8">
              <button className="text-drp-cream">
                <MapPin className="w-8 h-8" />
              </button>
              <button className="text-drp-cream">
                <ShoppingCart className="w-8 h-8" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
