class Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    this.name = name;
    this.stadium = stadium;
    this.location = location;
    this.manager = manager;
    this.budgetTransfer = budgetTransfer;
    this.players = [];
  }

  addPlayer(input) {
    this.players.push(input);
    input.currentClub = this.name;
  }

  buyPlayer(player, club) {
    //kalo clubnya NULL
    if (club == null) {
      if (this.budgetTransfer >= player.transferFee) {
        this.budgetTransfer -= player.transferFee;
        this.players.push(player);
        player.currentClub = this.name;
        console.log(`You buy ${player.playerName} with transfer fee $${player.transferFee}, remaining budget: $${this.budgetTransfer}`);
      } else {
        console.log(`Budget not sufficient to buy ${player.playerName}. Your club need extra money for $${player.transferFee - this.budgetTransfer} to buy this player`);
      }
    } else {
      var foundPlayerOnClub = false;
      for (var i = 0; i < club.players.length; i++) {
        if (club.players[i].playerName == player.playerName) {
          foundPlayerOnClub = true;
          club.players.splice(i, 1)
        }
      }
      if (foundPlayerOnClub == true) {
        if (this.budgetTransfer >= player.transferFee) {
          this.budgetTransfer -= player.transferFee;
          this.players.push(player);
          player.currentClub = this.name;
          console.log(`You buy ${player.playerName} with transfer fee $${player.transferFee}, remaining budget: $${this.budgetTransfer}`);
        } else {
          console.log(`Budget not sufficient to buy ${player.playerName}. Your club need extra money for $${player.transferFee - this.budgetTransfer} to buy this player`);
        }
      } else {
        console.log(`There is no Player with name ${player.playerName} ${club.name}`);
      }
    }
  }
}

class RealMadrid extends Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    super('Real Madrid F.C.', 'Santiago Bernabéu', 'Madrid', 'Zinedine Zidane', 10000000000);
  }
}

class Barcelona extends Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    super('F.C. Barcelona', 'Camp Nou', 'Barcelona', 'Ernesto Valverde', 20000000);
  }
}

class Liverpool extends Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    super('Liverpool F.C.', 'Anfield', 'Liverpool', 'Jürgen Klopp', 50000000);
  }
}

class Arsenal extends Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    super('Arsenal F.C.', 'Emirates Stadium', 'London', 'Arsène Wenger', 35000000);
  }
}


module.exports = {
  Club,
  RealMadrid,
  Barcelona,
  Liverpool,
  Arsenal
}
