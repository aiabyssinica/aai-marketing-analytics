'use strict';

module.exports = (sequelize, DataTypes) => {
    const BusinessOpportunity = sequelize.define('BusinessOpportunity', {
        OpportunityID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Description: DataTypes.TEXT,
        Sector: DataTypes.STRING,
        EstimatedValue: DataTypes.BIGINT,
        Probability: DataTypes.DECIMAL(5, 2),
        Source: DataTypes.STRING
    }, {});

    return BusinessOpportunity;
};
