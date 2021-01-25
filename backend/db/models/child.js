'use strict';
module.exports = (sequelize, DataTypes) => {
  const Child = sequelize.define('Child', {
    userId: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.NUMERIC
  }, {});
  Child.associate = function(models) {
    Child.belongsTo(models.User,{foreignKey:'userId'})
    Child.hasMany(models.Chore,{foreignKey:'childId'})
    Child.belongsToMany(models.Class, {
       foreignKey: "childId",
       otherKey: "classId",
       through: "AllClass",
     });
  };
  return Child;
};