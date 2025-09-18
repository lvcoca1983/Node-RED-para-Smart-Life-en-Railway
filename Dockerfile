FROM nodered/node-red:latest

# Copiar tu settings.js al directorio /data
COPY settings.js /data/settings.js
