const sequelize = require("../config/connection");
const seedQuestions = require("./questionData");
const seedAnswers = require("./answerData");
const seedUsers = require("./userData");
const seedTags = require("./tagData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedQuestions();

  await seedAnswers();

  await seedUsers();

  await seedTags();

  process.exit(0);
};

seedAll();
