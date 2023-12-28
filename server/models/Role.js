'use strict';

module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
        RoleID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        RoleName: DataTypes.STRING,
        Permissions: DataTypes.JSON
    }, {});

    Role.associate = function (models) {
        User.hasMany(models.User, { foreignKey: 'RoleID' });
    };

    return Role;
};