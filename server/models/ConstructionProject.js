'use strict';

module.exports = (sequelize, DataTypes) => {
    const ConstructionProject = sequelize.define('ConstructionProject', {
        ProjectID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: DataTypes.STRING,
        Location: DataTypes.STRING,
        StartDate: DataTypes.DATEONLY,
        EstimatedCompletion: DataTypes.DATEONLY,
        Budget: DataTypes.BIGINT,
        CurrentStatus: DataTypes.STRING
    }, {});

    return ConstructionProject;
};
