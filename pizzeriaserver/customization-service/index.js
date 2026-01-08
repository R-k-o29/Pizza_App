let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
const { ingredientRouter } = require('./router/ingredientRouter');
require('dotenv').config();

let app=express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to database");
    app.listen(process.env.PORT || '3003', ()=>{
        console.log("Server is running");
    })
}).catch((err)=>{
    console.log("Error connecting to database",err);
})

app.use('/api/ingredients',ingredientRouter);

//http://localhost:3003/api/ingredients/insert
//http://localhost:3003/api/ingredients/view
