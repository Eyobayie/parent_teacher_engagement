const express = require("express");
const { dbConnection } = require("./db");
const departmentRouter = require("./Routers/department");
const gradelevelRouter = require("./Routers/gradelevel");
const sectionRouter = require("./Routers/section");
const academicYearRouter = require("./Routers/academicYear");
const teacherController = require("./Routers/teacher");
const subjectRouter = require("./Routers/subject");
const parentRouter= require("./Routers/parent");
const attendanceRouter= require("./Routers/attendance");
const announcementRouter= require('./Routers/announcement');
const studentRouter= require('./Routers/student');
const helpRouter= require('./Routers/help');
const helpResponseRouter= require('./Routers/help_response');
const semisterRouter= require('./Routers/semister');
const teacherAssignmentRouter= require('./Routers/teacher_assignment');
const assignmentRoter= require('./Routers/assignment');
const resultPercentageRouter= require('./Routers/result_percentage');
const studentResultRouter= require('./Routers/student_result');
const {  AcademicYear,
  Assignment,
  Teacher,
  Attendance,
  HelpResponse,
  Gradelevel,
  Section,
  Help,
  Parent,
  ResultPercentage,
  Semister,
  Student,
  Subject,
  StudentResult}=require('./models/model_association'); // This line ensures associations are set up

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", departmentRouter);
app.use("/api", gradelevelRouter);
app.use("/api", sectionRouter);
app.use("/api", academicYearRouter);
app.use("/api", teacherController);
app.use('/api', subjectRouter);
app.use('/api', parentRouter);
app.use('/api', attendanceRouter);
app.use('/api', announcementRouter);
app.use('/api', studentRouter);
app.use('/api', helpRouter);
app.use('/api', helpResponseRouter);
app.use('/api', semisterRouter);
app.use('/api', teacherAssignmentRouter);
app.use('/api', assignmentRoter);
app.use('/api', resultPercentageRouter);
app.use('/api', studentResultRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  await dbConnection();
  console.log(`The server is running on port ${PORT}`);
});
