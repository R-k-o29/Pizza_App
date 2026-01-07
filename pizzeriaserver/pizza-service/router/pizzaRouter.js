let express = require("express");
const {
  insertPizza,
  getPizzas,
} = require("../controllers/pizzasController");
let pizzaRouter = express.Router();

pizzaRouter.post("/insert", insertPizza);
pizzaRouter.get("/view", getPizzas);

module.exports = { pizzaRouter };
