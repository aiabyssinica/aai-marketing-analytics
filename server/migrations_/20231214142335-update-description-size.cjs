// 'use strict';

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {

//     await queryInterface.sequelize.query(`
//       ALTER TABLE organizations ALTER COLUMN description TYPE VARCHAR(1000000);
//     `);
//     /**
//      * Add altering commands here.
//      *
//      * Example:
//      * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
//      */
//   },

//   async down(queryInterface, Sequelize) {
//     /**
//      * Add reverting commands here.
//      *
//      * Example:
//      * await queryInterface.dropTable('users');
//      */
//     await queryInterface.sequelize.query(`
//       ALTER TABLE organizations ALTER COLUMN description TYPE VARCHAR(5000);
//     `);
//   }
// };