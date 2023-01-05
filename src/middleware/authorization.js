const jsonWebToken = require("jsonwebtoken");
async function authorization(req, res, next) {
  const data = JSON.parse(jsonWebToken.decode(req.headers.authorization.split(" ")[1]).sub);
  if(data.type === "user" && req.method !== "GET") {
    res.status(401).end()
  }
  next();
}

module.exports = authorization;
