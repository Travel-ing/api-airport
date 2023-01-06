const morgan = require("morgan");
const logger = require("./winston");
const jsonWebToken = require("jsonwebtoken");
const stream = {
  write: (message) => logger.http(message),
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

morgan.token("hostname", function (req, res) {
  return req.hostname;
});

morgan.token("user-type", function (req, res) {
  const data = JSON.parse(
    jsonWebToken.decode(req.headers.authorization.split(" ")[1]).sub
  );
  return data.type;
});

const morganMiddleware = morgan(
  ":method :url :status :hostname :user-type - :response-time ms",
  { stream, skip }
);

module.exports = morganMiddleware;
