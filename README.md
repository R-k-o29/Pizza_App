🍕 Pizzeria App (MERN – Microservices)
A full‑stack Pizzeria web application built using React, Node.js, Express, and MongoDB following a microservices architecture.
Users can browse pizzas, customize them with ingredients, manage a shopping cart, and optionally log in or continue as a guest.

📌 Features
👤 Authentication
User Signup
User Login
Continue as Guest (no login required)
Logout
Auth state stored using localStorage

🍕 Pizza
View all pizzas
View pizza details
Build your own pizza with custom ingredients

🧀 Ingredients
Fetch all ingredients
Add/remove ingredients while building pizza
Dynamic price calculation

🛒 Cart
Add pizza with custom ingredients to cart
Update quantity
View cart items
Delete cart items
Cart access protected for logged‑in users only

🔐 Authorization Rules
Guest users can browse pizzas
Add to Cart → Login required
Cart & checkout protected

🗄️ Database Structure
Database Name: PIZZARIADB

📁 Collections
pizzas
ingredients
shoppingcart
users

📊 Schemas Overview
🧾 Pizza Schema
{
  name,
  type,        // veg / nonveg
  price,
  image,
  description,
  ingredients,
  toppings
}

🧀 Ingredient Schema
{
  tname,
  price,
  image
}

🛒 Cart Schema
{
  itemType,            // pizza
  pizzaId,
  name,
  image,
  price,
  quantity,
  totalPrice,
  customIngredients
}

👤 User Schema
{
  name,
  email,
  password
}

⚙️ Tech Stack
Frontend
React
React Router
Axios
Bootstrap
React Toastify

Backend
Node.js
Express.js
MongoDB
Mongoose

🔐 Authentication Flow
Login stores user data in localStorage
Header updates UI based on auth state
Protected actions (Add to Cart) check login status
Guest users redirected to login when required

🧠 Key Concepts Used
Microservices architecture
REST APIs
State management with React Hook
Controlled components
Route protection
Conditional rendering
LocalStorage‑based auth

🧪 Testing Scenarios
Add pizza as guest → redirected to login
Add ingredients → total price updates dynamically
Logout → cart access restricted
Page refresh → login persists

🧑‍💻 Author
Rohit Kumar
Pizzeria App – MERN Stack Project
