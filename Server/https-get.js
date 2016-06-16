const https = require('https');
const fs = require('fs');

const options = {
	key: fs.readFileSync('server-key.pem'),
	cert: fs.readFileSync('server-cert.pem')
};

https.get('https://encrypted.google.com/', (res) => {
	console.log('Status Code: ', res.statusCode);
	console.log('headers: ', res.headers);

	res.on('data', (d) => {
		process.stdout.write(d);
	});
}).on('error', (e) => {
	console.error(e);
});
