require("dotenv").config();
const express = require("express");
const jwtAuthFilter = require("./middleware/jwtAuthFilter");
const {
  exchangeCodeForToken,
  getGitHubUser,
} = require("./services/gitHubService");
const { createJwt } = require("./services/jwtUtils");
const { findUserByUsername } = require("./services/userService");

const {
  PORT,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  JWT_SECRET_KEY,
} = process.env;

const app = express();

app.use(express.json());

app.post("/login/oauth/github/token", (req, res, next) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).send("no code");
  }

  exchangeCodeForToken(code, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET)
    .then((ghResponse) => {
      if (ghResponse.error) {
        return res.status(401).send(ghResponse.error.message);
      }
      return ghResponse.data.access_token;
    })
    .then((token) => getGitHubUser(token))
    .then((ghUser) => {
      const user = findUserByUsername(ghUser.login);

      if (!user) {
        return res.status(401).send("not registered");
      }

      const token = createJwt(user.username, JWT_SECRET_KEY);

      res.json({ access_token: token });
    })
    .catch(next);
});

const authMiddleware = jwtAuthFilter(JWT_SECRET_KEY);

app.get("/api/profile", authMiddleware, (req, res) => {
  res.json(res.locals.user);
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
