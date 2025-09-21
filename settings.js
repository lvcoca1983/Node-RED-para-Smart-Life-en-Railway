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

    // puerto dinámico para Railway
    uiPort: process.env.PORT || 1880,

    functionGlobalContext: {
        // crypto solo si se usa en Function nodes con global.get('crypto')
        // crypto: require('crypto')   <-- NO usar require directamente en Railway
    }
};
