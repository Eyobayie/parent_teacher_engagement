const { sequelize } = require("../db");
const AcademicYear = require("./academicYear");
const ResultPercentage = require("./result_percentage");
const Semister = require("./semister");
const Student = require("./student");
const Subject = require("./subject");
const StudentResult = require("./student_result");
const Help = require("./help");
const Parent = require("./parent");
const HelpResponse = require("./help_response");
const Gradelevel = require("./gradelevel");
const Section = require("./section");
const Assignment = require("./assignment");
const Teacher = require("./teacher");
const Attendance = require("./attendance");

// Establish Associations
AcademicYear.hasMany(Semister, { constraints: false });
Semister.belongsTo(AcademicYear);

AcademicYear.hasMany(StudentResult, { constraints: false });
StudentResult.belongsTo(AcademicYear);

AcademicYear.hasMany(Section, { constraints: false });
Section.belongsTo(AcademicYear);

ResultPercentage.hasMany(StudentResult, { constraints: false });
StudentResult.belongsTo(ResultPercentage);

Semister.hasMany(StudentResult, { constraints: false });
StudentResult.belongsTo(Semister);

Subject.hasMany(StudentResult, { constraints: false });
StudentResult.belongsTo(Subject);

Student.hasMany(StudentResult, { constraints: false });
StudentResult.belongsTo(Student);

Parent.hasMany(Student, { constraints: false });
Student.belongsTo(Parent);

Parent.hasMany(Help, { constraints: false });
Help.belongsTo(Parent);

Help.hasMany(HelpResponse, { constraints: false });
HelpResponse.belongsTo(Help);

Gradelevel.hasMany(Section, { constraints: false });
Section.belongsTo(Gradelevel);

Gradelevel.hasOne(Student, { constraints: false });
Student.belongsTo(Gradelevel);

Gradelevel.hasMany(Subject, { constraints: false });
Subject.belongsTo(Gradelevel);

Section.hasMany(Student, { constraints: false });
Student.belongsTo(Section);

Subject.hasMany(Assignment, { constraints: false });
Assignment.belongsTo(Subject);

Teacher.hasMany(Attendance, { constraints: false });
Attendance.belongsTo(Teacher);

Student.hasMany(Attendance, { constraints: false });
Attendance.belongsTo(Student);

module.exports = {
  sequelize,
  AcademicYear,
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
  StudentResult
};
