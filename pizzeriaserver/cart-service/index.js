let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
const { cartRouter } = require('./router/cartRouter');
require('dotenv').config();

let app=express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("Connected to database");
    app.listen(process.env.PORT,()=>{
        console.log("Server is running");
    })
}).catch((err)=>{
    console.log("Error connecting to database",err);
})

app.use('/api/cart',cartRouter);
//http://localhost:3004/api/cart/insert

