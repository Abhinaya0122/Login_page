const http = require('http');
const querystring = require('querystring');
const url = require('url');

function sam(req, res) {
    const parsedUrl = url.parse(req.url);
    const query = parsedUrl.query;
    const qs = querystring.parse(query);
    const email = qs['email'];
    const password = qs['password'];
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ' + email + ', welcome to our site');
}

const server = http.createServer(sam);

const PORT = 7777;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
