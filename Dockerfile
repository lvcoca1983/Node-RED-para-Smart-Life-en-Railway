# Usa la imagen oficial de Node-RED
FROM nodered/node-red:latest
# Forzar que Node-RED use nuestro settings.js
COPY settings.js /usr/src/node-red/settings.js
# Exponer puerto 1880
EXPOSE 1880

# Arrancar Node-RED
CMD ["npm", "start", "--", "--userDir", "/data"]
