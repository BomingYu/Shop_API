const { DataTypes , Model } =require('sequelize');
const dbConnect = require('../dbConnect');
const User = require('./user');
const sequelizeInstance = dbConnect.Sequelize;

class Order extends Model {}

Order.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    userid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"users",
            key:"id"
        }
    },
    total:{
        type:DataTypes.DECIMAL,
        allowNull:false,
    },
    delivery:{
        type:DataTypes.BOOLEAN,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        // allowNull:function () {
        //     return this.delivery.BOOLEAN ? false : true;
        //   }
    },
    paymentMethod:{
        type:DataTypes.STRING,
        allowNull:false
    },
    paymentStatus:{
        type:DataTypes.STRING,
        allowNull:false
    }
},{
    sequelize:sequelizeInstance,
    modelName:"orders",
    timestamps:true,
    freezeTableName:true
})

Order.belongsTo(User , {foreignKey:"userid"});

module.exports = Order;