const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Answer extends Model {}

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    createdDate: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "question",
        key: "id",
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "answer",
  }
);

module.exports = Answer;
