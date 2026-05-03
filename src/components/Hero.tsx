import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Hero() {
  const [bubbles, setBubbles] = useState<{ id: number; left: number; duration: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    // Generate random bubbles
    const newBubbles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 2,
      size: 10 + Math.random() * 30,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden liquid-gradient">
      {/* Background Bubbles */}
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="bubble"
          style={{
            left: `${b.left}%`,
            width: `${b.size}px`,
            height: `${b.size}px`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            bottom: "-50px"
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="font-display font-bold text-drp-cream tracking-tight mb-4 text-6xl md:text-8xl lg:text-[120px] leading-[0.85] uppercase">
            There’s <br /> Nothing Like <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-drp-red to-[#ff4e50]">
              A Pepper
            </span>
          </h2>
          <p className="mt-8 text-lg md:text-xl text-drp-cream/80 max-w-2xl mx-auto font-medium">
            23 flavors. One of a kind. Indulge in the perfectly balanced, bold, and unapologetic taste that defines individuality.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto bg-drp-cream text-drp-black hover:bg-white px-8 py-4 rounded-full font-display uppercase tracking-widest text-lg transition-transform hover:scale-105 active:scale-95">
              Find Your Flavor
            </button>
            <button className="w-full sm:w-auto border-2 border-drp-cream/30 text-drp-cream hover:border-drp-cream px-8 py-4 rounded-full font-display uppercase tracking-widest text-lg transition-all hover:bg-drp-cream/10">
              Shop Now
            </button>
          </div>
        </motion.div>
      </div>

      {/* Foreground Visual Element (e.g. Can silhouette or abstract splash) */}
      <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-drp-black to-transparent z-0"></div>
    </section>
  );
}
