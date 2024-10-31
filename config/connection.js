const Sequelize = require("sequelize");
require("dotenv").config();
// Setting up sequelize connection to database
let sequelize;
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize("postgres", "postgres", "1mq3#97sfFPXGD*M%pQm", {
    host: "answerhivedb.cn2aqqem0c0k.us-east-1.rds.amazonaws.com",
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
