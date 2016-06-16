var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080});

wss.on('connection', (ws) =>{
	ws.on('message', (msg)=>{
		console.log(msg);
	});
	ws.send('Connected Success');
});
