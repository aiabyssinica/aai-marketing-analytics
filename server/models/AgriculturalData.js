'use strict';

module.exports = (sequelize, DataTypes) => {
    const AgriculturalData = sequelize.define('AgriculturalData', {
        AgriDataID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Date: DataTypes.DATEONLY,
        CropType: DataTypes.STRING,
        MarketPrice: DataTypes.DECIMAL(10, 2),
        ProductionVolume: DataTypes.BIGINT,
        ExportVolume: DataTypes.BIGINT
    }, {});

    return AgriculturalData;
};
