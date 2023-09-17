require("dotenv").config();
const express = require('express');
const app = express();
let dbConnect = require('./dbConnect')
const userRoute = require('./routes/userRoute');
const productRoute = require('./routes/productRoute')
const cartRoute = require('./routes/cartRoute')
const orderRoute = require('./routes/orederRoute')
const orderItemRoute = require('./routes/orderItemRoute')
const PORT = 8080;

app.use(express.json());

app.get('/' , (req,res) => {
    res.send('miniproject connected')
})

app.use('/users' , userRoute);

app.use('/products' , productRoute);

app.use('/carts' , cartRoute);

app.use('/orders' , orderRoute);

app.use('/orderItems' , orderItemRoute);

app.listen(PORT , () => {
    console.log('The server is running on ' +PORT)
})