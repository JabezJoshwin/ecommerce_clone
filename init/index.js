const mongoose = require("mongoose");
const User = require("../models/user");
const Product = require("../models/product");
const data = require("./data");

// Replace with your MongoDB URI
const DB_URI = "mongodb://localhost:27017/ecommerce_db";

async function initDB() {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected");

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});

    // Insert sample users
    await User.insertMany(data.users);
    console.log("Users inserted");

    // Insert sample products
    await Product.insertMany(data.products);
    console.log("Products inserted");

    mongoose.disconnect();
    console.log("MongoDB disconnected. DB initialization complete.");
  } catch (error) {
    console.error("DB initialization error:", error);
  }
}

initDB();
