const jwt = require("jsonwebtoken");

const now = () => Math.floor(new Date().getTime() / 1000);

const createJwt = (username, secret) => {
  return jwt.sign({ sub: username, exp: now() + 60 * 60 }, secret, {
    algorithm: "HS256",
  });
};

const getToken = (header) => header.replace("Bearer", "").trim();

const decodeToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
};

module.exports = { createJwt, getToken, decodeToken };
