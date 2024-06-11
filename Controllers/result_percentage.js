const ResultPercentage = require("../models/result_percentage");

exports.resultPercentages = async (req, res) => {
  try {
    const resultPercentages = await ResultPercentage.findAll();
    if (!resultPercentages) {
      return res.status(200).json({
        success: true,
        message: "Result percentage is not available!",
      });
    }
    res.status(200).json(resultPercentages);
  } catch (error) {
    console.log("RESULT PERCENTAGE ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.createResultPercentage = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please provide a result percentage info" });
    }
    await ResultPercentage.create({ 
      name: data.name, 
      percentage: data.percentage,
       academicYearId:data.academicYearId,
      semisterId:data.semisterId,
      });
    res.status(200).json({ success: true, message: "Result percentage is created!" });
  } catch (error) {
    console.log("CREATE RESULT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.getResultPercentage = async (req, res) => {
  try {
    const resultPercentage = await ResultPercentage.findByPk(req.params.id);
    if (!resultPercentage) {
      return res.status(200).json({
        success: false,
        message: "Result Percentage is not available !!!",
      });
    }
    res.status(200).json(resultPercentage);
  } catch (error) {
    console.log("GET RESULT PERCENTAGE ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.deleteResultPercentage = async (req, res) => {
  try {
    const resultPercentage = await ResultPercentage.findByPk(req.params.id);
    if (!resultPercentage) {
      return res.status(200).json({
        success: false,
        message: "result percentage is not available!!!",
      });
    }
    await resultPercentage.destroy();
    res.status(200).json({ success: true, message: "Delete Successed!!!" });
  } catch (error) {
    console.log("DELETE RESULT PERCENTAGE ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.updateResultPercentage = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please Insert reuslt percentage info" });
    }
    await ResultPercentage.update(
      { name: data.name, percentage:data.percentage, academicYearId: data.academicYearId },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE RESULT PERCENTAGE ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};
