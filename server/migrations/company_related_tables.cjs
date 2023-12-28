'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.createTable('industry', {
            // Companies fields...
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            name: { type: Sequelize.STRING, allowNull: false },
            industry_code: { type: Sequelize.STRING, allowNull: false }
        });

        // // Company Profiles Tables
        // await queryInterface.createTable('companies', {
        //     // Companies fields...
        //     id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        //     name: { type: Sequelize.STRING, allowNull: false },
        //     industry_id: {
        //         type: Sequelize.INTEGER,
        //         allowNull: false,
        //         references: {
        //             model: 'industry',
        //             key: 'id'
        //         },
        //         onUpdate: 'CASCADE',
        //         onDelete: 'SET NULL'
        //     },
        //     headquarters: { type: Sequelize.STRING, allowNull: true },
        //     founded_year: { type: Sequelize.INTEGER, allowNull: true },
        //     revenue: { type: Sequelize.BIGINT, allowNull: true },
        //     employee_count: { type: Sequelize.INTEGER, allowNull: true }

        // });

        await queryInterface.createTable('financials', {
            // Financials fields...
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            company_id: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'companies',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            year: { type: Sequelize.INTEGER, allowNull: false },
            total_revenue: { type: Sequelize.BIGINT, allowNull: true },
            net_income: { type: Sequelize.BIGINT, allowNull: true },
            assets: { type: Sequelize.BIGINT, allowNull: true },
            liabilities: { type: Sequelize.BIGINT, allowNull: true },
            extra_metrics: { type: Sequelize.JSON, allowNull: true },

        });

        await queryInterface.createTable('company_news', {
            // CompanyNews fields...
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            company_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'companies',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            title: { type: Sequelize.STRING, allowNull: false },
            content: { type: Sequelize.TEXT, allowNull: false },
            publication_date: { type: Sequelize.DATE, allowNull: false },
            source: { type: Sequelize.STRING, allowNull: true }
        });

        // Market and Industry Analytics Tables
        await queryInterface.createTable('market_data', {
            // MarketData fields...
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            date: { type: Sequelize.DATEONLY, allowNull: false },
            market_index: { type: Sequelize.STRING, allowNull: false },
            value: { type: Sequelize.DECIMAL(10, 2), allowNull: false }
        });

        await queryInterface.createTable('industry_data', {
            // IndustryData fields...
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            industry_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'industry',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            date: { type: Sequelize.DATEONLY, allowNull: false },
            key_metric: { type: Sequelize.STRING, allowNull: false },
            value: { type: Sequelize.DECIMAL(10, 2), allowNull: false }

        });

        await queryInterface.createTable('sector_performance', {
            // SectorPerformance fields...
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            industry_data_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'industry_data',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            date: { type: Sequelize.DATEONLY, allowNull: false },
            performance_metric: { type: Sequelize.STRING, allowNull: false },
            value: { type: Sequelize.DECIMAL(10, 2), allowNull: false }

        });

        // Competitor Analysis Table
        await queryInterface.createTable('competitors', {
            // Competitors fields...
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            company_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'companies',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            competitor_company_id: {
                type: Sequelize.UUID,
                references: {
                    model: 'companies',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            marke_share: { type: Sequelize.DECIMAL(5, 2), allowNull: true },
            revenue_comparison: { type: Sequelize.DECIMAL(10, 2), allowNull: true }
        });

        // Agricultural Data Table
        await queryInterface.createTable('agricultural_data', {
            // AgriculturalData fields...
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            date: { type: Sequelize.DATEONLY, allowNull: false },
            crop_type: { type: Sequelize.STRING, allowNull: false },
            market_price: { type: Sequelize.DECIMAL(10, 2), allowNull: true },
            production_volume: { type: Sequelize.BIGINT, allowNull: true },
            export_volume: { type: Sequelize.BIGINT, allowNull: true }

        });

        // Construction Projects Table
        await queryInterface.createTable('construction_projects', {
            // ConstructionProjects fields...
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            name: { type: Sequelize.STRING, allowNull: false },
            location: { type: Sequelize.STRING, allowNull: false },
            start_date: { type: Sequelize.DATEONLY, allowNull: false },
            estimated_completion: { type: Sequelize.DATEONLY, allowNull: false },
            budget: { type: Sequelize.BIGINT, allowNull: true },
            current_status: { type: Sequelize.STRING, allowNull: false }

        });

        // Economic Indicators Table
        await queryInterface.createTable('economic_indicators', {
            // EconomicIndicators fields...
            indicator_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            name: { type: Sequelize.STRING, allowNull: false },
            country: { type: Sequelize.STRING, allowNull: false },
            date: { type: Sequelize.DATEONLY, allowNull: false },
            value: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
            historical_trend: { type: Sequelize.TEXT, allowNull: true }

        });

        // Trade and Import/Export Data Table
        await queryInterface.createTable('trade_data', {
            // TradeData fields...
            id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            country: { type: Sequelize.STRING, allowNull: false },
            year: { type: Sequelize.INTEGER, allowNull: false },
            total_imports: { type: Sequelize.BIGINT, allowNull: true },
            total_exports: { type: Sequelize.BIGINT, allowNull: true },
            major_partners: { type: Sequelize.STRING, allowNull: true }

        });

        // Business Development Tools Table
        await queryInterface.createTable('business_opportunities', {
            // BusinessOpportunities fields...
            opportunity_id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
            description: { type: Sequelize.TEXT, allowNull: false },
            sector: { type: Sequelize.STRING, allowNull: false },
            estimated_value: { type: Sequelize.BIGINT, allowNull: true },
            probability: { type: Sequelize.DECIMAL(5, 2), allowNull: true },
            source: { type: Sequelize.STRING, allowNull: true }

        });

        // // CRM Integration Table
        // await queryInterface.createTable('crm_contacts', {
        //     // CRM_Contacts fields...
        //     id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        //     company_id: {
        //         type: Sequelize.INTEGER,
        //         allowNull: false,
        //         references: {
        //             model: 'companies',
        //             key: 'id'
        //         },
        //         onUpdate: 'CASCADE',
        //         onDelete: 'SET NULL'
        //     },
        //     name: { type: Sequelize.STRING, allowNull: false },
        //     title: { type: Sequelize.STRING, allowNull: true },
        //     email: { type: Sequelize.STRING, allowNull: true },
        //     phone: { type: Sequelize.STRING, allowNull: true },
        //     source: { type: Sequelize.STRING, allowNull: true }

        // });

        // await queryInterface.createTable('CRM_Organizations', {
        //     // CRM_Contacts fields...
        // });
        // Add other tables as needed...

    },

    down: async (queryInterface, Sequelize) => {
        // Drop tables in reverse order of creation
        // await queryInterface.dropTable('crm_contacts');
        await queryInterface.dropTable('business_opportunities');
        await queryInterface.dropTable('trade_data');
        await queryInterface.dropTable('economic_indicators');
        await queryInterface.dropTable('construction_projects');
        await queryInterface.dropTable('AgriculturalData');
        await queryInterface.dropTable('competitors');
        await queryInterface.dropTable('sector_performance');
        await queryInterface.dropTable('industry_data');
        await queryInterface.dropTable('market_data');
        await queryInterface.dropTable('company_news');
        await queryInterface.dropTable('financials');
        // await queryInterface.dropTable('companies');
        await queryInterface.dropTable('industry');
        // Drop other tables as needed...
    }
};
