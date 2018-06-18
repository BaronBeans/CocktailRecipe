const http = require("http");
const port = 3000;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.setHeader('Strict-Transport-Security', 'max-age=31536000');
  response.setHeader('Content-Security-Policy', `script-src 'self'`);
  response.setHeader('X-Frame-Options', 'SAMEORIGIN');
  response.setHeader('X-Xss-Protection', '1; mode=block');
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Referrer-Policy', 'strict-origin');
  response.writeHead(200);
  response.end("Hello Node.js Server!");
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log("something bad happened", err);
  }

  console.log(`server is listening on ${port}`);
});
