var router = require('express').Router();

module.exports = function(server){
    router.post('/login', server.middlewares.bodyparser, server.actions.auth.login)
    router.delete('/logout', server.middlewares.ensureAuthenticated, server.actions.auth.logout)

    return router;
}
