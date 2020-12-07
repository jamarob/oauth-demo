const users = [
  {
    username: "jamarob",
    name: "Jan",
    avatarUrl: "https://github.com/jamarob.png",
    favoriteAnimal: "Dogs",
  },
];

const findUserByUsername = (name) =>
  users.find((user) => user.username === name);

module.exports = { findUserByUsername };
