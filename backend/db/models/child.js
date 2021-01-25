'use strict';
module.exports = (sequelize, DataTypes) => {
  const Children = sequelize.define('Children', {
    userId: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.NUMERIC
  }, {});
  Children.associate = function(models) {
    Child.belongsTo(models.User,{foreignKey:'userId'})
    Child.hasMany(models.Chore,{foreignKey:'childId'})
  };
  return Children;
};