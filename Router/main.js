var http = require('http');
var Router = require('./router').Router;
var rt = new Router();

function index(req, res){
	res.write('Well Come To Index');
}
function info(req, res){
	res.write('Well Come To Info');
}

rt.register('/', index);
rt.register('/info', info);

var server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	rt.route(req, res);
	res.end('');
});



server.listen(8080);
