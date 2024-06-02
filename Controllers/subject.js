const Subject = require("../models/subject");

exports.subjects = async (req, res) => {
  try {
    const subjects = await Subject.findAll();
    if (!subjects) {
      return res.status(200).json({
        success: true,
        message: "Subjects is not available!!!",
      });
    }
    res.status(200).json(subjects);
  } catch (error) {
    console.log("SUBJECT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.createSubject = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please provide a subject name" });
    }
    await Subject.create({
      name: data.name,
      description: data.description,
      GradelevelId: data.GradelevelId,
    });
    res.status(200).json({ success: true, message: "Subject is created!!!" });
  } catch (error) {
    console.log("CREATE SUBJECT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.getSubject = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (!subject) {
      return res.status(200).json({
        success: false,
        message: "Subject is not available !!",
      });
    }
    res.status(200).json(subject);
  } catch (error) {
    console.log("GET SUBJECT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.deleteSubject = async (req, res) => {
  try {
    const subject = await Subject.findByPk(req.params.id);
    if (!subject) {
      return res.status(200).json({
        success: false,
        message: "Subject is not available!!!",
      });
    }
    await subject.destroy();
    res.status(200).json({ success: true, message: "Delete Successed!!!" });
  } catch (error) {
    console.log("DELETE SUBJECT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.updateSubject = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please Insert Subject" });
    }
    await Subject.update(
      {
        name: data.name,
        description: data.description,
        GradelevelId: data.GradelevelId,
      },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE SUBJECT ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};

exports.subjectByGradelevelId = async (req, res) => {
  try {
    const subjects = await Subject.findAll({
      where: {
        GradelevelId: req.params.gradelevelId,
      },
    });
    if (!subjects.length) {
      return res.status(200).json({ success: false, message: 'There are no subjects in this grade.' });
    }
    res.status(200).json(subjects);
  } catch (error) {
    console.log("ERROR GETTING SUBJECTS BY GRADELEVEL ID:", error);
    res.status(500).json({ success: false, message: 'INTERNAL SERVER ERROR' });
  }
};
