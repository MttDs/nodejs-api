module.exports = function(server){
    server.use('/users', require('./users')(server));
    server.use('/auth', require('./auth')(server));
    server.use('/events', require('./events')(server));
    server.use('/categories', require('./categories')(server));
}
