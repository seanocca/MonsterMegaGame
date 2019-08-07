// Used to process errors from all api's
const processError = (error, response) => {
  const errorMessage = `Error Caught: ${error.message}`;
  console.log('\x1b[1m\x1b[91m%s\x1b[0m', errorMessage);
  response.status(error.statusCode).send(error);
}

module.exports = processError;