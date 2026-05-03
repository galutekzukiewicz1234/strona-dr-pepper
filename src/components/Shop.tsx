import { ExternalLink } from "lucide-react";

export function Shop() {
  const MERCH = [
    {
      id: 1,
      name: "Vintage Est 1885 Tee",
      price: "$25.00",
      img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Classic Dad Hat",
      price: "$20.00",
      img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=600&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "12-Pack Classic + Can Cooler",
      price: "$18.00",
      img: "https://images.unsplash.com/photo-1555529733-0e670560f8e1?q=80&w=600&auto=format&fit=crop"
    }
  ];

  return (
    <section id="shop" className="py-32 bg-drp-black border-t border-drp-cream/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h3 className="text-drp-red font-display tracking-[0.2em] uppercase text-sm mb-4">Official Merch</h3>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase">Rep The Brand</h2>
          </div>
          <button className="flex items-center gap-2 border border-drp-cream/30 hover:border-drp-cream px-6 py-3 rounded-full uppercase tracking-widest font-display text-sm transition-colors text-drp-cream group">
            View All Shop <ExternalLink className="w-4 h-4 text-drp-red group-hover:text-drp-cream transition-colors" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {MERCH.map(item => (
            <div key={item.id} className="group cursor-pointer">
              <div className="aspect-[4/5] bg-drp-cream/5 rounded-[32px] overflow-hidden relative mb-6">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 mix-blend-luminosity opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-drp-black/60 to-transparent"></div>
                <button className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-drp-red text-drp-cream px-8 py-3 rounded-full font-display uppercase tracking-widest text-sm opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Quick Add
                </button>
              </div>
              <div className="flex justify-between items-start px-2">
                <h4 className="font-display uppercase text-lg max-w-[70%]">{item.name}</h4>
                <span className="font-medium text-drp-cream/70">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
