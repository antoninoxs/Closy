var http = require('http');

function get(req, res) {
	
	var body = "<p>Questa è una prova scritta con eclipse!<br>";
	body += new Date();
	var len = body.length+1;
	
	res.writeHead(200, {
		'Content-Length': len,
		'Content-Type': 'text/html'
	});
	res.end(body);
}

var s = http.createServer(get);
s.listen(8080);
