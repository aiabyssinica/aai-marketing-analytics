'use strict';

module.exports = (sequelize, DataTypes) => {
    const Competitor = sequelize.define('Competitor', {
        CompetitorID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CompanyID: DataTypes.INTEGER,
        CompetitorCompanyID: DataTypes.INTEGER,
        MarketShare: DataTypes.DECIMAL(5, 2),
        RevenueComparison: DataTypes.DECIMAL(10, 2)
    }, {});

    Competitor.associate = function (models) {
        Competitor.belongsTo(models.Company, { foreignKey: 'CompanyID' });
    };

    return Competitor;
};
