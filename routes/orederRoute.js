const express = require('express')
const router = express.Router();
const Controller = require('../controllers')

router.get('/' , (req,res) => {
    Controller.orderController.getAllOrders(req,res)
})

router.get('/:userid' , (req,res) => {
    Controller.orderController.getOrderByUser(req,res);
})

// router.post('/placeOrder' , (req,res) => {
//     Controller.orderController.addOrder(req.body , res)
// })

router.put('/:id' , (req,res) => {
    Controller.orderController.changeOrder(req,res)
})

router.delete('/:id' , (req,res) =>{
    Controller.orderController.cancelOrder(req,res);
})

module.exports = router;