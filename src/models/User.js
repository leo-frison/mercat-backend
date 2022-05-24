import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Book } from "./Book.js";

export const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

User.hasMany(Book, {
  foreinkey: "userId",
  sourceKey: "id",
});
Book.belongsTo(User, { foreinkey: "userId", targetId: "id" });
