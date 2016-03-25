var router = require('express').Router();

module.exports = function(server){
    router.get('/',server.actions.events.get);
    router.post('/', server.middlewares.bodyparser,server.actions.events.create);
    router.get('/:id',server.actions.events.show);
    router.put('/:id', server.middlewares.bodyparser, server.actions.events.update);

    router.delete('/:id',
        server.middlewares.ensureAuthenticated, //if connected
        server.middlewares.authorizedTo.editEvent, // if authorized
        server.actions.events.remove); // then can remove

    router.get('/', server.actions.events.get);

    router.post('/',
        server.middlewares.bodyparser,
        server.middlewares.ensureAuthenticated,
        server.actions.events.create
    );

    router.get('/:id', server.actions.events.show);

    router.put('/:id',
        server.middlewares.bodyparser,
        server.middlewares.ensureAuthenticated,
        server.actions.events.update);

    router.delete('/:id',
        server.middlewares.ensureAuthenticated,
        server.actions.events.remove
    );

    return router;
}
