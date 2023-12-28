'use strict';

module.exports = (sequelize, DataTypes) => {
    const EconomicIndicator = sequelize.define('EconomicIndicator', {
        IndicatorID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: DataTypes.STRING,
        Country: DataTypes.STRING,
        Date: DataTypes.DATEONLY,
        Value: DataTypes.DECIMAL(10, 2),
        HistoricalTrend: DataTypes.TEXT
    }, {});

    return EconomicIndicator;
};
