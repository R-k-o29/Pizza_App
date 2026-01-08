let {ingredientModel} = require('../models/ingredientModel.model');

let insertIngredient = (req,res)=>{
    let {id,tname,price,image}=req.body;
    let insertObj = new ingredientModel({id,tname,price,image});
    insertObj.save().then(()=>{
        res.send({
            status:1,
            msg:"Ingredient added",
            insertObj
        })
    }).catch((err)=>{
        res.send({
            status:0,
            msg:"Insertion failed",
            err
        })
    })
}

let viewIngredient = async(req,res)=>{
    let viewObj = await ingredientModel.find();
    res.send({
        status:1,
            msg:"List of the ingredients",
            viewObj
    })
}

module.exports = {insertIngredient,viewIngredient};