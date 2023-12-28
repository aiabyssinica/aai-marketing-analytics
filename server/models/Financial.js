'use strict';

module.exports = (sequelize, DataTypes) => {
    const Financial = sequelize.define('Financial', {
        FinancialID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CompanyID: DataTypes.INTEGER,
        Year: DataTypes.INTEGER,
        TotalRevenue: DataTypes.BIGINT,
        NetIncome: DataTypes.BIGINT,
        Assets: DataTypes.BIGINT,
        Liabilities: DataTypes.BIGINT
    }, {});

    Financial.associate = function (models) {
        Financial.belongsTo(models.Company, { foreignKey: 'CompanyID' });
    };

    return Financial;
};
