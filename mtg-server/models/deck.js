'use strict';
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define('Deck', {
    deckname: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Deck.associate = function(models) {
    // associations can be defined here
  };
  return Deck;
};