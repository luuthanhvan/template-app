const mg = require("mongoose");

const Schema = mg.Schema;

const Products = new Schema({
  productName: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: String, required: true },
  status: { type: Boolean, default: false },
  description: { type: String, required: false },
});

module.exports = mg.model("Products", Products);
