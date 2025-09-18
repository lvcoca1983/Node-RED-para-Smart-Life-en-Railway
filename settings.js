module.exports = {
    flowFile: 'flows.json',
    uiPort: process.env.PORT || 1880,
    uiHost: "0.0.0.0",

    adminAuth: {
        type: "credentials",
        users: [{
            username: "coca",   // <-- tu usuario de login
            password: "$2a$08$MfF1u9FKEoP4bw3ARLNZhe5/tMkN41mhxhtz8E/p49a7iRWnp7iem",  // <-- pega aquí tu hash bcrypt
            permissions: "*"
        }]
    }
}
