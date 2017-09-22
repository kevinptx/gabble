'use strict';
module.exports = function(sequelize, DataTypes) {
  var posts = sequelize.define('posts', {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        posts.hasMany(models.users,{onDelete: 'CASCADE'});
      }
    }
  });
  return posts;
};
