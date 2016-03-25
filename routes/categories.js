var router = require('express').Router();

module.exports = function(server){
    router.get('/', server.actions.category.get);

    return router;
}
