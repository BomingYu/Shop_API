const express = require('express')
const Controller = require('../controllers')
const router = express.Router();

router.get('/category/:category' , (req,res) => {
    Controller.productContoller.searchByCategory(req,res)
})

router.get("/:name" , (req,res) => {
    Controller.productContoller.searchByName(req,res)
})

router.get('/' , (req,res) => {
    Controller.productContoller.getAllProducts(req,res);
})

router.post('/add' , (req,res) => {
    Controller.productContoller.addNewProduct(req.body,res)
})

router.delete('/delete/:id' , (req,res) => {
    Controller.productContoller.deleteProduct(req,res);
})

router.put('/update/:id' , (req,res) => {
    Controller.productContoller.updateProduct(req,res);
})

module.exports = router