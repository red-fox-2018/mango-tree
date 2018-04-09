class Club{
  constructor(name,stadium,location,manager,budgetTransfer){
        this.name = name
        this.stadium = stadium
        this.location = location
        this.manager = manager
        this.budgetTransfer = budgetTransfer
        this.player = []
  }

  addPlayer(player){
        player.currentClub = this.name
        this.player.push(player)
        return this.player
  }
  buyPlayer(player,team){
        if(team !== null){
              if(team.player.indexOf(player) === -1){
                  console.log(`There is no Player with name ${player.playerName} in ${team.name}`)
                  return
              }else{
                  if(this.budgetTransfer < player.transferFee){
                    let extraMoney = player.transferFee - this.budgetTransfer
                    console.log(`Budget no sufficient to buy ${player.playerName}. Your club need extra money for $${extraMoney} to buy this player`)
                  }else{
                        this.addPlayer(player)
                        this.budgetTransfer = this.budgetTransfer - player.transferFee
                        var deleteIndex = 0
                        team.player.filter((pemain,index)=>{
                          if(pemain.playerName === player.playerName){
                                deleteIndex = index
                          }
                        })
                        team.player.splice(deleteIndex,1)
                        console.log(`You buy ${player.playerName} with transfer fee ${player.transferFee} , remaining budget: ${this.budgetTransfer}`)
                  }
              }
        }else{
          if(this.budgetTransfer < player.transferFee){
                let extraMoney = player.transferFee - this.budgetTransfer
                  console.log(`Budget no sufficient to buy ${player.playerName}. Your club need extra money for $${extraMoney} to buy this player`)
          }else{
            this.addPlayer(player)
            this.budgetTransfer = this.budgetTransfer - player.transferFee
            console.log(`You buy ${player.playerName} with transfer fee ${player.transferFee} , remaining budget: ${this.budgetTransfer}`)
          }
        }
  }
}

class RealMadrid extends Club{
      constructor (){
        super('Real Madrid F.C.', 'Santiago Bernabéu','Madrid','Zinedine Zidan', 10000000000)
      }
}

class Barcelona extends Club{
      constructor (){
        super('F.C. Barcelona', 'Camp Nou','Barcelona','Ernesto Valverde', 20000000)
      }
}

class Liverpool extends Club{
  constructor (){
    super('Liverpool F.C.', 'Anfield','Liverpool','Jurgen Klopp', 50000000)
  }
}

class Arsenal extends Club{
  constructor (){
    super('Arsenal F.C.', 'Emirates Stadium','London','Arsène Wenger', 35000000)
  }
}

module.exports = {RealMadrid,Barcelona,Liverpool,Arsenal}
