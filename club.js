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
    if(objClub === null || objPlayer.currentClub === objClub.name) {
      if(this.budgetTransfer >= objPlayer.transferFee) {
        this.budgetTransfer -= objPlayer.transferFee
        objPlayer.currentClub = this.name
        this.players.push(objPlayer)
        if(objClub !== null) {
          var index = objClub.players.indexOf(objPlayer)
          objClub.players.splice(index, 1)
        }
        console.log(`You buy ${objPlayer.playerName} with transfer fee ${objPlayer.transferFee}, remaining budget: ${this.budgetTransfer}`)
      } else {
        var extraMoney = objPlayer.transferFee - this.budgetTransfer
        console.log(`Budget not sufficient to buy ${objPlayer.playerName}. Your club need extra money for ${extraMoney} to buy this player`)
      }
    } else {
      console.log(`There is no Player with name  ${objPlayer.playerName} in ${objClub.name}`);
    }
  }

}

module.exports = Club
