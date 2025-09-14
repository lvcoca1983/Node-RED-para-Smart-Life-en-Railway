# Usa la imagen oficial de Node-RED
FROM nodered/node-red:latest

# Exponer puerto 1880
EXPOSE 1880

# Arrancar Node-RED
CMD ["npm", "start", "--", "--userDir", "/data"]
