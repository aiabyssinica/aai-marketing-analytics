'use strict';

module.exports = (sequelize, DataTypes) => {
    const CompanyNews = sequelize.define('CompanyNews', {
        NewsID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        CompanyID: DataTypes.INTEGER,
        Title: DataTypes.STRING,
        Content: DataTypes.TEXT,
        PublicationDate: DataTypes.DATE,
        Source: DataTypes.STRING
    }, {});

    CompanyNews.associate = function (models) {
        CompanyNews.belongsTo(models.Company, { foreignKey: 'CompanyID' });
    };

    return CompanyNews;
};
