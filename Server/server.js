const http = require('http');

//create server

const server = http.createServer((req, res) => {
  //console.log('request made to server');
  console.log(req.url, req.method);

  //set Header content type (using HTML)
  res.setHeader('Content-Type', 'text/html');

  res.write('<p>Hello, this is was written from the server req</p>'); // you can pass html as a server response
  res.end();
});

// create a listener for the server requests

server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
