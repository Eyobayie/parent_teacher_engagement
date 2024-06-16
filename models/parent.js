const { sequelize } = require("../db");
const { DataTypes } = require("sequelize");
const bcrypt = require('bcryptjs');

const Parent = sequelize.define(
  "Parent",
  {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: {
        isEmail: true,
      }
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique:true,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'parent',
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:'parent'
    }
  },
  {
    hooks: {
      beforeCreate: async (parent) => {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(parent.password, saltRounds);
        parent.password = hashedPassword;
      },
    },
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Parent;
