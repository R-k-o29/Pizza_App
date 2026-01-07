let { pizzaRouter } = require("./router/pizzaRouter");

let express = require("express");
let cors = require("cors");
let mongoose = require("mongoose");
require("dotenv").config();

let app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("Connected to database");
    app.listen(process.env.PORT || "3000", () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

app.use("/api/pizza", pizzaRouter);

//http://localhost:3002/api/pizza/insert
//http://localhost:3002/api/pizza/view
