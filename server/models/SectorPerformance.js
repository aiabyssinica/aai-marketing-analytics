'use strict';

module.exports = (sequelize, DataTypes) => {
    const SectorPerformance = sequelize.define('SectorPerformance', {
        PerformanceID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        IndustryDataID: DataTypes.INTEGER,
        Date: DataTypes.DATEONLY,
        PerformanceMetric: DataTypes.STRING,
        Value: DataTypes.DECIMAL(10, 2)
    }, {});

    SectorPerformance.associate = function (models) {
        SectorPerformance.belongsTo(models.IndustryData, { foreignKey: 'IndustryDataID' });
    };

    return SectorPerformance;
};
