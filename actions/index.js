module.exports = function(server) {
    server.actions = {
        users: require('./users')(server),
        auth: require('./auth')(server),
        events : require('./events') (server),
        category: require('./category')(server)
    }
};
