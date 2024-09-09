const sequelize = require('../config/connection');
const seedUsers = require('./userData');
const seedQuestions = require('./questionData');
const seedTags = require('./tagData');
const seedAnswers = require('./answerData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers(); // Seed users first
  console.log('\n----- USERS SEEDED -----\n');

  await seedQuestions(); // Seed questions after users
  console.log('\n----- QUESTIONS SEEDED -----\n');

  await seedTags(); // Seed tags
  console.log('\n----- TAGS SEEDED -----\n');

  await seedAnswers(); // Seed answers last
  console.log('\n----- ANSWERS SEEDED -----\n');

  process.exit(0);
};

seedAll();
