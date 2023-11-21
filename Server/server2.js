//Passing an HTML page as a response to the req

const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set Header content type
  res.setHeader('Content-Type', 'text/html');

  let path = './views';
  switch (req.url) {
    case '/':
      path += '/index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += '/about.html';
      res.statusCode = 200;
      break;
    case '/about-us': //old URL to be redirected
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end;
      break;
    default:
      path += '/404.html';
      res.statusCode = 404;
      break;
  }

  // send an HTML File
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data); faster method <
      res.end(data);
    }
  });
});

// create a listener for the server requests
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
