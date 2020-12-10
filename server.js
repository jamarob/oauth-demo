require("dotenv").config();
const express = require("express");
const axios = require("axios");

const { PORT, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } = process.env;

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
      {
        code,
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
    .then((axiosResponse) => {
      if (axiosResponse.error) {
        if (axios.error === "bad_verification_code") {
          return res.status(401).json(axiosResponse.error);
        }
        return next(new Error(axios.error));
      }

      res.json(axiosResponse.data);
    })
    .catch(next);
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
