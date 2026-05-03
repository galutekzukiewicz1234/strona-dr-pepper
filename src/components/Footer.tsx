import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-drp-black pt-24 pb-12 border-t border-drp-maroon/30 relative overflow-hidden">
      {/* Background logo abstract */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1500px] h-full flex items-center justify-center opacity-5 pointer-events-none">
        <span className="font-display font-bold text-[30vw] leading-none text-drp-red">DP</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Email Capture */}
        <div className="bg-gradient-to-r from-drp-maroon to-drp-red rounded-[40px] p-8 md:p-12 mb-20 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(200,16,46,0.2)]">
          <div className="text-center md:text-left">
            <h3 className="font-display text-3xl md:text-4xl uppercase font-bold text-drp-cream mb-2">Unlock Exclusive Drops</h3>
            <p className="text-drp-cream/80 max-w-md">Be the first to know about new flavors, limited merch, and giveaways.</p>
          </div>
          <div className="flex w-full md:w-auto max-w-md gap-2">
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="w-full bg-drp-black/30 border border-drp-cream/20 rounded-full py-4 px-6 text-drp-cream placeholder:text-drp-cream/50 focus:outline-none focus:border-drp-cream transition-colors font-display tracking-widest text-sm"
            />
            <button className="bg-drp-black text-drp-cream px-8 py-4 rounded-full font-display uppercase tracking-widest text-sm hover:bg-drp-black/80 transition-colors">
              Join
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 border-b border-drp-cream/10 pb-16">
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="font-display text-3xl font-bold tracking-tighter text-drp-cream mb-6 block">
              Dr<span className="text-drp-red ml-1">Pepper</span>
            </a>
            <p className="text-sm text-drp-cream/60 max-w-xs">
              Always One of a Kind. Since 1885.
            </p>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest text-drp-red mb-6 text-sm">Explore</h4>
            <ul className="space-y-4 text-sm text-drp-cream/70">
              <li><a href="#" className="hover:text-drp-cream transition-colors">All Flavors</a></li>
              <li><a href="#" className="hover:text-drp-cream transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-drp-cream transition-colors">Pepper Perks</a></li>
              <li><a href="#" className="hover:text-drp-cream transition-colors">Store Locator</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display uppercase tracking-widest text-drp-red mb-6 text-sm">Shop</h4>
            <ul className="space-y-4 text-sm text-drp-cream/70">
              <li><a href="#" className="hover:text-drp-cream transition-colors">Merch</a></li>
              <li><a href="#" className="hover:text-drp-cream transition-colors">Beverages</a></li>
              <li><a href="#" className="hover:text-drp-cream transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-drp-cream transition-colors">Returns</a></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-display uppercase tracking-widest text-drp-red mb-6 text-sm">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-drp-cream/20 flex items-center justify-center hover:bg-drp-red hover:border-drp-red transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-drp-cream/20 flex items-center justify-center hover:bg-drp-red hover:border-drp-red transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-drp-cream/20 flex items-center justify-center hover:bg-drp-red hover:border-drp-red transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-drp-cream/20 flex items-center justify-center hover:bg-drp-red hover:border-drp-red transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-drp-cream/40 px-2 font-display tracking-widest">
          <p>&copy; {new Date().getFullYear()} Dr Pepper/Seven Up, Inc.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-drp-cream transition-colors uppercase">Privacy Policy</a>
            <a href="#" className="hover:text-drp-cream transition-colors uppercase">Terms of Use</a>
            <a href="#" className="hover:text-drp-cream transition-colors uppercase">Do Not Sell My Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
