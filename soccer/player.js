/*jshint esversion:6*/

class Player{
  constructor(playerName,height,position,nationality,transferFee){
    this.name = playerName;
    this.height = height;
    this.position = position;
    this.nationality = nationality;
    this.transferFee = transferFee;
    this.currentClub = null;
  }

}


module.exports = Player;
