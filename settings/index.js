module.exports = function(server){
    var configFile = './config.[env].json'
        .replace('[env]', process.env.NODE_ENV || 'development');

    server.settings = require(configFile);
}
