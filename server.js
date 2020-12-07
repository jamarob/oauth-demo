const express = require("express");
const jwtAuthFilter = require("./middleware/jwtAuthFilter");
const {
  exchangeCodeForToken,
  getGitHubUser,
} = require("./services/gitHubService");
const { createJwt } = require("./services/jwtUtils");
const { findUserByUsername } = require("./services/userService");

require("dotenv").config();
const port = process.env.PORT || 3001;
const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;
const jwt_secret_key = process.env.JWT_SECRET_KEY;

const app = express();

app.use(express.json());

app.post("/login/oauth/github/token", (req, res, next) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).send("no code");
  }

  exchangeCodeForToken(code, client_id, client_secret)
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

      const token = createJwt(user.username, jwt_secret_key);

      res.json({ access_token: token });
    })
    .catch(next);
});

app.use(jwtAuthFilter(jwt_secret_key));

// protected routes

app.get("/api/profile", (req, res) => {
  res.json(res.locals.user);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
