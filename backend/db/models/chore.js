'use strict';
module.exports = (sequelize, DataTypes) => {
  const Chore = sequelize.define('Chore', {
    description: DataTypes.STRING,
    frequency: DataTypes.STRING,
    childId: DataTypes.INTEGER
  }, {});
  Chore.associate = function(models) {
    Chore.belongsTo(models.Child,{foreignKey:'childId'})
  };
  return Chore;
};