// here's our index page
const indexPage = `
<html>
  <head>
    <title>Wacky Number Web Service</title>
  </head>
  <body>
    <h1>Random Number Web Service!!!</h1>
    <p>
      Random Number Web Service - the endpoint is here --> 
      <a href="/random-number">random-number</a> or <a href="/random-number?max=10">random-number?max=10</a>
    </p>
  </body>
</html>`;

// here's our 404 page
const errorPage = `
<html>
    <head>
        <title>404 - File Not Found!</title>
    </head>
    <body>
        <h1>404 - File Not Found!</h1>
        <p>404 - File Not Found!</p>
        <p>:-O</p>
    </body>
</html>`;

const getIndexResponse = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' }); // send response headers
  response.write(indexPage); // send content
  response.end(); // close connection
};

const get404Response = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' }); // send response headers
  response.write(errorPage); // send content
  response.end(); // close connection
};

module.exports.getIndexResponse = getIndexResponse;
module.exports.get404Response = get404Response;
