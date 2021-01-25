'use strict';
module.exports = (sequelize, DataTypes) => {
  const AllClass = sequelize.define('AllClass', {
    childId: DataTypes.INTEGER,
    classId: DataTypes.INTEGER
  }, {});
  AllClass.associate = function(models) {
    // associations can be defined here
  };
  return AllClass;
};