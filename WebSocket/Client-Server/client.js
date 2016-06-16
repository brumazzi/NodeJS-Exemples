var WebSocket = require('ws');
var ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
	ws.send('Trying connect');
});

ws.on('message', (msg) => {
	console.log(msg);
	ws.close();
});
