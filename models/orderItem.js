const {DataTypes , Model} = require('sequelize')
const dbConnect = require('../dbConnect');
const Order = require('./order');
const Cart = require('./cart');
const sequelizeInstance = dbConnect.Sequelize;

class OrderItem extends Model {}

OrderItem.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        require:true,
        primaryKey:true
    },
    orderid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"orders",
            key:"id"
        }
    },
    cartid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"carts",
            key:"id"
        }
    },
    quantity:{
        type:DataTypes.DECIMAL,
        allowNull:false
    }
},{
    sequelize:sequelizeInstance,
    timestamps:true,
    modelName:"orderItems",
    freezeTableName:true
})

OrderItem.belongsTo(Order , {foreignKey:"orderid"});
OrderItem.belongsTo(Cart , {foreignKey:"cartid"});

module.exports = OrderItem