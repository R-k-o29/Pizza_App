let express = require("express");
const {
  insertPizza,
  getPizzas,
  getSinglePizza
} = require("../controllers/pizzasController");
let pizzaRouter = express.Router();

pizzaRouter.post("/insert", insertPizza);
pizzaRouter.get("/view", getPizzas);
pizzaRouter.get('/view/:id',getSinglePizza)

module.exports = { pizzaRouter };
