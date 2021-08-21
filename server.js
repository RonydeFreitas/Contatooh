var http = require('http');
var app = require('./config/express')();

http.createServer(app).listen(app.get('port'), () => {
    console.log('Express Server escutando na porta ' + app.get('port'));
});