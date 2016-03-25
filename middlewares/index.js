module.exports = function(server){
    server.middlewares = {
        bodyparser: require('body-parser').json(),
        ensureAuthenticated: require('./ensureAuthenticated')(server),
        authorizedTo: require('./authorizedToDo')(server)
    }
}
