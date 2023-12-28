// /** @type {import('sequelize-cli').Migration} */

// 'use strict';

// module.exports = {
//   up: async (queryInterface, Sequelize) => {
//     // Creating the uuid-ossp extension
//     await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');

//     // Creating the users table
//     await queryInterface.sequelize.query(`
//       CREATE TABLE users (
//         id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
//         username VARCHAR(255),
//         email VARCHAR(255) UNIQUE,
//         firebase_user_id VARCHAR(255),
//         verify_key VARCHAR(255),
//         is_email_verified BOOLEAN DEFAULT FALSE
//       );
//     `);

//     // Creating the contacts table
//     await queryInterface.sequelize.query(`
//       CREATE TABLE contacts (
//         id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
//         first_name VARCHAR(255),
//         last_name VARCHAR(255),
//         middle_name VARCHAR(255),
//         email VARCHAR(255),
//         phone VARCHAR(255),
//         mobile VARCHAR(255),
//         socials JSON
//       );
//     `);

//     // Creating the industry table
//     await queryInterface.sequelize.query(`
//       CREATE TABLE industry (
//         id INTEGER PRIMARY KEY,
//         "name" VARCHAR(255)
//       );
//     `);

//     // Creating the organizations table
//     await queryInterface.sequelize.query(`
//       CREATE TABLE CRM_Organizations (
//         id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
//         org_name VARCHAR(255),
//         primary_email VARCHAR(255),
//         industry_id INTEGER,
//         FOREIGN KEY (industry_id) REFERENCES industry (id) ON DELETE CASCADE,
//         category VARCHAR(255),
//         organization_type VARCHAR(255), -- plc, corp, ngo, sole-proprietership
//         address VARCHAR(255),
//         city VARCHAR(255),
//         state VARCHAR(255),
//         country VARCHAR(255),
//         phone_number VARCHAR(255),
//         mobile_number VARCHAR(255),
//         mobile_number_2 VARCHAR(255),
//         mobile_number_3 VARCHAR(255),
//         mobile_number_4 VARCHAR(255),
//         website VARCHAR(255)
//       );
//     `);

//     // Creating the roles table
//     await queryInterface.sequelize.query(`
//       CREATE TABLE roles (
//         id SERIAL PRIMARY KEY,
//         org_id UUID REFERENCES organizations(id),
//         user_id UUID REFERENCES users(id),
//         role VARCHAR(255)
//       );
//     `);

//     // Creating the todos table
//     await queryInterface.sequelize.query(`
//       CREATE TABLE todos (
//         id SERIAL PRIMARY KEY,
//         title VARCHAR(255),
//         description VARCHAR(1000),
//         author VARCHAR(255),
//         org_id UUID REFERENCES organizations(id)
//       );
//     `);

//     // Creating the invites table
//     await queryInterface.sequelize.query(`
//       CREATE TABLE invites (
//         id SERIAL PRIMARY KEY,
//         org_id UUID REFERENCES organizations(id),
//         verify_key VARCHAR(255),
//         recipient_email VARCHAR(255),
//         sender_email VARCHAR (255)
//       );
//     `);
//   },

//   down: async (queryInterface, Sequelize) => {
//     // Dropping tables in reverse order of creation
//     await queryInterface.sequelize.query('DROP TABLE IF EXISTS invites');
//     await queryInterface.sequelize.query('DROP TABLE IF EXISTS todos');
//     await queryInterface.sequelize.query('DROP TABLE IF EXISTS organizations');
//     await queryInterface.sequelize.query('DROP TABLE IF EXISTS industry');
//     await queryInterface.sequelize.query('DROP TABLE IF EXISTS roles');
//     await queryInterface.sequelize.query('DROP TABLE IF EXISTS contacts');
//     await queryInterface.sequelize.query('DROP TABLE IF EXISTS users');

//     // Optionally drop the uuid-ossp extension
//     // await queryInterface.sequelize.query('DROP EXTENSION IF EXISTS "uuid-ossp";');
//   }
// };
