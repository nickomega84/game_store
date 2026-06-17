# Usamos la versión slim (Debian)
FROM node:22-slim

# Configuramos el directorio de trabajo
WORKDIR /app

# SOLO copiamos package.json (Ignoramos el lockfile para forzar binarios de Linux)
COPY package.json ./

# Instalamos dependencias desde cero
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto de Vite
EXPOSE 5173

# Comando para iniciar Vite, permitiendo conexiones externas
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]