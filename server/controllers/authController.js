const SignupModel = require("../models/Signup");

exports.signup = async (req, res) => {
  try {
    const signup = await SignupModel.create(req.body);
    res.status(200).json(signup);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await SignupModel.findOne({ email: email }).then((user) => {
      if (user) {
        if (user.password === password) {
          res.json("Success");
        } else {
          res.json("wrong password");
        }
      } else {
        res.json("user is not fount");
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.loginUname = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await SignupModel.findOne({ email: email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.json({
      success: true,
      name: user.name,
    });
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};