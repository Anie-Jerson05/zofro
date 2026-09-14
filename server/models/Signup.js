const mongoose = require("mongoose");

const SignupSchema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  confirmpassword: String,
});

const SignupModel = mongoose.model("signup", SignupSchema);
module.exports = SignupModel;
