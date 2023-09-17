const express = require('express');
const router = express.Router();
const Controller = require('../controllers');

router.get('/:userid' , (req , res) => {
    Controller.cartController.findCartByUser(req,res)
})

router.get('/' , (req,res) => {
    Controller.cartController.getAllCart(req,res)
})

router.post('/addToCart' , (req,res) => {
    Controller.cartController.addToCart(req.body , res);
})

router.put('/update/:id' , (req,res) => {
    Controller.cartController.updateCart(req,res)
})

router.delete('/:id' , (req,res) =>{
    Controller.cartController.deleteCart(req,res)
})

module.exports = router;