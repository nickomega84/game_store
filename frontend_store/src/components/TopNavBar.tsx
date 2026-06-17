import { Search, User, Settings, ShoppingCart } from 'lucide-react';

interface TopNavBarProps {
  cartCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
}

export function TopNavBar({ cartCount, onCartClick, onHomeClick }: TopNavBarProps) {
  return (
    <header className="fixed top-0 left-0 w-full h-[6.4rem] bg-background border-b border-primary z-40 flex justify-between items-center px-margin">
      <div className="flex items-center gap-xs cursor-pointer text-primary hover:opacity-80 transition-opacity">
        <Search size={20} strokeWidth={1} />
        <span className="font-code-sm text-[1.0rem] hidden md:block">QUERY_DB</span>
      </div>

      <nav className="hidden md:flex gap-margin items-center">
        <button onClick={onHomeClick} className="font-mono text-[1.2rem] text-primary font-bold border-b-2 border-primary pb-1 uppercase hover:opacity-80 transition-opacity tracking-[0.2em]">
          CATALOG
        </button>
        <button className="font-mono text-[1.2rem] text-secondary hover:text-primary transition-colors duration-200 uppercase tracking-[0.2em]">
          PLATFORMS
        </button>
        <button className="font-mono text-[1.2rem] text-secondary hover:text-primary transition-colors duration-200 uppercase tracking-[0.2em]">
          ARCHIVE
        </button>
      </nav>

      <div 
        className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={onHomeClick}
      >
        <span className="font-sans text-[2.4rem] font-bold tracking-[0.05em] text-primary uppercase">
          ANGEL_STORE
        </span>
      </div>

      <div className="flex items-center gap-sm">
        <User size={20} strokeWidth={1} className="cursor-pointer text-primary hover:opacity-80" />
        <Settings size={20} strokeWidth={1} className="cursor-pointer text-primary hover:opacity-80 hidden sm:block" />
        
        <div 
          onClick={onCartClick}
          className="ml-sm flex items-center gap-xs cursor-pointer border-b-2 border-primary pb-1 hover:opacity-80 transition-opacity"
        >
          <span className="font-mono text-[1.2rem] text-primary font-bold uppercase tracking-[0.2em]">CART</span>
          <span className="font-mono text-[1.0rem] bg-primary text-on-primary px-1">
            {cartCount.toString().padStart(2, '0')}
          </span>
        </div>
      </div>
    </header>
  );
}
