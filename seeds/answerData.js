const { Answer } = require("../models");

const answerdata = [
  {
    id: "",
    createdDate: "September 4, 2024 21:00:00",
    content: "",
    question_id: "",
    user_id: "",
  },
  {
    id: "",
    createdDate: "September 4, 2024 21:00:00",
    content: "",
    question_id: "",
    user_id: "",
  },
];

const seedAnswers = () => Answer.bulkCreate(answerdata);

module.exports = seedAnswers;
