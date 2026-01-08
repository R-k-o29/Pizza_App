let express = require('express');
const { insertIngredient, viewIngredient } = require('../controllers/ingredientController');
let ingredientRouter = express.Router();

ingredientRouter.post('/insert',insertIngredient);
ingredientRouter.get('/view',viewIngredient);

module.exports={ingredientRouter};