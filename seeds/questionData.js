const { Question } = require("../models");

const questiondata = [
  {
    id: "",
    createdDate: "",
    content: "",
    user_id: "",
  },
  {
    id: "",
    createdDate: "",
    content: "",
    user_id: "",
  },
];

const seedQuestions = () => Question.bulkCreate(questiondata);

module.exports = seedQuestions;
