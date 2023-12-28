'use strict';

module.exports = (sequelize, DataTypes) => {
    const MarketData = sequelize.define('MarketData', {
        MarketDataID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Date: DataTypes.DATEONLY,
        MarketIndex: DataTypes.STRING,
        Value: DataTypes.DECIMAL(10, 2)
    }, {});

    return MarketData;
};
