const Semister = require("../models/semister");

exports.semisters = async (req, res) => {
  try {
    const semisters = await Semister.findAll();
    if (!semisters) {
      return res.status(200).json({
        success: false,
        message: "Semister is not available!",
      });
    }
    res.status(200).json(semisters);
  } catch (error) {
    console.log("SEMISTER ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.createSemister = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please provide a semister info" });
    }
    await Semister.create({ name: data.name, description: data.description, AcademicYearId:data.AcademicYearId });
    res.status(200).json({ success: true, message: "Semister is created!" });
  } catch (error) {
    console.log("CREATE SEMISTER ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.getSemisterById = async (req, res) => {
  try {
    const semister = await Semister.findByPk(req.params.id);
    if (!semister) {
      return res.status(200).json({
        success: false,
        message: "semister is not available !!",
      });
    }
    res.status(200).json(semister);
  } catch (error) {
    console.log("GET SEMISTER ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};
exports.getSemistersByAcademicYearId = async(req, res)=>{
    try {
        const semisterByAcademicYear= await Semister.findAll({
        where:{
            AcademicYearId:req.params.academicYearId,
        }
    });
    if(!semisterByAcademicYear){
        return res.status(200).json({
            success:false,
            message:'This academic year has not semeister'
        })
    }
await res.status(200).json(semisterByAcademicYear);  
    } catch (error) {
        console.log("GET BY YEAR ERROR IS...", error);
        res.status(500).json({
          success: false,
          message: "INTERNAL SERVER ERROR",
        });
      }
}

exports.semisterByAcademicYearAndSemisterId= async (req, res)=>{
    try {
     const semister= await Semister.findOne({
        where:{
            id:req.params.id,
            AcademicYearId:req.params.academicYearId
        }
    });
    if(!semister){
        return res.status(200).json({
            success:false, 
            message:'semister is not available'});
    }
    res.status(200).json(semister);     
    } catch (error) {
        console.log('GETTING SEMISTER BY ACADEMIC YEAR AND SEMISTER ID IS...',error);
        res.status(500).json({
            success:false,
            message:'INTERNAL SERVER ERROR',
        })
    }
}

exports.deleteSemister = async (req, res) => {
  try {
    const semister = await Semister.findByPk(req.params.id);
    if (!semister) {
      return res.status(200).json({
        success: false,
        message: "Semister is not available!!!",
      });
    }
    await semister.destroy();
    res.status(200).json({ success: true, message: "Delete Successed!!!" });
  } catch (error) {
    console.log("DELETE SEMISTER ERROR IS...", error);
    res.status(500).json({
      success: false,
      message: "INTERNAL SERVER ERROR",
    });
  }
};

exports.updateSemister = async (req, res) => {
  try {
    const data = req.body;
    if (!data) {
      return res
        .status(200)
        .json({ success: false, message: "Please Insert Semister info" });
    }
    await Semister.update(
      { name: data.name, description:data.description },
      { where: { id: req.params.id } }
    );
    res.status(200).json({ message: "Update success!!!" });
  } catch (error) {
    console.log("UPDATE SEMISTER IS...", error);
    res.status(500).json({ success: false, message: "INTERNAL SERVER ERROR" });
  }
};
