'use strict';
const bcrypt = require("bcrypt");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Hash the password asynchronously before inserting it into the database
    const hashedPassword = await bcrypt.hash('adarsh@009', 10);

    // Insert the user record into the database
    return queryInterface.bulkInsert('Users', [
      {
        name: 'adarsh s',
        email: 'adarshsuryavanshi3@gmail.com',
        username: 'adars',
        password: hashedPassword, // Insert the hashed password
        status: true,
        avatar: 'admin-avatar.png',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    // Delete all records from the Users table in the down migration
    await queryInterface.bulkDelete('Users', null, {});
  }
};
