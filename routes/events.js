var router = require('express').Router();

module.exports = function(server){

    router.get('/future', server.actions.events.list.futureEvents);

    router.get('/past', server.actions.events.list.pastEvents);

    router.get('/',server.actions.events.get);

    router.delete('/:id',
        server.middlewares.ensureAuthenticated, //if connected
        server.middlewares.authorizedTo.editEvent, // if authorized
        server.actions.events.remove); // then can remove

    router.post('/',
        server.middlewares.bodyparser,
        server.middlewares.ensureAuthenticated,
        server.actions.events.create
    );

    router.get('/:id', server.actions.events.show);

    router.put('/:id',
        server.middlewares.bodyparser,
        server.middlewares.ensureAuthenticated,
        server.actions.events.update
    );

    router.post('/:id/subscribe',
        server.middlewares.ensureAuthenticated,
        server.middlewares.authorizedTo.participateToEvent,
        server.middlewares.bodyparser,
        server.actions.events.subscribe
    );

    router.post('/:id/unsubscribe',
        server.middlewares.ensureAuthenticated,
        server.middlewares.bodyparser,
        server.actions.events.unsubscribe
    );

    return router;
}
