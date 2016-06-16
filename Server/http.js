var http = require("http");

/*
 * Start server in port 8081
 */
http.createServer(function(request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});

	response.end('Hello World\n');
}).listen(8081);

console.log('Server Running at http://127.0.0.1:8081/');
