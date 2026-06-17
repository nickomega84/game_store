import { useState, useEffect } from 'react';
import { TopNavBar } from './components/TopNavBar';
import { CartPanel } from './components/CartPanel';
import { Catalog } from './components/Catalog';
import { ProductDetail } from './components/ProductDetail';
import { PRODUCTS } from './data';
import { CartItem, Platform, Product } from './types';
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('angel_store_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'CATALOG' | 'DETAIL'>('CATALOG');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState<Platform>('ALL');

  useEffect(() => {
    localStorage.setItem('angel_store_cart', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product: Product) => {
    const newItem: CartItem = {
      ...product,
      cartId: `${product.id}-${Date.now()}`
    };
    setCart(prev => [...prev, newItem]);
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (cartId: string) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('DETAIL');
    window.scrollTo(0, 0);
  };

  const handleReturnToCatalog = () => {
    setCurrentView('CATALOG');
    setSelectedProduct(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-background text-on-background min-h-screen relative hud-grid-bg antialiased selection:bg-primary selection:text-on-primary font-sans text-[1.4rem] tracking-[0.01em]">
      
      <TopNavBar 
        cartCount={cart.length} 
        onCartClick={() => setIsCartOpen(!isCartOpen)} 
        onHomeClick={handleReturnToCatalog}
      />

      <AnimatePresence mode="wait">
        {currentView === 'CATALOG' && (
          <Catalog 
            key="catalog"
            products={PRODUCTS}
            currentFilter={filter}
            onFilterChange={setFilter}
            onAddProduct={handleAddToCart}
            onSelectProduct={handleProductSelect}
          />
        )}
        
        {currentView === 'DETAIL' && selectedProduct && (
          <ProductDetail 
            key="detail"
            product={selectedProduct}
            onBack={handleReturnToCatalog}
            onAdd={handleAddToCart}
          />
        )}
      </AnimatePresence>

      <CartPanel 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onRemoveItem={handleRemoveFromCart}
      />
      
    </div>
  );
}

