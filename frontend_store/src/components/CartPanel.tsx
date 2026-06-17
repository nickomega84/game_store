import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, CreditCard, Tag, ArrowRight, User } from 'lucide-react';
import { CartItem } from '../types';

interface CartPanelProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemoveItem: (cartId: string) => void;
}

export function CartPanel({ isOpen, onClose, items, onRemoveItem }: CartPanelProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const fee = items.length > 0 ? 1.20 : 0;
  const total = subtotal + fee;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background z-40"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full md:w-[48rem] bg-surface border-l border-primary z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-sm pt-[8.4rem] md:pt-sm border-b border-primary flex justify-between items-end bg-surface relative">
              <button 
                onClick={onClose}
                className="absolute top-sm right-[6.4rem] md:hidden p-2 border border-primary hover:bg-surface-variant transition-colors"
                aria-label="Close cart"
              >
                 <X size={20} strokeWidth={1} />
              </button>

              <div>
                <h2 className="font-mono text-[1.2rem] tracking-[0.2em] font-medium text-primary uppercase">SHOPPING_CART</h2>
                <p className="font-mono text-[1.0rem] text-secondary mt-1 uppercase">SYSTEM_ACTIVE_STATUS: {items.length > 0 ? '100%' : 'STANDBY'}</p>
              </div>
              <div className="w-10 h-10 border border-primary flex items-center justify-center bg-background">
                <User size={20} strokeWidth={1} className="text-secondary" />
              </div>
            </div>

            {/* Stepper Logic */}
            <div className="flex border-b border-primary bg-surface shrink-0">
              <div className="flex-1 p-xs bg-primary text-on-primary font-bold flex flex-col items-center justify-center gap-1 cursor-default">
                <ShoppingBag size={16} strokeWidth={2} />
                <span className="font-mono text-[1.0rem] text-center uppercase hidden md:block">ORDER_SUMMARY</span>
              </div>
              <div className="flex-1 p-xs text-secondary hover:text-primary hover:bg-surface-container-highest transition-all flex flex-col items-center justify-center gap-1 cursor-pointer border-l border-primary">
                <CreditCard size={16} strokeWidth={1} />
                <span className="font-mono text-[1.0rem] text-center uppercase hidden md:block">PAYMENT_METHOD</span>
              </div>
              <div className="flex-1 p-xs text-secondary hover:text-primary hover:bg-surface-container-highest transition-all flex flex-col items-center justify-center gap-1 cursor-pointer border-l border-primary">
                <Tag size={16} strokeWidth={1} />
                <span className="font-mono text-[1.0rem] text-center uppercase hidden md:block">DISCOUNT_CODE</span>
              </div>
              <div className="flex-1 p-xs text-secondary hover:text-primary hover:bg-surface-container-highest transition-all flex flex-col items-center justify-center gap-1 cursor-pointer border-l border-primary">
                <ArrowRight size={16} strokeWidth={1} />
                <span className="font-mono text-[1.0rem] text-center uppercase hidden md:block">CHECKOUT</span>
              </div>
            </div>

            {/* Cart Contents */}
            <div className="flex-1 overflow-y-auto p-sm custom-scrollbar bg-background">
              {items.length === 0 ? (
                <div className="w-full h-full flex flex-col items-center justify-center text-secondary opacity-50">
                  <span className="font-mono text-[1.0rem] uppercase tracking-[0.2em] mb-2">NO_DATA_FOUND</span>
                  <div className="w-16 h-px bg-secondary"></div>
                </div>
              ) : (
                <div className="flex flex-col gap-sm">
                  <AnimatePresence>
                    {items.map((item) => (
                      <motion.div
                        key={item.cartId}
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="group border border-primary bg-surface p-xs flex gap-sm items-center relative tech-glow"
                      >
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></div>
                        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"></div>
                        
                        <div className="w-[6.4rem] h-[9.6rem] border border-primary bg-background shrink-0 relative overflow-hidden">
                          <img 
                            src={item.coverUrl} 
                            alt={item.title} 
                            className="w-full h-full object-cover filter grayscale"
                          />
                        </div>
                        
                        <div className="flex-1 flex flex-col justify-between h-full py-1">
                          <div>
                            <p className="font-mono text-[1.0rem] text-secondary mb-1">{item.sn}</p>
                            <h3 className="font-mono text-[1.2rem] tracking-[0.1em] text-primary uppercase leading-tight font-medium line-clamp-2">
                              {item.title}
                            </h3>
                          </div>
                          <p className="font-mono text-[1.0rem] text-primary mt-2">DATA_COST: {item.price.toFixed(2)} G</p>
                        </div>
                        
                        <button 
                          onClick={() => onRemoveItem(item.cartId)}
                          aria-label="Remove item" 
                          className="p-2 text-secondary hover:text-primary hover:bg-surface-variant transition-colors md:opacity-50 md:group-hover:opacity-100"
                        >
                          <X size={20} strokeWidth={1} />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer Summary */}
            <div className="border-t border-primary p-sm bg-surface shrink-0">
              <div className="flex justify-between items-center py-xs border-b border-outline-variant border-dotted">
                <span className="font-mono text-[1.0rem] text-secondary">SUBTOTAL_FRAGMENTS</span>
                <span className="font-mono text-[1.0rem] text-primary">{subtotal.toFixed(2)} G</span>
              </div>
              <div className="flex justify-between items-center py-xs border-b border-outline-variant border-dotted">
                <span className="font-mono text-[1.0rem] text-secondary">TRANSMISSION_FEE</span>
                <span className="font-mono text-[1.0rem] text-primary">{fee.toFixed(2)} G</span>
              </div>
              <div className="flex justify-between items-end mt-sm mb-md">
                <span className="font-mono text-[1.0rem] text-secondary uppercase">Total_Allocation</span>
                <span className="font-sans text-[2.4rem] tracking-[0.05em] font-bold text-primary">
                  {total.toFixed(2)} G
                </span>
              </div>
              
              <button 
                disabled={items.length === 0}
                className="w-full py-sm border border-primary flex justify-center items-center gap-sm btn-brutalist cursor-pointer relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed bg-background"
              >
                <span className="font-mono text-[1.0rem] transition-transform duration-300 group-hover:rotate-90">■</span>
                <span className="font-mono text-[1.2rem] tracking-[0.2em] font-medium uppercase">INITIALIZE_CHECKOUT</span>
                <div className="absolute bottom-0 left-0 h-[2px] bg-on-primary w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
              </button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
