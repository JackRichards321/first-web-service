// 6 - this will return a random number no bigger than `max`, as a string
// we will also doing our query parameter validation here
const randomNumberJSON = (max = 1) => {
  let max2 = Number(max); // cast 'max' to a number
  max2 = !max2 ? 1 : max2;
  max2 = max2 < 1 ? 1 : max2;
  const number = Math.random() * max2;
  const responseObj = {
    timestamp: new Date(),
    number,
  };
  return JSON.stringify(responseObj);
};

const getRandomNumberResponse = (request, response, params) => {
  response.writeHead(200, { 'Content-Type': 'application/json' }); // send response headers
  response.write(randomNumberJSON(params.max)); // send content
  response.end(); // close connection
};

module.exports.getRandomNumberResponse = getRandomNumberResponse;
