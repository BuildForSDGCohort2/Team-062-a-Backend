exports.authenticationError = (message) => {
  const err = new Error();
  err.name = "Authentication Error";
  err.status = 401;
  err.message = message;
  throw err;
};

exports.requestError = (message) => {
  const err = new Error();
  err.name = "Bad Request";
  err.status = 400;
  err.message = message;
  throw err;
};
