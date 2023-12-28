'use strict';

module.exports = (sequelize, DataTypes) => {
    const IndustryData = sequelize.define('IndustryData', {
        IndustryDataID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Industry: DataTypes.STRING,
        Date: DataTypes.DATEONLY,
        KeyMetric: DataTypes.STRING,
        Value: DataTypes.DECIMAL(10, 2)
    }, {});

    return IndustryData;
};
