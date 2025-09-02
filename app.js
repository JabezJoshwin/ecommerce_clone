const express = require("express");
const app = express();
const ejs = require("ejs");
const path = require("path"); 
const mongoose = require('mongoose');
const engine = require('ejs-mate');

const User = require('./models/user');
const Product = require('./models/product');
const Order = require('./models/order');
const Cart = require('./models/cart');

// const authRoutes = require('./routes/auth');
// const productRoutes = require('./routes/products');
// const cartRoutes = require('./routes/cart');
// const adminRoutes = require('./routes/admin');

app.set('views', path.join(__dirname, 'views'));    //vercel settings

app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

main()
.catch(err => console.log(err))
.then(() => console.log("Database Implemented"));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_db');
}

app.use(express.json()); // Middleware to parse JSON bodies
// app.use('/auth', authRoutes);        // Routes for authentication start with /auth
// app.use('/products', productRoutes); // Routes for products start with /products
// app.use('/cart', cartRoutes);        // Routes for cart start with /cart
// app.use('/admin', adminRoutes);      // Routes for admin start with /admin


app.get("/", (req, res) => {
    res.render("homepage");
});

app.get("/shop", async (req, res) => {
    try {
    // Fetch all products from the database
    const products = await Product.find({});

    // Render 'shop' view with products data
    res.render("shop", { products });
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.post("/login", (req, res) => {
    let otp = Math.round(1000 + Math.random() * 9000);
    let btn = document.querySelector("otp");
    btn.addEventListener(() => {
        document.querySelector('.otp').style.display = block;
    });
})

app.listen(8080, () => {
    console.log("App listening on 8080");
});

module.exports = app;
