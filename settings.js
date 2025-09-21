module.exports = {
    flowFile: 'flows.json',

    adminAuth: {
        type: "credentials",
        users: [{
            username: "coca",   // <-- tu usuario de login
            password: "$2a$08$MfF1u9FKEoP4bw3ARLNZhe5/tMkN41mhxhtz8E/p49a7iRWnp7iem",  // <-- hash bcrypt
            permissions: "*"
        }]
    }
};
