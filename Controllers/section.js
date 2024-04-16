const Section = require("../models/section");

exports.sections = async (req, res) => {
  try {
    const sections = await Section.findAll();
    if (!sections) {
      return res.status(200).json({
        success: true,
        message: "Section is not available!",
      });
    }
    res.status(200).json(sections);
  } catch (error) {
    console.log("Section ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};
exports.createSection = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please provide a Section name" });
    }
    await Section.create(
        { name: data.name,
         description:data.description, 
         gradelevelId:data.gradelevelId
         });
    res.status(200).json({ success: true, message: "Section is created!" });
  } catch (error) {
    console.log("CREATE Section ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.getSection = async (req, res) => {
  try {
    const Section = await Section.findByPk(req.params.id);
    if (!Section) {
      return res
        .status(200)
        .json({ success: false, message: "Section is not available!" });
    }
    res.status(200).json(Section);
  } catch (error) {
    console.log("GET Section ERROR IS...", error);
    res.status(500).json({
        success: false,
        message: "INTERNAL SERVER ERROR",
      });
  }
};

exports.deleteSection = async (req, res) => {
  try {
    const Section = await Section.findByPk(req.params.id);
    if (!Section) {
      return res
        .status(200)
        .json({ success: false, message: "Section is not available" });
    }
    await Section.destroy();
    res.status(200).json({ success: true, message: "Delete Successed!" });
  } catch (error) {
    console.log("DELETE BRANCH ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};
exports.updateSection = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please Insert Section" });
    }
    await Section.update(
      { name: data.name,
        description:data.description, 
        gradelevelId:data.gradelevelId },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE Section ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};
