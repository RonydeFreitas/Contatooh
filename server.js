var http = require('http');
var app = require('./config/express')();
require('./config/passport')();
require('./config/database.js')('mongodb://localhost:27017')

http.createServer(app).listen(app.get('port'), () => {
    console.log('Express Server escutando na porta ' + app.get('port'));
});