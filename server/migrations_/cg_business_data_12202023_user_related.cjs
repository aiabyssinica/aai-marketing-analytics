'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // User Management Tables

        // await queryInterface.createTable('roles', {
        //     // Role fields...
        //     id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        //     user_id: {
        //         type: Sequelize.UUID,
        //         references: {
        //             model: 'users',
        //             key: 'id'
        //         },
        //         onUpdate: 'CASCADE',
        //         onDelete: 'SET NULL'
        //     },
        //     org_id: {
        //         type: Sequelize.UUID,
        //         references: {
        //             model: 'organizations',
        //             key: 'id'
        //         },
        //         onUpdate: 'CASCADE',
        //         onDelete: 'SET NULL'
        //     },
        //     name: { type: Sequelize.STRING, allowNull: false },
        //     permissions: { type: Sequelize.JSON }
        // });
        // username, email, firebase_user_id, verify_key
        // await queryInterface.createTable('users', {
        //     // User fields...
        //     id: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV4 },
        //     username: { type: Sequelize.STRING, allowNull: false },
        //     email: { type: Sequelize.STRING, unique: true, allowNull: false },
        //     firebase_user_id: { type: Sequelize.STRING, allowNull: false },
        //     verify_key: { type: Sequelize.STRING, allowNull: false },
        //     is_email_verified: { type: Sequelize.STRING, allowNull: false, defaultValue: false },
        //     date_created: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
        //     last_login: { type: Sequelize.DATE }

        // });

        // await queryInterface.createTable('user_preferences', {
        //     // UserPreferences fields...
        //     id: {
        //         type: Sequelize.INTEGER,
        //         primaryKey: true,
        //         autoIncrement: true
        //     },
        //     user_id: {
        //         type: Sequelize.UUID,
        //         references: {
        //             model: 'users',
        //             key: 'id'
        //         },
        //         onUpdate: 'CASCADE',
        //         onDelete: 'SET NULL'
        //     },
        //     dashboard_layout: Sequelize.JSON,
        //     notification_settings: Sequelize.JSON
        // });
    },

    down: async (queryInterface, Sequelize) => {
        // Drop tables in reverse order of creation
        // await queryInterface.dropTable('user_preferences');
        // await queryInterface.dropTable('roles');
        // await queryInterface.dropTable('users');
        // Drop other tables as needed...
    }
};
