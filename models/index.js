var mongoose = require('mongoose');

module.exports = function(server){
    server.mongoose = mongoose.connect(server.settings.db.mongo);

    server.models = {
        User: require('./user')(server),
        Token: require('./token')(server),
        Event: require('./event')(server),
        Category: require('./category')(server)
    };
};
