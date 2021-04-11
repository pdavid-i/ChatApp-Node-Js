'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [
      {
        firstName: "David",
        lastName: "Popescu",
        email: "david.popescu@gmail.com",
        password: bcrypt.hashSync('secret', 10),
        gender: "boss"
      },
      {
        firstName: "Dave ",
        lastName: "DaBrave",
        email: "davedabrave@gmail.com",
        password: "secret",
        gender: "boss"
      },
      {
        firstName: "Scarlet",
        lastName: "Johanson",
        email: "scarlet.johanson@gmail.com",
        password: "secret",
        gender: "female"
      }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
