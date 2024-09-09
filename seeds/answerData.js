const { Answer } = require('../models');

const answerData = [
  {
    content: 'This is the answer for question 1.',
    question_id: 1, // Replace with actual question IDs
    user_id: 1, // Replace with actual user IDs
  },
  {
    content: 'This is the answer for question 2.',
    question_id: 2, // Replace with actual question IDs
    user_id: 2, // Replace with actual user IDs
  },
];

const seedAnswers = () => Answer.bulkCreate(answerData);

module.exports = seedAnswers;
