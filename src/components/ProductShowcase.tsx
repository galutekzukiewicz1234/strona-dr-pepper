import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FLAVORS = [
  {
    id: "classic",
    name: "Dr Pepper Classic",
    color: "bg-drp-maroon",
    notes: ["Bold", "Original", "23 Flavors"],
    imgUrl: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2000&auto=format&fit=crop", // abstract representation
  },
  {
    id: "zero",
    name: "Zero Sugar",
    color: "bg-black",
    notes: ["No Sugar", "Same 23 Flavors", "Smooth"],
    imgUrl: "https://images.unsplash.com/photo-1614539828236-47a32ea07817?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: "straw-cream",
    name: "Strawberries & Cream",
    color: "bg-[#e5a0aa]",
    notes: ["Sweet", "Creamy", "Fruity"],
    imgUrl: "https://images.unsplash.com/photo-1549468962-921d746d0a7a?q=80&w=2000&auto=format&fit=crop",
  }
];

export function ProductShowcase() {
  const [activeFlavor, setActiveFlavor] = useState(FLAVORS[0]);

  return (
    <section id="flavors" className="py-32 bg-drp-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Interactive Details */}
        <div className="order-2 lg:order-1 z-10">
          <h3 className="text-sm font-display tracking-[0.2em] text-drp-red uppercase mb-4">Choose Your Vibe</h3>
          
          <AnimatePresence mode="wait">
            <motion.h2 
              key={activeFlavor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-5xl md:text-7xl font-display font-bold uppercase mb-6 leading-tight"
            >
              {activeFlavor.name}
            </motion.h2>
          </AnimatePresence>

          <div className="flex gap-4 mb-12 h-12">
            <AnimatePresence mode="wait">
              {activeFlavor.notes.map((note, i) => (
                <motion.span
                  key={`${activeFlavor.id}-${note}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 rounded-full border border-drp-cream/20 text-sm font-medium text-drp-cream/80"
                >
                  {note}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>

          <div className="flex flex-col gap-4">
            {FLAVORS.map(flavor => (
              <button
                key={flavor.id}
                onClick={() => setActiveFlavor(flavor)}
                className={`relative overflow-hidden group flex items-center justify-between p-6 w-full text-left rounded-2xl transition-all ${
                  activeFlavor.id === flavor.id 
                    ? "bg-drp-cream text-drp-black font-bold scale-105 shadow-xl shadow-drp-cream/10 z-10" 
                    : "bg-drp-cream/5 text-drp-cream hover:bg-drp-cream/10"
                }`}
              >
                <span className="font-display uppercase text-xl z-10 relative">{flavor.name}</span>
                <div className={`w-6 h-6 rounded-full border border-drp-black/10 z-10 ${flavor.color}`} />
              </button>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-12 bg-drp-red text-drp-cream px-8 py-4 rounded-full font-display uppercase tracking-widest w-full lg:w-auto shadow-[0_0_20px_rgba(200,16,46,0.3)]"
          >
            Add to Bag
          </motion.button>

        </div>

        {/* Right: Visual Display */}
        <div className="order-1 lg:order-2 relative aspect-square lg:aspect-[4/5] rounded-[40px] overflow-hidden flex items-center justify-center p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFlavor.id}
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 1.1, rotate: -5 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`absolute inset-0 ${activeFlavor.color} opacity-40`}
            ></motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 backdrop-blur-3xl"></div>
          
          <AnimatePresence mode="wait">
            <motion.img
              key={activeFlavor.id}
              src={activeFlavor.imgUrl}
              alt={activeFlavor.name}
              initial={{ opacity: 0, y: 100, rotate: -15 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, y: -100, rotate: 15 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
              className="relative z-10 w-3/4 max-w-sm drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] mix-blend-overlay rounded-2xl grayscale"
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
