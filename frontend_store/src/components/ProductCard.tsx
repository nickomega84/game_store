import { Plus } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAdd: (product: Product) => void;
  onClick: (product: Product) => void;
}

export function ProductCard({ product, onAdd, onClick }: ProductCardProps) {
  return (
    <div className="flex flex-col group border border-primary bg-background tech-glow relative">
      <div className="absolute top-2 right-2 font-mono text-[1.0rem] bg-background/80 px-1 border border-primary z-10">
        {product.internalId}
      </div>
      
      <div 
        className="w-full aspect-[2/3] border-b border-primary relative overflow-hidden bg-surface-container-low cursor-pointer"
        onClick={() => onClick(product)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-50 pointer-events-none"></div>
        <img 
          src={product.coverUrl} 
          alt={product.title} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      
      <div className="p-sm flex flex-col flex-grow">
        <h3 
          className="font-sans text-[2.4rem] tracking-[0.05em] font-medium text-primary truncate cursor-pointer hover:underline"
          onClick={() => onClick(product)}
        >
          {product.title}
        </h3>
        <p className="font-mono text-[1.0rem] text-secondary mt-xs mb-md">
          GENRE: {product.genre}
        </p>
        
        <div className="mt-auto flex justify-between items-end">
          <span className="font-mono text-[1.2rem] tracking-[0.2em] font-medium text-primary">
            {product.price.toFixed(2)} CR
          </span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAdd(product);
            }}
            className="font-mono text-[1.0rem] border border-primary px-3 py-1 hover:bg-primary hover:text-on-primary transition-colors flex items-center gap-1"
          >
            <Plus size={12} strokeWidth={2} /> CART
          </button>
        </div>
      </div>
    </div>
  );
}
