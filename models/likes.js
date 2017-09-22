'use strict';
module.exports = function(sequelize, DataTypes) {
  var likes = sequelize.define('likes', {
    likeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    postId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        likes.hasMany(models.users,{onDelete: 'CASCADE'});
        likes.hasMany(models.posts,{onDelete: 'CASCADE'});

      }
    }
  });
  return likes;
};
