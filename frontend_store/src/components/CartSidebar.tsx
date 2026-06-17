import React from 'react';

// Reutilizamos la interfaz del carrito
interface CartItem {
  id: number;
  title: string;
  price: string | null;
  stock: number | null;
  quantity: number;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onCheckout: () => void; 
}

export const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cart, onCheckout }) => { 
  // Calculamos el total dinámicamente. 
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const itemPrice = parseFloat(item.price || '59.99');
      return total + (itemPrice * item.quantity);
    }, 0).toFixed(2);
  };

  return (
    <>
      {/* Overlay oscuro */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Panel lateral de cristal */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-space-900/80 bg-glass-gradient backdrop-blur-xl border-l border-aero-cyan/30 z-50 p-6 flex flex-col shadow-[-10px_0_30px_rgba(0,120,215,0.2)] transition-transform duration-500 ease-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
          <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-aero-cyan tracking-widest">
            SYSTEM INVENTORY
          </h2>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-aero-cyan transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Lista de objetos */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center mt-10 tracking-widest text-sm">INVENTORY IS EMPTY</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="bg-white/5 border border-white/10 rounded-lg p-4 flex justify-between items-center group hover:border-aero-blue/50 transition-colors">
                <div>
                  <h3 className="text-white font-bold text-sm leading-tight">{item.title}</h3>
                  <p className="text-gray-400 text-xs mt-1">Qty: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-aero-cyan font-bold drop-shadow-[0_0_2px_rgba(0,229,255,0.8)]">
                    ${(parseFloat(item.price || '59.99') * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Resumen Total y Checkout */}
        <div className="mt-6 border-t border-white/10 pt-6">
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-300 tracking-widest uppercase text-sm">Total Allocation</span>
            <span className="text-3xl font-black text-white drop-shadow-neon-glow">
              ${calculateTotal()}
            </span>
          </div>
          <button 
            onClick={onCheckout} /* <--- AQUÍ ESTÁ EL CABLE CONECTADO AHORA */
            disabled={cart.length === 0}
            className={`w-full py-4 rounded-lg font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
              cart.length === 0 
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                : 'bg-aero-cyan/20 text-aero-cyan border border-aero-cyan/50 hover:bg-aero-cyan hover:text-space-900 hover:shadow-neon-glow'
            }`}
          >
            Process Payment
          </button>
        </div>
      </div>
    </>
  );
};