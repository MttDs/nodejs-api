var express = require('express')
var server = express();

require('./settings')(server);
require('./middlewares')(server);
require('./actions')(server);
require('./routes')(server);
require('./models')(server);

console.log('Server on port: ', server.settings.port);

server.listen(server.settings.port);
