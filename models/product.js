const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,  // URL to product image
    price: Number,
    stock: Number,
    category: String
});
module.exports = mongoose.model("Product", productSchema);
