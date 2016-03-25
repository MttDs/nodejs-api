var router = require('express').Router();

module.exports = function(server){
    router.get('/', server.actions.users.get);
    router.post('/', server.middlewares.bodyparser, server.actions.users.create);
    router.get('/:id', server.actions.users.show);
    router.put('/:id', server.middlewares.bodyparser, server.actions.users.update);
    router.delete('/:id', server.actions.users.remove);

    return router;
}
