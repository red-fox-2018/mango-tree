//Club
class Club {
  constructor(name, stadium, location, manager, budgetTransfer){
    this.name = name
    this.stadium = stadium
    this.location = location
    this.manager = manager
    this.budgetTransfer = budgetTransfer
    this.players = []
  }

  addPlayer(player){
    player.currentClub = this.name
    this.players.push(player)
  }

  buyPlayer(player, club){
    let playerName = player.playerName
    let clubName = player.currentClub
    let price = player.transferFee
    let remainingBudget = this.budgetTransfer - price

    if(club == null){
      console.log(`You buy ${playerName} with transfer fee $${price}, remaining budget: $${remainingBudget}`)
      this.budgetTransfer = remainingBudget
      this.players.push(player)
      player.currentClub = this.name
    } else {
      let clubPlayer = []
      for(let i = 0; i < club.players.length; i++){
        clubPlayer.push(club.players[i].playerName)
      }

        if(clubPlayer.includes(playerName)){
          if(remainingBudget >= 0){
            console.log(`You buy ${playerName} with transfer fee $${price}, remaining budget: $${remainingBudget}`)
            this.budgetTransfer = remainingBudget
            this.players.push(player)
            player.currentClub = this.name

            let current_player = []
            for(let i = 0; i < club.players.length; i++){
              if(playerName != club.players[i].playerName){
                current_player.push(club.players[i])
              }
            }
            club.players = current_player

          } else {
            console.log(`Budget not sufficient to buy ${playerName}. Your club need extra money for $${Math.abs(remainingBudget)} to buy this player`);
          }
        } else {
          console.log(`There is no Player with name ${playerName} in ${club.name}`);
        }

    }
  }


}

//Club's Child
class RealMadrid extends Club {
  constructor() {
    super('Real Madrid F.C', 'Santiago Bernabéu', 'Madrid', 'Zinedine Zidane', 10000000000)
  }
}

class Barcelona extends Club {
  constructor() {
    super('F.C. Barcelona', 'Camp Nou', 'Barcelona', 'Ernesto Valverde', 20000000)
  }
}

class Liverpool extends Club {
  constructor() {
    super('Liverpool F.C.', 'Anfield', 'Liverpool', 'Jürgen Klopp', 50000000)
  }
}

class Arsenal extends Club {
  constructor() {
    super('Arsenal F.C.', 'Emirates Stadium', 'London', 'Arsène Wenger', 35000000,)
  }
}




module.exports = {
  RealMadrid,
  Barcelona,
  Liverpool,
  Arsenal
}
