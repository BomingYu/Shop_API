"use strict"

const User = require('./user')
const Product = require('./product')
const Cart = require('./cart')
const Order = require('./order')
const OrderItem = require('./orderItem')

async function init() {
    await User.sync()
    await Product.sync()
    await Cart.sync()
    await Order.sync()
    await OrderItem.sync()
}

init();

module.exports = {User , Product , Cart , Order , OrderItem}