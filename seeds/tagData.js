const { Tag } = require("../models");

const tagdata = [
  {
    id: "",
    name: "",
  },
  {
    id: "",
    name: "",
  },
];

const seedTags = () => Question.bulkCreate(tagdata);

module.exports = seedTags;
