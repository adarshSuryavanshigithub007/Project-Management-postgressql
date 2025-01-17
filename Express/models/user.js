'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      email: {
        type:DataTypes.STRING(100),
        allowNull: false,
      },
      username:{
        type: DataTypes.STRING(100),
        allowNull: false
      },
      password:{
        type: DataTypes.STRING(100),
        allowNull: false
      },
      status:{
        type:DataTypes.BOOLEAN,
        defaultValue: true
      },
      avatar:{
        type: DataTypes.STRING(100),
        allowNull:true,
        defaultValue:"avatar.png"
      },
      created_at:{
        type:DataTypes.DATE,
        allowNull:true
      },
      updated_at:{
        type:DataTypes.DATE,
        allowNull:true
      },
      delete_at:{
        type:DataTypes.DATE,
        allowNull:true
      }
    },
    {
      timestamp:true
    }
  )
  return User
};