const {DataTypes , Model} = require('sequelize')
const User = require('./user')
const Product = require('./product')
const dbConnect = require('../dbConnect');
const sequelizeInstance = dbConnect.Sequelize;

class Cart extends Model {};

Cart.init({
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
            model:'users',
            key:"id"
        }
    },
    productid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:'products',
            key:"id"
        }
    },
    quantity:{
        type:DataTypes.DECIMAL,
        allowNull:false,
        required:true
    },
    subtotal:{
        type:DataTypes.DECIMAL,
        allowNull:false
    }
},{
    sequelize:sequelizeInstance,
    timestamps:false,
    modelName:"carts",
    freezeTableName:true
})

Cart.belongsTo(User , {foreignKey:'userid'})
Cart.belongsTo(Product , {foreignKey:'productid'})

module.exports = Cart