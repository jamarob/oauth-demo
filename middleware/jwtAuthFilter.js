const { getToken, decodeToken } = require("../services/jwtUtils");
const { findUserByUsername } = require("../services/userService");

const jwtAuthFilter = (jwt_secret_key) => (req, res, next) => {
  const token = getToken(req.headers.authorization);

  if (!token) {
    return res.status(400).send("no token");
  }

  const jwt = decodeToken(token, jwt_secret_key);

  if (!jwt) {
    return res.status(401).send("invalid token");
  }

  const user = findUserByUsername(jwt.sub);

  res.locals.user = user;
  next();
};

module.exports = jwtAuthFilter;
