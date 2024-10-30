const Sequelize = require("sequelize");
require("dotenv").config();
// Setting up sequelize connection to database
let sequelize;
if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "ec2-54-196-216-103.compute-1.amazonaws.com",
      dialect: "postgres",
      port: 5432,
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    }
  );
}
module.exports = sequelize;
