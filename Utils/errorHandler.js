const isProd = process.env.NODE_ENV === "production";

const errorHandler = (app) => {
  app.use((req, res, next) => {
    const error = new Error();
    error.message = "Not Found";
    error.status = 404;
    next(error);
  });

  app.use((err, req, res, next) => {
    const statusCode = err.status ? err.status : 404;
    const error = isProd
      ? {
          status: statusCode,
          error: {
            name: err.name,
            message: err.message,
          },
        }
      : {
          status: statusCode,
          error: {
            name: err.name,
            message: err.message,
            stack: err.stack,
          },
        };
    return res.status(statusCode).json(error);
  });

  return app;
};

module.exports = errorHandler;
