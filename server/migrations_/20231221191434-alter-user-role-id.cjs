'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // User Management Tables

        //     await queryInterface.sequelize.query(
        //         'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
        //     );

        //     await queryInterface.sequelize.query(`
        //     ALTER TABLE roles 
        //         ALTER COLUMN id SET DEFAULT uuid_generate_v4();
        //         ADD COLUMN company_id UUID REFERENCES companies(id)
        //     `
        //     );

    },

    down: async (queryInterface, Sequelize) => {
        // Drop tables in reverse order of creation

        // Drop other tables as needed...
    }
};
