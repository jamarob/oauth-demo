const axios = require("axios");

const exchangeCodeForToken = (code, client_id, client_secret) =>
  axios.post(
    "https://github.com/login/oauth/access_token",
    { code, client_id, client_secret },
    {
      headers: {
        Accept: "application/json",
      },
    }
  );

const getGitHubUser = (token) =>
  axios
    .get("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => res.data);

module.exports = { exchangeCodeForToken, getGitHubUser };
