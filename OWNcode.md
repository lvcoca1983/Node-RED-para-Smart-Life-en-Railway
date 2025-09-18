Resumen definitivo: Node-RED en Railway con autenticación

1. Crear repositorio en GitHub

Crear un nuevo repo en GitHub (ej: node-red-railway).

Subir los archivos:


Dockerfile

FROM nodered/node-red:latest
COPY settings.js /data/settings.js

settings.js

module.exports = {
    flowFile: 'flows.json',
    adminAuth: {
        type: "credentials",
        users: [{
            username: "coca",
            password: "$2a$08$MfF1u9FKEoP4bw3ARLNZhe5/tMkN41mhxhtz8E/p49a7iRWnp7iem",
            permissions: "*"
        }]
    },
    uiPort: process.env.PORT || 1880
}

.gitignore

node_modules

2. Conectar GitHub a Railway

Crear proyecto en Railway → Deploy from GitHub repo.

Seleccionar repo con Dockerfile.


3. Configurar Railway

En Settings → Networking → activar Public Networking.

Railway asigna una URL pública.


4. Verificar logs

En Deployments → Logs debería aparecer:

[info] Settings file  : /data/settings.js
[info] Server now running at http://127.0.0.1:8080/

5. Abrir Node-RED

Entrar en la URL pública de Railway.

Aparecerá login con usuario/contraseña.


6. Guardar flows

Se guardan en /data/flows.json.

Exportar desde el editor o montar un Volume persistente.


Resumen rápido en 6 pasos

1. Repo GitHub con Dockerfile + settings.js.


2. settings.js con adminAuth y uiPort: process.env.PORT.


3. Deploy en Railway desde GitHub.


4. Activar Public Networking.


5. Revisar logs → confirmar settings.js.


6. Entrar a la URL → login con usuario/clave.




