const Model = require('../models')

const  getAllOrderItems = (req,res) => {
    Model.OrderItem.findAll({})
    .then(response => res.send({result:200 , data:response}))
    .catch(error => res.send({result:500 , error:error}))
}

const createBill = (req, res) => {
    const requestData = req.body;

    Model.Order.create({
        userid: requestData.userid,
        total: requestData.total,
        delivery: requestData.delivery,
        address: requestData.address,
        paymentMethod: requestData.paymentMethod,
        paymentStatus: requestData.paymentStatus
    })
    .then((order) => {
        requestData.orderItems.map(item => {
            Model.OrderItem.create({
                orderid : order.id,
                cartid: item.cartid,
                quantity:item.quantity
            })
        })
        res.send({result:200 , data:'The bill has been created'})
    })
    .catch(error => res.send(error));
}


module.exports = {getAllOrderItems , createBill}