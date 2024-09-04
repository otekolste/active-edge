const { User } = require("../models");

const userdata = [
  {
    id: "",
    username: "",
    email: "",
    password: "",
  },
  {
    id: "",
    username: "",
    email: "",
    password: "",
  },
];

const seedUsers = () => Question.bulkCreate(userdata);

module.exports = seedUsers;
