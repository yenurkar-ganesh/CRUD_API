const errorhandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case 400:
      res.json({
        title: "Validation Failed!!!!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 404:
      res.json({
        title: "Not Found!!!!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 401:
      res.json({
        title: "UNAUTHORIZED..!!!!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 403:
      res.json({
        title: "FORBIDDEN!!!!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case 500:
      res.json({
        title: "SERVER_ERROR!!!!",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    default:
      console.log(`NO Error, All Good 👋`);
      break;
  }
};

module.exports = errorhandler;
