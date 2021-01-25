'use strict';
module.exports = (sequelize, DataTypes) => {
  const Class = sequelize.define('Class', {
    name: DataTypes.STRING,
    start_time: DataTypes.DATE,
    end_time: DataTypes.DATE,
    zoom_number: DataTypes.STRING,
    zoom_url: DataTypes.STRING
  }, {});
  Class.associate = function(models) {
    Class.belongsToMany(models.Child,{
      foreignKey:'classId',
      otherKey:'childId',
      through:"AllClass"
    })
  };
  return Class;
};