const Model = require('../models')

const getAllOrders = (req,res) => {
    Model.Order.findAll({})
    .then(response => res.send({reesult:200 , data:response}))
    .catch(error => res.send({result:500 , error:error}))
}

const addOrder = (data , res) => { 
    Model.Order.create(data)
    .then(response => res.send({reesult:200 , data:response}))
    .catch(error => res.send({result:500 , error:error}))
}

const getOrderByUser = (req,res) => {
    console.log(req.params.userid)
    Model.Order.findAll({where:{userid:req.params.userid}})
    .then(response => res.send({reesult:200 , data:response}))
    .catch(error => res.send({result:500 , error:error}))
}

const changeOrder = (req,res) => {
    Model.Order.update(req.body , {where:{id:req.params.id}})
    .then(response => res.send({reesult:200 , data:response}))
    .catch(error => res.send({result:500 , error:error}))
}

const cancelOrder = (req,res) => {
    Model.Order.destroy({where:{id:req.params.id}})
    .then(response => res.send({reesult:200 , data:response}))
    .catch(error => res.send({result:500 , error:error}))
}

module.exports = {getAllOrders , addOrder , getOrderByUser , changeOrder , cancelOrder}