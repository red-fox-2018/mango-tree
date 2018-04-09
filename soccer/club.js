/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/
/*jshint -W030*/

// Club
class Club {
  constructor(name, stadium, location, manager, budgetTransfer, players) {
    this.name = name;
    this.stadium = stadium;
    this.location = location;
    this.location = location;
    this.manager = manager;
    this.budgetTransfer = budgetTransfer;
    this.players = [];
  }

  addPlayer(player) {
    player.currentClub = this.name;
    this.players.push(player);
  }

  buyPlayer(player, club) {
    if (club === null || player.currentClub === club.name) {
      if (this.budgetTransfer >= player.transferFee) {
        player.currentClub = this.name;
        this.players.push(player);
        this.budgetTransfer -= player.transferFee;
        if (club !== null) {
          let indexPlayer;
          for (let i = 0; i < club.players.length; i++) {
            if (club.players[i].playerName === player.playerName) {
              indexPlayer = i;
            }
          }
          club.players.splice(indexPlayer, 1);
        }
        console.log(`You buy ${player.playerName} with transfer fee $${player.transferFee}, remaining budget: $${this.budgetTransfer}`);
      } else {
        let remaining = player.transferFee - this.budgetTransfer;
        console.log(`Budget not sufficient to buy ${player.playerName}. Your club need extra money for $${remaining} to buy this player`);
      }
    } else {
      console.log(`There is no Player with name ${player.playerName} in ${club.name}`);
    }
  }
}

//Club's Child
class RealMadrid extends Club {
  constructor() {
    super('Real Madrid F.C.', 'Santiago Bernabéu', 'Madrid', 'Zinedine Zidane', 10000000000);
  }
}

class Barcelona extends Club {
  constructor() {
    super('F.C. Barcelona', 'Camp Nou', 'Barcelona', 'Ernesto Valverde', 20000000);
  }
}

class Liverpool extends Club {
  constructor() {
    super('Liverpool F.C.', 'Anfield', 'Liverpool', 'Jürgen Klopp', 50000000);
  }
}

class Arsenal extends Club {
  constructor() {
    super('Arsenal F.C.', 'Emirates Stadium', 'London', 'Arsène Wenger', 35000000);
  }
}

module.exports = {
  RealMadrid,
  Barcelona,
  Liverpool,
  Arsenal
};
