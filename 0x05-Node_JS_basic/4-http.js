const http = require('http');

const app = http.createServer((_, res) => {
  const plainResponse = 'Hello Holberton School!';

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Content-Length': plainResponse.length,
  });
  res.end(plainResponse);
});

app.listen(1245, 'localhost', () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
