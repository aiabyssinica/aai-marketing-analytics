'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // User Management Tables
        await queryInterface.createTable('industry', {
            // Companies fields...
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            name: { type: Sequelize.STRING, allowNull: false },
            industry_code: { type: Sequelize.STRING, allowNull: false }
        });
        await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
        await queryInterface.sequelize.query(
            `CREATE TABLE users (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                username VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE,
                firebase_user_id VARCHAR(255),
                verify_key VARCHAR(255),
                is_email_verified BOOLEAN DEFAULT FALSE,
                date_created TIMESTAMP NOT NULL DEFAULT NOW()
          );
        `
        );

        await queryInterface.sequelize.query(
            `CREATE TABLE companies (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                name VARCHAR(255),
                general_email VARCHAR(255) REFERENCES users(email) ON UPDATE CASCADE,
                industry_id INTEGER REFERENCES industry(id),
                category VARCHAR(255),
                company_type VARCHAR(255), -- plc, corp, ngo, sole-proprietership
                headquarters VARCHAR(255),
                founded_year VARCHAR(255),
                revenue BIGINT,
                employee_count INT,
                address VARCHAR(255),
                city VARCHAR(255),
                state VARCHAR(255),
                country VARCHAR(255),
                phone_number VARCHAR(255),
                phone_number_2 VARCHAR(255),
                mobile_number VARCHAR(255),
                mobile_number_2 VARCHAR(255),
                mobile_number_3 VARCHAR(255),
                mobile_number_4 VARCHAR(255),
                website VARCHAR(255)
              );`
        );
        await queryInterface.sequelize.query(`
        CREATE TABLE roles (
            id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            user_id UUID REFERENCES users(id),
            org_id UUID REFERENCES companies(id),
            name VARCHAR(255),
            permissions JSON
        );
    `);
        await queryInterface.sequelize.query(
            `CREATE TABLE company_subscriptions (
                    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                    company_id UUID REFERENCES companies(id) UNIQUE,
                    stripe_customer_id VARCHAR(255),
                    subscription_id VARCHAR(255),
                    plan_type VARCHAR(255)
                  );`
        );

        await queryInterface.sequelize.query(
            `CREATE TABLE contacts (
                id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                contact_type VARCHAR(255) CHECK (contact_type IN ('individual', 'company')),
                company_id UUID REFERENCES companies(id),
                name VARCHAR(255), -- For individuals, this is the person's name; for companies, it could be the department or null
                title VARCHAR(255), -- Relevant for individuals
                email VARCHAR(255),
                phone_number VARCHAR(255),
                address VARCHAR(255),
                city VARCHAR(255),
                state VARCHAR(255),
                country VARCHAR(255),
                source VARCHAR(255)
          );
          --COMMENT on COLUMN contacts.name is 'For individuals, this is the person's name; for companies, it could be the department or null';
          --COMMENT on COLUMN contacts.contact_type is 'contact is either individual or company';
          `
        );

        await queryInterface.sequelize.query(
            `CREATE TABLE todos (
                id SERIAL PRIMARY KEY,
                title VARCHAR(255),
                description VARCHAR(1000),
                author VARCHAR(255),
                org_id UUID REFERENCES companies(id)
              );
          `
        );
    },

    down: async (queryInterface, Sequelize) => {
        // Drop tables in reverse order of creation
        await queryInterface.sequelize.query('DROP TABLE IF EXISTS todos;');
        await queryInterface.sequelize.query('DROP TABLE IF EXISTS contacts;');
        await queryInterface.sequelize.query('DROP TABLE IF EXISTS company_subscriptions;');
        await queryInterface.sequelize.query('DROP TABLE IF EXISTS roles;');
        await queryInterface.sequelize.query('DROP TABLE IF EXISTS companies;');
        await queryInterface.sequelize.query('DROP TABLE IF EXISTS users;');
        await queryInterface.sequelize.query('DROP TABLE IF EXISTS industry;');

        // Drop other tables as needed...
    }
};
