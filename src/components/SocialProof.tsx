import { ArrowRight } from "lucide-react";

export function SocialProof() {
  const images = [
    "https://images.unsplash.com/photo-1533038590840-1cbea6e0cb7a?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1628108427952-fbc21ebdc362?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1510464292120-e2b2fb98f987?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section className="py-24 bg-drp-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <div>
          <h3 className="text-drp-red font-display tracking-[0.2em] uppercase text-sm mb-4">Join the Pepper Fam</h3>
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Spotted in the Wild</h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-drp-cream/60 hover:text-drp-cream uppercase tracking-widest font-display text-sm transition-colors">
          @drpepper <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex gap-4 md:gap-6 px-6 overflow-x-auto pb-8 snap-x snap-mandatory">
        {images.map((src, i) => (
          <div key={i} className="relative min-w-[280px] md:min-w-[320px] aspect-square rounded-[32px] overflow-hidden group snap-center cursor-pointer">
            <img 
              src={src} 
              alt="UGC Content" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-display tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              Instagram
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
