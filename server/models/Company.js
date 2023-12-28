'use strict';

module.exports = (sequelize, DataTypes) => {
    const Company = sequelize.define('Company', {
        CompanyID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Name: DataTypes.STRING,
        Industry: DataTypes.STRING,
        Headquarters: DataTypes.STRING,
        FoundedYear: DataTypes.INTEGER,
        Revenue: DataTypes.BIGINT,
        EmployeeCount: DataTypes.INTEGER
    }, {});

    Company.associate = function (models) {
        Company.hasMany(models.Financial, { foreignKey: 'CompanyID' });
        Company.hasMany(models.CompanyNews, { foreignKey: 'CompanyID' });
        Company.hasMany(models.Competitors, { foreignKey: 'CompanyID' });
    };

    return Company;
};
