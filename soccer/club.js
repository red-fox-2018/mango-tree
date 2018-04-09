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
          let playersClub = objClub.players //array of object
          let idxPlayer;
          for(var i=0; i<playersClub.length; i++){
            if(playersClub[i].playerName === objPlayer.playerName){
              idxPlayer = i
            }
          }
          playersClub.splice(idxPlayer,1)
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

class RealMadrid extends Club {
  constructor(){
    super('Real Madrid F.C.', 'Santiago Bernabéu', 'Madrid', 'Zinedine Zidane', 10000000000)
  }
}

class Barcelona extends Club {
  constructor(){
    super('F.C. Barcelona', 'Camp Nou', 'Barcelona', 'Ernesto Valverde', 20000000)
  }
}

class Liverpool extends Club {
  constructor(){
    super('Liverpool F.C.', 'Anfield', 'Liverpool', 'Jürgen Klopp', 50000000)
  }
}

class Arsenal extends Club {
  constructor(){
    super('Arsenal F.C.', 'Emirates Stadium', 'London', 'Arsène Wenger', 35000000)
  }
}
//
// let barca = new Club('Barcelona', 'GBK', 'Jakarta', 'Gatau Siapa', 50000)
// console.log(barca);

module.exports = {RealMadrid, Barcelona, Liverpool, Arsenal};
