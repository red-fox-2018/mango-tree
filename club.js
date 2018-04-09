class Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    this.name = name
    this.stadium = stadium
    this.location = location
    this.manager = manager
    this.budgetTransfer = budgetTransfer
    this.players = []
  }

  addPlayer(objPlayer) {
    objPlayer.currentClub = this.name
    this.players.push(objPlayer)
  }

  buyPlayer(objPlayer, objClub) {
    // console.log(objPlayer);
    if(objClub === null || objPlayer.currentClub === objClub.name) {
      // console.log('-masuk1-');
      if(this.budgetTransfer >= objPlayer.transferFee) {
        // console.log('--masuk2--');
        // console.log(objPlayer.playerName);
        this.budgetTransfer -= objPlayer.transferFee
        objPlayer.currentClub = this.name
        this.players.push(objPlayer)
        if(objClub !== null) {
          for(var i = 0; i < objClub.players.length; i++) {
            if(objPlayer.playerName === objClub.players[i].playerName) {
              objClub.players.splice(i, 1)
            }
          }
        }
        console.log(`You buy ${objPlayer.playerName} with transfer fee ${objPlayer.transferFee}, remaining budget: ${this.budgetTransfer}`)
      } else {
        console.log(`Budget nor sufficient to buy ${objPlayer.playerName}`)
      }
    } else {
      console.log(`There is no Player with name  ${objPlayer.playerName} in ${objClub.name}`);
    }
  }

}

module.exports = Club
