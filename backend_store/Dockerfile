# Usamos una imagen ligera de Ruby
FROM ruby:3.4-slim

# Instalamos las dependencias del sistema necesarias para compilar gemas y usar SQLite
RUN apt-get update -qq && apt-get install -y build-essential libsqlite3-dev nodejs libyaml-dev

# Configuramos el directorio de trabajo
WORKDIR /app

# Copiamos los archivos de dependencias y las instalamos
COPY Gemfile Gemfile.lock ./
RUN bundle install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto de Rails
EXPOSE 3000

# Comando por defecto para iniciar el servidor, escuchando en todas las interfaces
CMD ["rails", "server", "-b", "0.0.0.0"]