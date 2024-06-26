const Help = require("../models/help");
const HelpResponse = require("../models/help_response");

exports.helps = async (req, res) => {
  try {
    const helps = await Help.findAll({
    });
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
exports.helpsWithResponsesByParentId = async (req, res) => {
  try {
    const helpsWithResponses = await Help.findAll({
      include: [{
        model: HelpResponse,
        attributes: {
          exclude: ['HelpId']
        }
      }],
      where: {
        ParentId: req.params.parentId,
      }
    });
    if (!helpsWithResponses) {
      return res.status(200).json({
        success: true,
        message: "Help is not available!",
      });
    }
    res.status(200).json(helpsWithResponses);
  } catch (error) {
    console.log("HELP ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};


exports.help = async (req, res) => {
  try {
    const parentHelp = await Help.findOne({
      where: {
        ParentId: req.params.id,
      },
    });
    if (!parentHelp) {
      return res.status(200).json({
        success: true,
        message: "Parent is not available!",
      });
    }
    res.status(200).json(parentHelp);
  } catch (error) {
    console.log("ATTENDANCE ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.createHelp = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res.status(200).json({
        success: false,
        message: "Please provide a attendance details",
      });
    }

    await Help.create({
      date: data.date,
      description: data.description,
      ParentId: data.ParentId,
    });
    res.status(200).json({
      success: true,
      message: "Your help is posted!",
    });
  } catch (error) {
    console.log("CREATE DEPARTMENT ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.deleteHelp = async (req, res) => {
  try {
    const help = await Help.findOne({
      where: {},
    });
    if (!departmnet) {
      return res.status(200).json({
        success: false,
        message: "Attencance is not available!!!",
      });
    }
    await help.destroy();
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

exports.updateHelp = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please Insert Attencance" });
    }
    await Help.update(
      { date: data.date, description: data.description},
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE ATTENDANCE ERROR IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};
