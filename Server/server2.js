//Passing an HTML page as a response to the req

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // send an HTML File
  fs.readFile('./views/index.html', (err, data) => {
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
