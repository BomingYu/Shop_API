const { DataTypes , Model } = require('sequelize')
const dbConnect = require('../dbConnect')
const sequelizeInstance = dbConnect.Sequelize;

class User extends Model {}

User.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true
    },
    email: {
        type:DataTypes.STRING,
        unique:true,
        allowNull:false,
        require:true
    },
    password:{
        type:DataTypes.STRING,
        required:true,
        allowNull:false
    }
},{
    sequelize:sequelizeInstance,
    modelName:"users",
    timestamps:false,
    freezeTableName:true
})

module.exports = User;