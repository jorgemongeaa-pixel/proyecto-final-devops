# Usar una imagen oficial de Node.js como base
FROM node:18-alpine

# Crear el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto en el que corre la app
EXPOSE 3000

# Comando para arrancar la app
CMD ["npm", "start"]
