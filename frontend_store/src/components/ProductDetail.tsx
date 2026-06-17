import { ArrowRight } from 'lucide-react';
import { Product } from '../types';
import { motion, AnimatePresence } from "framer-motion";

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAdd: (product: Product) => void;
}

export function ProductDetail({ product, onBack, onAdd }: ProductDetailProps) {
  
  // Guard against missing specs
  const specs = product.specs || {};

  return (
    <motion.main 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow pt-[6.4rem] px-sm md:px-margin py-margin flex flex-col items-center w-full min-h-screen bg-background z-30 relative"
    >
      <div className="w-full max-w-[160rem] mb-md">
        <button 
          onClick={onBack}
          className="font-mono text-[1.0rem] uppercase text-secondary hover:text-primary transition-colors flex items-center gap-2"
        >
          &lt; RETURN_TO_CATALOG
        </button>
      </div>
      
      <div className="w-full max-w-[160rem] grid grid-cols-1 md:grid-cols-12 gap-margin items-start">
        {/* Left Column: Image Canvas */}
        <div className="md:col-span-5 relative border border-primary p-xs bg-surface flex flex-col gap-xs">
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary -translate-x-1 -translate-y-1"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary translate-x-1 translate-y-1"></div>
          
          <div className="w-full aspect-[2/3] relative overflow-hidden border border-primary/20 bg-surface-dim">
            <img 
              src={product.coverUrl} 
              alt={product.title} 
              className="w-full h-full object-cover grayscale opacity-90 mix-blend-multiply"
            />
          </div>
          
          <div className="flex justify-between items-center font-mono text-[1.0rem] uppercase border-t border-primary/20 pt-xs text-secondary">
            <span>ID: {product.internalId}</span>
            <span>STATUS: VALID</span>
          </div>
        </div>

        {/* Right Column: Data & Actions */}
        <div className="md:col-span-7 flex flex-col gap-lg mt-margin md:mt-0 relative h-full">
          {/* Header Block */}
          <div className="flex flex-col gap-xs relative">
            <div className="absolute -left-margin top-0 w-6 h-px bg-primary hidden md:block"></div>
            <span className="font-mono text-[1.0rem] text-secondary uppercase tracking-[0.3em] flex items-center gap-xs">
              <span className="w-2 h-2 bg-primary block"></span> SYSTEM // ARCHIVE
            </span>
            <h1 className="font-sans text-[4.8rem] tracking-[0.1em] font-bold uppercase text-primary leading-none">
              {product.title}
            </h1>
            <div className="font-sans text-[2.4rem] tracking-[0.05em] font-medium text-secondary mt-xs uppercase">
              {product.sn}
            </div>
          </div>

          {/* System Data Block */}
          <div className="border border-primary p-sm font-mono text-[1.0rem] flex flex-col gap-xs bg-surface relative group mt-md">
            <div className="absolute top-0 right-0 p-xs text-secondary opacity-50">DATA_BLOCK_A</div>
            
            <div className="grid grid-cols-2 gap-x-sm gap-y-xs pb-xs border-b border-primary/20">
              <div className="text-secondary">DEVELOPER:</div>
              <div className="text-primary uppercase text-right">{specs.developer || 'UNKNOWN_ENTITY'}</div>
            </div>
            <div className="grid grid-cols-2 gap-x-sm gap-y-xs pb-xs border-b border-primary/20">
              <div className="text-secondary">PUBLISHER:</div>
              <div className="text-primary uppercase text-right">{specs.publisher || 'UNKNOWN_ENTITY'}</div>
            </div>
            <div className="grid grid-cols-2 gap-x-sm gap-y-xs pb-xs border-b border-primary/20">
              <div className="text-secondary">RELEASE_DATE:</div>
              <div className="text-primary uppercase text-right">{specs.releaseDate || 'UNKNOWN_DATE'}</div>
            </div>
            <div className="grid grid-cols-2 gap-x-sm gap-y-xs">
              <div className="text-secondary">FILE_SIZE:</div>
              <div className="text-primary uppercase text-right">{specs.fileSize || 'CALCULATING...'}</div>
            </div>
          </div>

          {/* Description */}
          <div className="font-sans text-[1.6rem] tracking-[0.01em] text-on-surface-variant max-w-3xl leading-relaxed relative pl-sm border-l border-primary/20 mt-md flex-grow">
            <p className="whitespace-pre-wrap">
              {product.description || 'No classified data available for this unit.'}
            </p>
          </div>

          {/* Action Block */}
          <div className="flex flex-col gap-sm pt-sm border-t border-primary mt-lg md:mt-auto">
            <div className="flex items-end justify-between mb-xs">
              <span className="font-mono text-[1.0rem] text-secondary uppercase">PRICE_VALUATION</span>
              <span className="font-sans text-[3.2rem] tracking-[0.05em] font-semibold text-primary leading-none">
                ${product.price.toFixed(2)}
              </span>
            </div>
            
            <button 
              onClick={() => onAdd(product)}
              className="w-full border border-primary bg-background py-md px-lg flex items-center justify-between transition-all duration-300 group hover:bg-primary hover:text-on-primary hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-sm tracking-[0.3em] font-mono text-[1.2rem] font-medium uppercase">
                <span className="w-2 h-2 border border-current block group-hover:bg-on-primary transition-colors"></span>
                ADD TO CART
              </span>
              <ArrowRight className="relative z-10 transform group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
