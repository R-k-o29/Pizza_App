let mongoose=require('mongoose');
let Schema= mongoose.Schema;

let ingredientSchema = new Schema({
    id:{
        type:String,
        unique:true,
        required:true
    },
    tname:{
        type:String,
        unique:true,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

ingredientModel = mongoose.model('ingredients',ingredientSchema);
module.exports={ingredientModel};
