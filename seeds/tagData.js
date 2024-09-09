const { Tag } = require('../models');

const tagData = [
  {
    name: 'JavaScript',
  },
  {
    name: 'Node.js',
  },
  {
    name: 'Sequelize',
  },
  {
    name: 'Express',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
