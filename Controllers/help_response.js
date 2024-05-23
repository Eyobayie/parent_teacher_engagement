const Help = require("../models/help");
const HelpResponse = require("../models/help_response");

exports.helpResponses = async (req, res) => {
  try {
    const helps = await HelpResponse.findAll();  
    if (!helps) {
      return res.status(200).json({
        success: true,
        message: "Help is not available!",
      });
    }
    res.status(200).json(helps);
  } catch (error) {
    console.log("HELP ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.helpresponse = async (req, res) => {
  try {
    const parentHelp = await Help.findAll({
      where: {
        ParentId: req.params.id,
      },
    });
    if (!parentHelps) {
      return res.status(200).json({
        success: true,
        message: "Parent is not available!",
      });
    }
    res.status(200).json(parentHelps);
  } catch (error) {
    console.log("ATTENDANCE ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.createResponse = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(200).json({
        success: false,
        message: "Please provide a attendance details",
      });
    }

    await HelpResponse.create({
      date: data.date,
      description: data.description,
      HelpId: data.HelpId,
    });
    res.status(200).json({
      success: true,
      message: "Your help  response is posted!",
    });
  } catch (error) {
    console.log("CREATE RESPONSE ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.deleteHelpResponse = async (req, res) => {
  try {
    const response = await HelpResponse.findOne({
      where: {id:req.params.id},
    });
    if (!response) {
      return res.status(200).json({
        success: false,
        message: "Response is not available!!!",
      });
    }
    await response.destroy();
    res.status(200).json({
      success: true,
      message: "Delete Successed!!!",
    });
  } catch (error) {
    console.log("DELETE BRANCH ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.updateHelpResponse = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please Insert response" });
    }
    await HelpResponse.update(
      { date: data.date, description: data.description},
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE ATTENDANCE ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};
