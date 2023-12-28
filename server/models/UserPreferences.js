'use strict';

module.exports = (sequelize, DataTypes) => {
    const UserPreferences = sequelize.define('UserPreferences', {
        PreferenceID: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        UserID: {
            type: DataTypes.UUID,
            allowNull: false
        },
        DashboardLayout: DataTypes.JSON,
        NotificationSettings: DataTypes.JSON
    }, {});

    UserPreferences.associate = function (models) {
        UserPreferences.belongsTo(models.User, { foreignKey: 'UserID' });
    };

    return UserPreferences;
};
