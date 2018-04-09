/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

`use strict`;

//Player
class Player {
  constructor(playerName, height, position, nationality, transferFee, currentClub) {
    this.playerName = playerName;
    this.height = height;
    this.position = position;
    this.nationalty = nationality;
    this.transferFee = transferFee;
    this.currentClub = currentClub || null;
  }
}

module.exports = Player;
