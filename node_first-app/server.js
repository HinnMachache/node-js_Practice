const { createServer } = require('http');
const { hostname } = require('os');

const hostname = '127.0.0.1';
const port = 5000;

const server = createServer((res, req) => {
  res.statusCode = 200
  res.setHeader('content/type', 'text/plain')
  res.end("Hello World")
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
});