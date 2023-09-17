const Model = require("../models");

const getAllCart = (req, res) => {
  Model.Cart.findAll({})
    .then((response) => res.send({ result: 200, data: response }))
    .catch((error) => res.send({ result: 500, error: error }));
};

const addToCart = (data, res) => {

  const { productid, quantity } = data;
  Model.Product.findByPk(productid)
  .then(product => {
    if(!product){
      return res.send({result:404 , error:'Product not found'})
    }
    if(product.stock < quantity){
      return res.send({result:400 , error:'No enough stock'})
    }
    return Model.Cart.create(data)
    .then((response) => res.send({result:200 , data:response}))
    .catch(error => res.send({result:500 , error:error}))
  })
  .catch(error => res.send({result:500 , error:error}))
};

const updateCart =(req,res) => {
  const { productid, quantity } = req.body;

  Model.Product.findByPk(productid)
  .then(product => {
    if(!product){
      return res.send({result:404 , error:'Product not found'})
    }
    if(product.stock < quantity){
      return res.send({result:400 , error:'No enough stock'})
    }
    return Model.Cart.update(req.body , {where:{id:req.params.id}})
    .then((response) => res.send({ result: 200, data: response }))
    .catch((error) => res.send({ result: 500, error: error }));
  })
}

const findCartByUser = (req,res) => {
    Model.Cart.findAll({where:{userid:req.params.userid}})
    .then((response) => res.send({ result: 200, data: response }))
    .catch((error) => res.send({ result: 500, error: error }));
}

const deleteCart = (req,res) => {
    Model.Cart.destroy({where:{id:req.params.id}})
    .then((response) => res.send({ result: 200, data: response }))
    .catch((error) => res.send({ result: 500, error: error }));
}

module.exports = { getAllCart, addToCart , updateCart , findCartByUser , deleteCart};
