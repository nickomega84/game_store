import { Product, Platform } from '../types';
import { ProductCard } from './ProductCard';

interface CatalogProps {
  products: Product[];
  currentFilter: Platform;
  onFilterChange: (filter: Platform) => void;
  onAddProduct: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

const TABS: Platform[] = ['ALL', 'PS5', 'SWITCH', 'XBOX'];

export function Catalog({ products, currentFilter, onFilterChange, onAddProduct, onSelectProduct }: CatalogProps) {
  
  const filteredProducts = products.filter(p => 
    currentFilter === 'ALL' || p.platform.includes(currentFilter)
  );

  return (
    <main className="w-full min-h-[calc(100vh-6.4rem)] relative z-10 pb-xl pt-[6.4rem]">
      {/* Hero Section */}
      <section className="w-full px-margin pt-xl pb-md">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-primary pb-sm relative">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary -mt-xs -ml-xs"></div>
          
          <h1 className="font-sans text-[4.8rem] font-bold text-primary uppercase tracking-[0.1em] leading-[1.1]">
            CATALOG <span className="text-secondary opacity-50 font-light">//</span> ALL_UNITS
          </h1>
          
          <div className="font-mono text-[1.0rem] text-secondary mt-sm md:mt-0 max-w-[30rem] text-right hidden md:block leading-tight">
            SYSTEM_INDEX: 9942.A<br/>
            RENDER_MODE: HIGH_FIDELITY<br/>
            STATUS: AWAITING_INPUT
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="w-full px-margin py-sm flex gap-sm border-b border-surface-variant overflow-x-auto custom-scrollbar">
        {TABS.map(tab => (
          <button
            key={tab}
            onClick={() => onFilterChange(tab)}
            className={`font-mono text-[1.2rem] tracking-[0.2em] font-medium px-4 py-2 border border-primary transition-colors whitespace-nowrap ${
              currentFilter === tab 
                ? 'bg-primary text-on-primary' 
                : 'bg-background text-primary hover:bg-primary hover:text-on-primary'
            }`}
          >
            {tab}
          </button>
        ))}
      </section>

      {/* Product Grid */}
      <section className="w-full px-margin pt-lg">
        {filteredProducts.length === 0 ? (
          <div className="py-xl text-center">
             <span className="font-mono text-[1.2rem] tracking-[0.2em] text-secondary">0_RECORDS_MAPPED</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAdd={onAddProduct}
                onClick={onSelectProduct}
              />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="w-full py-sm border-t border-primary bg-background flex flex-col md:flex-row justify-between items-center px-margin z-50 relative mt-xl">
        <div className="font-mono text-[1.2rem] tracking-[0.2em] font-medium text-primary mb-sm md:mb-0">
            © 2026 ANGEL_STORE // SYSTEM_STATUS: OPERATIONAL
        </div>
        <nav className="flex gap-sm">
            <button className="font-mono text-[1.0rem] text-secondary hover:underline">LEGAL</button>
            <button className="font-mono text-[1.0rem] text-secondary hover:underline">PRIVACY</button>
            <button className="font-mono text-[1.0rem] text-secondary hover:underline">TERMS</button>
            <button className="font-mono text-[1.0rem] text-secondary hover:underline">SYSTEM_LOGS</button>
        </nav>
      </footer>
    </main>
  );
}
