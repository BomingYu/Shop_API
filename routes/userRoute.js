const express = require('express');
const router = express.Router();
const Controller = require('../controllers')

router.get('/' , (req,res) => {
    Controller.userController.getAllUsers(req,res)
})

router.post('/signUp' , (req,res) => {
    Controller.userController.signUpUser(req.body,res)
})

router.post('/login' , (req , res) => {
    Controller.userController.loginUser(req,res)
})

module.exports = router