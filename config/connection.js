const Sequelize = require("sequelize");
require("dotenv").config();
// Setting up sequelize connection to database
let sequelize;
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(answer_hive_db, postgres, sAllL0v3now, {
    host: "ec2-54-196-216-103.compute-1.amazonaws.com",
    dialect: "postgres",
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  });
}
module.exports = sequelize;
