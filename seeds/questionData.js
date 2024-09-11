const { Question } = require('../models');

const questionData = [
  {
    content: 'What is the difference between let and const in JavaScript?',
    title: 'Coding help',
    user_id: 1, // Replace with valid user ID
    createdDate: new Date(), // Current timestamp
  },
  {
    content: 'How do you create a REST API using Express?',
    title: 'Api help',
    user_id: 2, // Replace with valid user ID
    createdDate: new Date(), // Current timestamp
  },
];

const seedQuestions = () => Question.bulkCreate(questionData);

module.exports = seedQuestions;
