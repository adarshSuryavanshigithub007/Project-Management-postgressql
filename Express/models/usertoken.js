'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const UserToken = sequelize.define(
    "UserToken",
    {
      user_token_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "users",
          key: "user_id",
        },
      },
      token: {
        type: DataTypes.STRING(250),
        allowNull: true,
      },
      expire_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
  },{
    tableName: 'UserTokens',
    timestamps: true,
    createdAt: 'created_at', // Maps Sequelize's createdAt to created_at
    updatedAt: 'updated_at', // Maps Sequelize's updatedAt to updated_at
    deletedAt: 'delete_at', // Maps Sequelize's deletedAt to delete_at
    paranoid: true, // Enables soft delete
      underscored: true, // This will create columns like `created_at` and `updated_at`
  })
  // class UserToken extends Model {
  //   /**
  //    * Helper method for defining associations.
  //    * This method is not a part of Sequelize lifecycle.
  //    * The `models/index` file will call this method automatically.
  //    */
  //   static associate(models) {
  //     // define association here
  //   }
  // }
  // UserToken.init({
  //   user_token_id: DataTypes.STRING,
  //   user_id: DataTypes.STRING,
  //   token: DataTypes.TEXT,
  //   expire_at: DataTypes.DATE
  // }, {
  //   sequelize,
  //   modelName: 'UserToken',
  // });
  return UserToken;
};