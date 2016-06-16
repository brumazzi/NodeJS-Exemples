const https = require('https');
const fs = require('fs');

const options = {
	key: fs.readFileSync('server-key.pem'),
	cert: fs.readFileSync('server-cert.pem')
};

https.createServer(options, (req, res) => {
	res.writeHead(200);
	res.end('Hello Https Server');
}).listen(8000);
