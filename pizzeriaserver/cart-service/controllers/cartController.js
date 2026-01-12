let {cartModel} = require('../models/cartModel.model');

let insertItem = (req,res)=>{
    let {itemType,pizzaId,ingredientId,name,image,price,quantity,totalPrice,customIngredients}=req.body;
    let insertObj = new cartModel({itemType,pizzaId,ingredientId,name,image,price,quantity,totalPrice,customIngredients});

    insertObj.save().then(()=>{
        res.send({
            status:1,
            msg:"Inserted into Cart"
        })
    }).catch((err)=>{
        res.send({
            status:0,
            msg:"Insertion failed! Shit man",
            err
        })
    })
}

let viewCart = async(req,res)=>{
    let viewRes = await cartModel.find();
    res.send({
        status:1,
        msg:"Cart items here",
        viewRes
    })
}

let deleteItem = async(req,res)=>{
    let deleteId = req.params.id;
    let deleteRes = await cartModel.deleteOne({_id:deleteId});
    res.send({
        status:1,
        msg:"Deleted item from cart",
        deleteRes
    })
}

let updateItem = async(req,res)=>{
    let updateId= req.params.id;
    let {itemType,pizzaId,ingredientId,name,image,price,quantity,totalPrice,customIngredients} = req.body;
    let updateObj = {itemType,pizzaId,ingredientId,name,image,price,quantity,totalPrice,customIngredients};

    let updateRes = await cartModel.updateOne({_id:updateId},updateObj);
    res.send({
        status:1,
        msg:"Cart item updated",
        updateRes
    })
}

module.exports = {insertItem,viewCart,deleteItem,updateItem};