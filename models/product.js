const {DataTypes , Model} = require('sequelize')
const dbConnect = require('../dbConnect');
const sequelizeInstance = dbConnect.Sequelize;

class Product extends Model {}

Product.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,    
        required:true,
    },
    category:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true
    },
    price:{
        type:DataTypes.DECIMAL,
        allowNull:false,
        required:true
    },
    unit:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true
    },
    stock:{
        type:DataTypes.DECIMAL,
        required:true,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT
    }
},{
    sequelize:sequelizeInstance,
    modelName:"products",
    timestamps:true,
    freezeTableName:true
})

module.exports = Product;