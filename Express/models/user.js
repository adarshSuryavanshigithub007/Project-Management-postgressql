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
    },
    {
      timestamps: true,
      createdAt: 'created_at', // Maps Sequelize's createdAt to created_at
      updatedAt: 'updated_at', // Maps Sequelize's updatedAt to updated_at
      deletedAt: 'delete_at', // Maps Sequelize's deletedAt to delete_at
      paranoid: true, // Enables soft delete
      tableName: 'Users', // Explicitly specify table name
    }
  );

  return User;
};
