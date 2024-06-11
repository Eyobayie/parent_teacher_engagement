const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("PTES", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Successfully connected!!!");
  } catch (error) {
    console.log(error);
  }
};

sequelize.sync(
    { force: false,
       alter:false,
    freezeTableName: true }).then(() => {
  console.log("Database and tables synced!!!");
});

module.exports = {
  sequelize,
  dbConnection,
};
