const prodectModel = require("../models/prodectModels");

//Get prodects API - /menu
exports.getProdects = async (req, res, next) => {
  try {
    const keyword = req.query.keyword;

    let search = {};

    if (keyword) {
      search = {
        $or: [
          {
            name: {
              $regex: keyword,
              $options: "i",
            },
          },
          {
            category: {
              $regex: keyword,
              $options: "i",
            },
          },
        ],
      };
    }

    const prodects = await prodectModel.find(search);

    res.json({
      success: true,
      prodects,
    });
  } catch (err) {
    next(err);
  }
};

//Get single prodect API - /menu:id
exports.getSingleProdects = async (req, res, next) => {
  try {
    const singleProdect = await prodectModel.findById(req.params.id);
    res.json({
      succrss: true,
      msg: "get single prodect successfull",
      singleProdect,
    });
  } catch (err) {
    res.status(404).json({
      succrss: true,
      msg: 'Prodect is not fount with the id',
    });
  }
};
