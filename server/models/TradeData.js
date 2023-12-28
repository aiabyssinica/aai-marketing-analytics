'use strict';

module.exports = (sequelize, DataTypes) => {
    const TradeData = sequelize.define('TradeData', {
        TradeDataID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Country: DataTypes.STRING,
        Year: DataTypes.INTEGER,
        TotalImports: DataTypes.BIGINT,
        TotalExports: DataTypes.BIGINT,
        MajorPartners: DataTypes.STRING
    }, {});

    return TradeData;
};
