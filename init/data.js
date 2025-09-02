const users = [
  { email: "user1@example.com", password: "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36h6.1fQY8F9JwbLj6eap/S", isAdmin: true },  // password123
  { email: "user2@example.com", password: "$2a$10$7QeRs9NBoXJWHiFWMJMqyOB0Zc3IqPBIT2fP5/1zpXRC5FbuYxyje", isAdmin: false }, // qwerty789
  { email: "user3@example.com", password: "$2a$10$3JZDy5q5GsT6vMMw8bkqRu9A0wM/uAqShEj/o6Pq2TyOztiR7cZj6", isAdmin: false }, // hackathon2025
  { email: "user4@example.com", password: "$2a$10$dkLHeqW5OViK9QSrA5kp2eyoPJsAq1zKlgbtpD6Dilg/ExYqG9r9G", isAdmin: false }, // letmein
  { email: "user5@example.com", password: "$2a$10$7wZ6/Y.buskY7XZs42BX2u9F4A1tKYhBG.9SjXc/cVdsZRoxqN/lK", isAdmin: false }, // adminpass
  { email: "user6@example.com", password: "$2a$10$m1aWy97C0mzNrwbJDGYSreWVtT+/4nZgQIbxqcJyckEy0nKUjhv0O", isAdmin: false }, // userpass
  { email: "user7@example.com", password: "$2a$10$do4deEcU1rO5ktEfXqt5YOqWaNt6kCdkbMyhD0yXDKk6fRYmBQ0wC", isAdmin: false }, // welcome1
  { email: "user8@example.com", password: "$2a$10$0kATTV8Wb2EqG5xf/1gvVeBJYUMsjSoXQSXyWtAPOMeL1KkHT/C6S", isAdmin: false }, // securepwd
  { email: "user9@example.com", password: "$2a$10$leKE7od6IjewEmM6rNEGaeXP0mv1HZ5/kBWvEZuEh/C2UYNgfgoqC", isAdmin: false }, // mypassword
  { email: "user10@example.com", password: "$2a$10$sKmkyUo6bTQqf3RuCGznEuhRBS+qvWDZanUw9Waqo9FelWgO8fNPK", isAdmin: false }, // pass2025
  { email: "user11@example.com", password: "$2a$10$EixZaYVK1fsbw1ZfbX3OXePaWxn96p36h6.1fQY8F9JwbLj6eap/S", isAdmin: true },  // password123
  { email: "user12@example.com", password: "$2a$10$7QeRs9NBoXJWHiFWMJMqyOB0Zc3IqPBIT2fP5/1zpXRC5FbuYxyje", isAdmin: false }, // qwerty789
  { email: "user13@example.com", password: "$2a$10$3JZDy5q5GsT6vMMw8bkqRu9A0wM/uAqShEj/o6Pq2TyOztiR7cZj6", isAdmin: false }, // hackathon2025
  { email: "user14@example.com", password: "$2a$10$dkLHeqW5OViK9QSrA5kp2eyoPJsAq1zKlgbtpD6Dilg/ExYqG9r9G", isAdmin: false }, // letmein
  { email: "user15@example.com", password: "$2a$10$7wZ6/Y.buskY7XZs42BX2u9F4A1tKYhBG.9SjXc/cVdsZRoxqN/lK", isAdmin: false }, // adminpass
  { email: "user16@example.com", password: "$2a$10$m1aWy97C0mzNrwbJDGYSreWVtT+/4nZgQIbxqcJyckEy0nKUjhv0O", isAdmin: false }, // userpass
  { email: "user17@example.com", password: "$2a$10$do4deEcU1rO5ktEfXqt5YOqWaNt6kCdkbMyhD0yXDKk6fRYmBQ0wC", isAdmin: false }, // welcome1
  { email: "user18@example.com", password: "$2a$10$0kATTV8Wb2EqG5xf/1gvVeBJYUMsjSoXQSXyWtAPOMeL1KkHT/C6S", isAdmin: false }, // securepwd
  { email: "user19@example.com", password: "$2a$10$leKE7od6IjewEmM6rNEGaeXP0mv1HZ5/kBWvEZuEh/C2UYNgfgoqC", isAdmin: false }, // mypassword
  { email: "user20@example.com", password: "$2a$10$sKmkyUo6bTQqf3RuCGznEuhRBS+qvWDZanUw9Waqo9FelWgO8fNPK", isAdmin: false }  // pass2025
];

const products = [
  {
    title: "Wireless Bluetooth Headphones",
    description: "High quality wireless headphones with noise cancellation.",
    image: "https://icentralstore.in/wp-content/uploads/2024/07/airpods-max-select-spacegray-202011.png",
    price: 2999.99,
    stock: 50,
    category: "Electronics"
  },
  {
    title: "Smart LED TV 50 inch",
    description: "50 inch 4K UHD smart TV with HDR support.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHIa6TbDQ04_p3g6YyJEXprZry9AU9ZnI9g&s",
    price: 39999.0,
    stock: 20,
    category: "Electronics"
  },
  {
    title: "Men's Casual Shirt",
    description: "100% cotton casual shirt for men.",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bonkerscorner.com%2Fproducts%2Fnavy-blue-signature-oversized-t-shirt%3Fsrsltid%3DAfmBOopSO_tcUkqRPY8uKAP3p4k48jwPyJGkulTpo8Ovp3qPkbaREJjd&psig=AOvVaw1tWSV8N5UkYX8Wsp7QX-B6&ust=1756832718241000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCJjC-4OGuI8DFQAAAAAdAAAAABAE",
    price: 799.0,
    stock: 100,
    category: "Clothing"
  },
  {
    title: "Organic Green Tea",
    description: "Premium organic green tea leaves.",
    image: "https://www.aicr.org/wp-content/uploads/2020/06/peppermint-tea-on-teacup-1417945-1200x826.jpg",
    price: 499.5,
    stock: 200,
    category: "Beauty"
  },
  {
    title: "Gaming Laptop",
    description: "High performance gaming laptop with latest GPU.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2GWTOHXGEpDzybXGQq08glWO_RMWrtrAAw&s",
    price: 89999.99,
    stock: 15,
    category: "Electronics"
  },
  {
    title: "Yoga Mat",
    description: "Non-slip, eco-friendly yoga mat.",
    image: "https://m.media-amazon.com/images/I/81fBVCWpbKL._UF350,350_QL80_.jpg",
    price: 1200.0,
    stock: 70,
    category: "Sports"
  },
  {
    title: "Women’s Running Shoes",
    description: "Lightweight running shoes for women.",
    image: "https://img.tatacliq.com/images/i17//437Wx649H/MP000000019116115_437Wx649H_202404141300301.jpeg",
    price: 2499.99,
    stock: 80,
    category: "Clothing"
  },
  {
    title: "Stainless Steel Cookware Set",
    description: "10-piece premium cookware set.",
    image: "https://vinodcookware.com/cdn/shop/files/VinodStainlessSteelClassiqueDeluxeSet_InductionFriendly_-4Pcs-SaucepotwithLid_SaucepanwithLid_FrypanandKadai.jpg?v=1754127257",
    price: 5999.49,
    stock: 40,
    category: "Home"
  },
  {
    title: "Fiction Bestseller Book",
    description: "Award-winning novel with thrilling storyline.",
    image: "https://static01.nyt.com/images/2024/06/30/books/books-flat-slide-FDQ7/books-flat-slide-FDQ7-articleLarge.png",
    price: 399.99,
    stock: 150,
    category: "Books"
  },
  {
    title: "Electric Kettle",
    description: "Fast boiling electric kettle with auto shut-off.",
    image: "https://m.media-amazon.com/images/I/61Ch8E6qcZL.jpg",
    price: 1499.99,
    stock: 60,
    category: "Home"
  },
  {
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with deep bass.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0sc4GjBo4HUbSXYlLuo-pA-p6E6kWcjDm5w&s",
    price: 1999.99,
    stock: 90,
    category: "Electronics"
  },
  {
    title: "Kids’ Educational Toy",
    description: "Interactive learning toy for kids aged 3-6.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-RcreIDrpfebZGjROp6mIbVrw31weysJXEQ&s",
    price: 899.0,
    stock: 120,
    category: "Books"
  },
  {
    title: "Men's Jeans",
    description: "Comfort fit denims with modern style.",
    image: "https://tigc.in/cdn/shop/files/0623-10121DNM-13_1_b0ce532e-a2f3-461c-85d5-3964bfcf1578.jpg?v=1753702186",
    price: 1299.0,
    stock: 110,
    category: "Clothing"
  },
  {
    title: "Hair Care Kit",
    description: "Complete nourishment kit for healthy hair.",
    image: "https://www.thriveco.in/cdn/shop/files/ThriveCoHairCareKitExfoliatingScalpScrubScalpVitalizingSerumHairGrowthSerumSerum.webp?v=1691728754",
    price: 549.99,
    stock: 75,
    category: "Beauty"
  },
  {
    title: "Smartphone with Dual Camera",
    description: "Latest smartphone featuring dual-lens camera.",
    image: "https://m.media-amazon.com/images/I/61eYPkT2zZL._UF1000,1000_QL80_.jpg",
    price: 25999.0,
    stock: 50,
    category: "Electronics"
  },
  {
    title: "Fitness Tracker Band",
    description: "Track your daily activities and health metrics.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGsaSYT65pNbgzd24ZDSo1hAJGiERjqhD4bA&s",
    price: 3499.99,
    stock: 85,
    category: "Sports"
  },
  {
    title: "Women’s Handbag",
    description: "Elegant leather handbag for daily use.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHlr5bGt58CGSKULpecKN6lY_6FqDV20dFZw&s",
    price: 3999.0,
    stock: 40,
    category: "Clothing"
  },
  {
    title: "Non-stick Frying Pan",
    description: "Durable non-stick frying pan for easy cooking.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7hWsdesmLBL1RmQp_LV4SzATM5ob14O4gvg&s",
    price: 1099.99,
    stock: 65,
    category: "Home"
  },
  {
    title: "Mystery Thriller Book",
    description: "Page-turner mystery thriller novel.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRYYavfKP_uL3gUeVydXHF6lZ8GBtmptBeUg&s",
    price: 299.99,
    stock: 130,
    category: "Books"
  },
  {
    title: "Sunscreen Lotion",
    description: "Protect your skin with SPF 50 sunscreen lotion.",
    image: "https://www.drsheths.com/cdn/shop/files/1_Website_b94bf3ba-3f6e-488f-aba9-4c0491de6fc2.jpg?v=1747650041",
    price: 399.99,
    stock: 90,
    category: "Beauty"
  }
];

module.exports = {
  users,
  products
};