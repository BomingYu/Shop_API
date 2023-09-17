const express = require('express');
const router = express.Router();
const Controller = require('../controllers')

router.get('/' , (req,res) => {
    Controller.ordetItemController.getAllOrderItems(req,res)
})

router.post('/createBill' , (req,res) => {
    Controller.ordetItemController.createBill(req,res);
})

module.exports=router;