
class Club {
  constructor(name,stadium,location,manager,budgetTransfer) {
    this.name= name
    this.stadium= stadium
    this.location= location,
    this.manager= manager
    this.budgetTransfer= budgetTransfer
    this.players=[]
  }

  addPlayer(player){
    this.players.push(player)
    player.currentClub = this.name;
  }

  buyPlayer(player, club) {
    //console.log(club);
    let flag = false
    if (club === null) {
      if (this.budgetTransfer >= player.transferFee) {
        this.budgetTransfer -= player.transferFee
        this.players.push(player)
        player.currentClub = this.name
      }
    } else if (player.currentClub !== club.name) {
      console.log(`There is no Player with name ${player.playerName} in ${club.name}`);
    } else if (player.currentClub === club.name) {
      if(this.budgetTransfer >= player.transferFee){
      this.budgetTransfer -= player.transferFee
      club.players.splice(0,1)
      console.log(`You buy ${player.playerName} with transfer fee ${player.transferFee}, remaining budget: ${this.budgetTransfer}`);
      player.currentClub = this.name
    }else if(this.budgetTransfer < player.transferFee){
      console.log(`Budget not sufficient to buy ${player.playerName} Your club need extra money for ${player.transferFee-=this.budgetTransfer}, to buy this player`);
    }
    }
    //================================  }
  }
}

class RealMadrid extends Club {
  constructor(name,stadium,location,manager,budgetTransfer){
    super('Real Madrid F.C.','Santiago Bernabéu','Madrid','Zinedine Zidane',10000000000)

  }
}

class Barcelona extends Club {
  constructor(name,stadium,location,manager,budgetTransfer){
    super('F.C. Barcelona','Camp Nou','Barcelona','Ernesto Valverde',20000000)

  }
}

class Liverpool extends Club {
  constructor(name,stadium,location,manager,budgetTransfer){
    super('Liverpool F.C.','Anfield','Liverpool','Jürgen Klopp',50000000)

  }
}

class Arsenal extends Club {
  constructor(name,stadium,location,manager,budgetTransfer){
    super('Arsenal F.C.','Emirates Stadium','London','Arsène Wenger',35000000)

  }
}


module.exports= {
                Club,
                RealMadrid,
                Barcelona,
                Liverpool,
                Arsenal
                }
