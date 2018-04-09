class Player {
  constructor(name, height, position, nationality, transferFee, currentClub){
  this.playerName = name,
  this.height = height,
  this.position = position,
  this.nationality = nationality,
  this.transferFee = transferFee,
  this.currentClub = null
  }
}

// let player = new Player('Dian', 180, 5, 'Indonesia', 48938)
// console.log(player);

module.exports = Player;
