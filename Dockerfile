# Imagen base con Node
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias en modo producción
RUN npm install --only=production

# Copiar el resto del código
COPY . .

# Exponer el puerto de la app
EXPOSE 3000

# Comando para arrancar la app
CMD ["node", "index.js"]
