const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [{
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: Number
    }],
    totalPrice: Number,
    status: { type: String, default: "Pending" },
    address: String,
    createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Order", orderSchema);
