const express = require("express");
const axios = require("axios");

require("dotenv").config();
const port = process.env.PORT || 3001;
const client_id = process.env.GITHUB_CLIENT_ID;
const client_secret = process.env.GITHUB_CLIENT_SECRET;

const app = express();

app.use(express.json());

app.post("/login/oauth/github/token", (req, res, next) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).send("no code");
  }

  axios
    .post(
      "https://github.com/login/oauth/access_token",
      { code, client_id, client_secret },
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
    .then((axiosResponse) => {
      if (axiosResponse.error) {
        return res.status(401).send(axiosResponse.error.message);
      }

      res.json(axiosResponse.data);
    })
    .catch(next);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
