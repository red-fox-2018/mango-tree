class Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    this.name = name
    this.stadium = stadium
    this.location = location
    this.manager = manager
    this.budgetTransfer = budgetTransfer
    this.players = []
  }

  addPlayer(obj){
    obj.currentClub = this.name
    this.players.push(obj)
  }

  buyPlayer(player, currentClub){

    if (currentClub != null) {

      for (var i = 0; i < currentClub.players.length; i++) {

        if (currentClub.players[i].playerName == player.playerName) {

          if (this.budgetTransfer >= player.transferFee) {

            player.currentClub = this.name
            this.players.push(player)

            console.log(`You buy ${player.playerName} with transfer fee $${player.transferFee}, remaining budget: $${this.budgetTransfer - player.transferFee}`);

            currentClub.players = currentClub.players.splice(i+1,1)

          } else {

            const money = player.transferFee - this.budgetTransfer

            return console.log(`Budget not sufficient to buy ${player.playerName}. Your club need extra money for ${money} to buy this player`);

          }

        }

      }

    } else {

      if (this.budgetTransfer >= player.transferFee) {

        player.currentClub = this.name
        this.players.push(player)
        console.log(`You buy ${player.playerName} with transfer fee $${player.transferFee}, remaining budget: $${this.budgetTransfer - player.transferFee}`);
        this.budgetTransfer -= player.transferFee
        return ''

      } else if (this.budgetTransfer <= player.transferFee) {

        const money = player.transferFee - this.budgetTransfer

        return console.log(`Budget not sufficient to buy ${player.playerName}. Your club need extra money for ${money} to buy this player`);

      }

    }

  return console.log(`There is no Player with name ${player.playerName} in ${currentClub.name}`);

  }

}


class RealMadrid extends Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    super('Real Madrid F.C.', 'Santiago Bernabéu', 'Madrid', 'Zinedine Zidane', 10000000000)
  }
}

class Barcelona extends Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    super('F.C. Barcelona', 'Camp Nou', 'Barcelona', 'Ernesto Valverde', 20000000)
  }
}

class Liverpool extends Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    super('Liverpool F.C.', 'Anfield', 'Liverpool', 'Jürgen Klopp', 50000000)
  }
}

class Arsenal extends Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    super('Arsenal F.C.', 'Emirates Stadium', 'London', 'Arsène Wenger', 35000000)
  }
}

module.exports = {Club, RealMadrid, Barcelona, Liverpool, Arsenal};
