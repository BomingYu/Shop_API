const Model = require('../models')

const getAllUsers = (req,res) => {
    Model.User.findAll({})
    .then(response => res.send({result:200 , data:response}))
    .catch(error => res.send({result:500 , error:error}))
}

const signUpUser = (data , res) => {
    Model.User.create(data)
    .then(response => res.send({result:200 , data:response.firstName + " signup successfully with " + response.email}))
    .catch(error => res.send({result:500 , error:error.errors[0].message}))
}

const loginUser = (req , res) => {
    const email = req.body.email;
    const password = req.body.password
    //console.log(email + '&&' + password)
    Model.User.findOne({where:{email:email}})
    .then(response => {
        if(response){
            if(response.password == password){
                res.send({result:200 , data:`Welcome ${response.firstName}`})
            }
            else{
                res.send({result:401 , data:`The password is incorrect`})
            }
        }
        else{
            res.send({result:404 , data:`The user with email ${email} is not found`})
        }
        
    })
    .catch(error => res.send({result:500 , error:error}))
}

module.exports = {getAllUsers , signUpUser , loginUser};