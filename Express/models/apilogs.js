'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const ApiLogs = sequelize.define(
    'ApiLogs',{
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    api_name : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    api_request: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status : {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ip_address:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    response: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    message : {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },{
    tableName: 'ApiLogs',
    timestamps: true,
    createdAt: 'created_at', // Maps Sequelize's createdAt to created_at
    updatedAt: 'updated_at', // Maps Sequelize's updatedAt to updated_at
    deletedAt: 'delete_at', // Maps Sequelize's deletedAt to delete_at
    paranoid: true, // Enables soft delete
    underscored: true,
  })


  // class apilogs extends Model {
  //   /**
  //    * Helper method for defining associations.
  //    * This method is not a part of Sequelize lifecycle.
  //    * The `models/index` file will call this method automatically.
  //    */
  //   static associate(models) {
  //     // define association here
  //   }
  // }
  // apilogs.init({
  //   user_id: DataTypes.STRING,
  //   api_name: DataTypes.STRING,
  //   api_request: DataTypes.TEXT,
  //   status: DataTypes.BOOLEAN,
  //   ip_address: DataTypes.STRING,
  //   message: DataTypes.TEXT,
  //   response: DataTypes.TEXT,
  //   timestamp: DataTypes.DATE
  // }, {
  //   sequelize,
  //   modelName: 'apilogs',
  // });
  return ApiLogs;
};