const mongoose = require('mongoose');

const prodectSchema = new mongoose.Schema({
  name: String,
  price: String,
  description: String,
  rating: String,
  image: String,
  category: String
});

const prodectModel = mongoose.model('prodect', prodectSchema);

module.exports = prodectModel;