class Club {
  constructor(name, stadium, location, manager, budgetTransfer, players){
    this.name = name,
    this.stadium = stadium,
    this.location = location,
    this.manager = manager,
    this.budgetTransfer = budgetTransfer,
    this.players = []
  }

  addPlayer(newPlayer){
    newPlayer.currentClub = this.name
    this.players.push(newPlayer)
  }

  buyPlayer(objPlayer, objClub){
    if(objClub === null || objPlayer.currentClub === objClub.name){
      if(this.budgetTransfer >= objPlayer.transferFee){
        objPlayer.currentClub = this.name
        this.players.push(objPlayer);
        this.budgetTransfer -= objPlayer.transferFee;

        if( objClub !== null){
          let idxPlayer = objClub.players.indexOf(objPlayer)
          objClub.players.splice(idxPlayer,1)
        }

        console.log(`You buy ${objPlayer.playerName} with transfer fee $${objPlayer.transferFee}, remaining budget: $${this.budgetTransfer}`);
      } else {
        let remaining = objPlayer.transferFee - this.budgetTransfer
        console.log(`Budget not sufficient to buy ${objPlayer.playerName}. Your club need extra money for $${remaining} to buy this player`);
      }
    } else {
      console.log(`There is no Player with name ${objPlayer.playerName} in ${objClub.name}`);
    }
  }
}


module.exports = Club;
