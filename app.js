// app.js

const http = require('http');
var fs = require('fs');

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
	var content = 'Not found';
	try {
		content = fs.readFileSync(`.${req.url}`);
		res.writeHead(200, {'Content-Type': 'text/html'});
	} catch {
		res.writeHead(404, {'Content-Type': 'text/plain'});
	}
	res.end(content);
});

// Start the server on port 3000
app.listen(3000, '127.0.0.1');
console.log('Node server running on port 3000');