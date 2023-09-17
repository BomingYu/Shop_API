const Model = require('../models');
const { Op } = require('sequelize');

const getAllProducts = (req,res) => {
    Model.Product.findAll({})
    .then(response => res.send({reslut:200 , data:response}))
    .catch(error => res.send({reslut:500 , error:error}))
}

const addNewProduct = (data,res) => {
    Model.Product.create(data)
    .then(response => res.send({reslut:200 , data:response.name+" has been added."}))
    .catch(error => res.send({reslut:500 , error:error}))
}

const searchByName = (req,res) => {
    const searchName = req.params.name;
    Model.Product.findAll({where:{name:{[Op.like]:`%${searchName}%`}}})
    .then(response => res.send({reslut:200 , data:response}))
    .catch(error => res.send({reslut:500 , error:error}))
}

const searchByCategory = (req,res) =>{
    const searchCate = req.params.category;
    Model.Product.findAll({where:{category:{[Op.like]:`%${searchCate}%`}}})
    .then(response => res.send({reslut:200 , data:response}))
    .catch(error => res.send({reslut:500 , error:error}))
}

const deleteProduct = (req,res) => {
    Model.Product.destroy({where:{id:req.params.id}})
    .then(response => res.send({reslut:200 , data:response}))
    .catch(error => res.send({reslut:500 , error:error}))
}

const updateProduct = (req,res) => {
    Model.Product.update(req.body , {where:{id:req.params.id}})
    .then(response => {res.send({reslut:200 , data:response})})
    .catch(error => res.send({reslut:500 , error:error}))
}

module.exports = {getAllProducts , addNewProduct , searchByName , searchByCategory , deleteProduct , updateProduct}