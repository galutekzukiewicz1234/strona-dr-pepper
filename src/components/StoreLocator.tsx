import { MapPin, Search, ChevronRight } from "lucide-react";

export function StoreLocator() {
  return (
    <section id="locator" className="py-24 bg-drp-black border-t border-drp-cream/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-drp-maroon/20 rounded-[40px] p-8 md:p-16 border border-drp-maroon/50 relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
          
          {/* Background map texture abstract */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}></div>

          <div className="flex-1 relative z-10 w-full">
            <div className="inline-flex items-center gap-2 text-drp-red font-display tracking-widest uppercase text-sm mb-4">
              <MapPin className="w-4 h-4" />
              Store Locator
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6 leading-tight">
              Get Dr Pepper <br/> Near You
            </h2>
            <p className="text-drp-cream/70 mb-8 max-w-md">
              Need a fix? Find the closest stores, restaurants, and fountains serving up your favorite 23 flavors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-drp-cream/40" />
                <input 
                  type="text" 
                  placeholder="Enter Zip or City" 
                  className="w-full bg-drp-black/50 border border-drp-cream/20 rounded-full py-4 pl-12 pr-6 text-drp-cream focus:outline-none focus:border-drp-red transition-colors"
                />
              </div>
              <button className="bg-drp-red hover:bg-drp-maroon text-drp-cream px-8 py-4 rounded-full font-display uppercase tracking-widest transition-colors flex items-center justify-center gap-2 whitespace-nowrap">
                Find Now <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 relative z-10 w-full h-[300px] md:h-[400px] bg-drp-black rounded-3xl border border-drp-cream/10 overflow-hidden group">
            {/* Mock Map Image */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
              alt="Map" 
              className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity grayscale contrast-125"
            />
            
            {/* Mock Pins */}
            <div className="absolute top-1/3 left-1/3 w-6 h-6 bg-drp-red rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(200,16,46,0.8)]">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-drp-maroon rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>
            <div className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-drp-red rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(200,16,46,0.8)]">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            <div className="absolute top-4 right-4 bg-drp-black/90 backdrop-blur pb-px px-4 py-2 rounded-full border border-drp-cream/10 text-xs font-display tracking-widest uppercase">
              Use My Location
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
