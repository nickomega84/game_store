Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :games, only: [:index, :show]
      
      # AQUÍ ESTÁ LA RUTA QUE RAILS NO ENCONTRABA
      post 'checkout', to: 'games#checkout' 
    end
  end
end