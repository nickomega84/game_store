import React from 'react';

interface GameCardProps {
  game: {
    id: number;
    title: string;
    description: string | null;
    price: string | null;
    stock: number | null;
  };
  onAddToCart: () => void;
  cartQuantity: number; // NUEVO: Saber cuántos hay en el carrito
}

export const GameCard: React.FC<GameCardProps> = ({ game, onAddToCart, cartQuantity }) => {
  const currentStock = game.stock || 0;
  // Lógica de límite estricto: Bloquea si el stock es 0 o si ya metiste todos en el carrito
  const isOutOfStock = currentStock === 0;
  const isLimitReached = cartQuantity >= currentStock;
  
  // Generador de portadas simuladas con estilo Dark Purple para darle realismo
  const coverUrl = `https://placehold.co/400x600/1a0b2e/a855f7?text=${encodeURIComponent(game.title)}&font=Montserrat`;

  return (
    <div className="group relative flex flex-col bg-[#130927]/60 backdrop-blur-xl border border-purple-500/20 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(88,28,135,0.2)] hover:-translate-y-2 hover:border-purple-400/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-500 ease-out h-full">
      
      {/* Brillo de cristal superior */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent z-10 pointer-events-none"></div>

      {/* Imagen de Portada */}
      <div className="relative h-64 w-full overflow-hidden border-b border-purple-900/50">
        <img 
          src={coverUrl} 
          alt={game.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#130927] to-transparent"></div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6 flex flex-col flex-grow relative z-20">
        <h2 className="text-xl font-bold text-gray-100 mb-2 leading-tight group-hover:text-purple-300 transition-colors drop-shadow-md">
          {game.title}
        </h2>
        
        <p className="text-purple-200/60 text-xs mb-6 line-clamp-2 min-h-[2rem]">
          {game.description || 'System data corrupted. Description unavailable.'}
        </p>
        
        <div className="flex justify-between items-end mt-auto pt-4 border-t border-purple-500/20 mb-5">
          <span className="text-purple-400 font-black text-lg tracking-wider drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
            ${game.price || '59.99'}
          </span>
          <div className="flex flex-col items-end">
            <span className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold border ${
              isOutOfStock ? 'bg-red-900/30 border-red-500/30 text-red-400' : 'bg-purple-900/40 border-purple-500/30 text-purple-300'
            }`}>
              Stock: {currentStock}
            </span>
            {cartQuantity > 0 && (
              <span className="text-[10px] text-purple-400 mt-1 font-semibold">In Cart: {cartQuantity}</span>
            )}
          </div>
        </div>

        {/* Botón interactivo con límite visual */}
        <button 
          onClick={onAddToCart}
          disabled={isOutOfStock || isLimitReached}
          className={`w-full py-3 rounded-xl font-bold tracking-widest text-xs uppercase transition-all duration-300 backdrop-blur-md ${
            isOutOfStock 
              ? 'bg-gray-800/50 text-gray-500 cursor-not-allowed border border-gray-700/50' 
              : isLimitReached
              ? 'bg-purple-900/50 text-purple-300/50 cursor-not-allowed border border-purple-700/50'
              : 'bg-purple-600/20 text-purple-300 border border-purple-500/50 hover:bg-purple-500/30 hover:text-white hover:shadow-[0_0_15px_rgba(168,85,247,0.6)]'
          }`}
        >
          {isOutOfStock ? 'Out of Stock' : isLimitReached ? 'Max Limit Reached' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};