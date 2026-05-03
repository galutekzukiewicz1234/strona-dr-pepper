import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function BrandStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 1, 1, 0]);

  return (
    <section id="story" ref={ref} className="relative py-40 overflow-hidden bg-drp-black">
      
      {/* Background large text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
        <h2 className="font-display text-[30vw] whitespace-nowrap uppercase leading-none">
          EST 1885
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Left Column */}
        <motion.div style={{ y: y1 }} className="space-y-12">
          <div>
            <h3 className="text-drp-red font-display tracking-[0.2em] uppercase text-sm mb-4">The Origin Route</h3>
            <h2 className="text-5xl lg:text-7xl font-display font-bold uppercase leading-[0.9]">
              Born in Waco, <br/> Raised Everywhere.
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-drp-cream/70">
            <p>
              It started at Morrison's Old Corner Drug Store. A unique blend of exactly 23 flavors designed to taste like the smell of a soda fountain. 
            </p>
            <p>
              It's not a cola. It's not a root beer. It's Dr Pepper. The oldest major soft drink in America, still doing things its own way.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-drp-cream/10">
            <div>
              <div className="text-4xl font-display text-drp-red mb-2">1885</div>
              <div className="text-sm uppercase tracking-wider text-drp-cream/50">Year Invented</div>
            </div>
            <div>
              <div className="text-4xl font-display text-drp-red mb-2">23</div>
              <div className="text-sm uppercase tracking-wider text-drp-cream/50">Secret Flavors</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column (Visual) */}
        <motion.div style={{ scale, opacity }} className="relative aspect-[3/4] w-full max-w-md mx-auto">
          {/* Abstract flavor blend representation */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-drp-maroon via-drp-red to-orange-500 opacity-20 blur-3xl mix-blend-screen"></div>
          <div className="absolute inset-10 border border-drp-cream/20 rounded-[40px] transform rotate-3 flex items-center justify-center overflow-hidden bg-drp-black">
              {/* Using a placeholder for a vintage bottle or texture */}
              <img 
                src="https://images.unsplash.com/photo-1550461716-ba4cea66cbac?q=80&w=1000&auto=format&fit=crop" 
                alt="Vintage aesthetic" 
                className="opacity-40 grayscale object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-drp-black to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <p className="font-display text-3xl uppercase leading-tight italic">
                  "Always One of a Kind."
                </p>
              </div>
          </div>
          <motion.div style={{ y: y2 }} className="absolute -bottom-10 -left-10 w-32 h-32 bg-drp-red rounded-full flex items-center justify-center p-6 text-center font-display uppercase tracking-widest text-sm shadow-2xl">
            Taste The Mystery
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
