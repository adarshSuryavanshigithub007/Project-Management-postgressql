'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      fullname:{
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      avatar: {
        type: DataTypes.STRING(100),
        allowNull: true,
        defaultValue: 'avatar.png',
      },
      mobile_number: {
        type: DataTypes.STRING(15), // Adjust length as needed
        allowNull: true,
      },
      role: {
        type: DataTypes.TEXT, // Use TEXT to allow long descriptions
        allowNull: true,
      },
      designation : {
        type: DataTypes.TEXT, // Use TEXT to allow long descriptions
        allowNull: true,
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false, // Ensuring default is non-admin
      },
      
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      deletedAt: 'delete_at',
      paranoid: true,
      tableName: 'Users',
    }
  );

  return User;
};
