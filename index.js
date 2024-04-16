const express = require("express");
const { dbConnection } = require("./db");
const categoryRouter=require('./Routers/department');
const gradelevelRouter= require('./Routers/gradelevel');
const sectionController= require('./Routers/section')

const teacherController= require('./Routers/teacher')

const cors= require('cors')

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", categoryRouter);
app.use("/api", gradelevelRouter);
app.use("/api",sectionController);
app.use("/api",teacherController);
const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  await dbConnection();
  console.log(`The server is running on port ${PORT}`);
});
