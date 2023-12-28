'use strict';

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        UserID: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        Name: DataTypes.STRING,
        Email: {
            type: DataTypes.STRING,
            unique: true
        },
        PasswordHash: DataTypes.STRING,
        Role: DataTypes.STRING,
        DateCreated: DataTypes.DATE,
        LastLogin: DataTypes.DATE
    }, {});

    User.associate = function (models) {
        User.hasMany(models.UserPreferences, { foreignKey: 'UserID' });
        User.belongsTo(models.Role, { foreignKey: 'RoleID' });
    };

    return User;
};
