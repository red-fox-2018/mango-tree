class Club{
  constructor(name,stadium,location,manager,budgetTransfer){
    this.name = name;
    this.stadium = stadium;
    this.location = location;
    this.manager = manager;
    this.budgetTransfer = budgetTransfer;
    this.player = [];
  }

  addPlayer(obj){
    obj.currentClub =  this.name;
    this.player.push(obj);
  }

  buyPlayer(player,club){
    var sisaUang = 0
    if(player.transferFee > this.budgetTransfer){
      console.log('tidak bisa beli pemain duitnya kurang')
    }
    if(club === null){
      this.player.push(player);
      sisaUang = this.budgetTransfer -= player.transferFee;
      player.currentClub = this.name;
      console.log(`You Buy ${player.name}, with transfer fee ${player.transferFee}, your remaining budget is ${sisaUang} `)
    }else if(club.player.length === 0){
      console.log('Cant Buy player from this club')
    }else{
      for(let i = 0 ; i < club.player.length ; i++){
        let index = 0;
        if(club.player[i].name === player.name){
          index = i;
          club.player.splice(index,1);
        }
        else{
          console.log('no player such name like that in');
        }
      }
      this.player.push(player);
      player.currentClub = this.name;
      sisaUang = this.budgetTransfer -= player.transferFee;
      club.budgetTransfer += player.transferFee;
    }
  }
}

class RealMadrid extends Club{
  constructor(name,stadium,location,manager,budgetTransfer){
    super(name,stadium,location,manager,budgetTransfer)
  }
}

class Barcelona extends Club{
  constructor(name,stadium,location,manager,budgetTransfer){
    super(name,stadium,location,manager,budgetTransfer)
  }
}

class Liverpool extends Club{
  constructor(name,stadium,location,manager,budgetTransfer){
    super(name,stadium,location,manager,budgetTransfer)
  }
}

class Arsenal extends Club{
  constructor(name,stadium,location,manager,budgetTransfer){
    super(name,stadium,location,manager,budgetTransfer)
  }
}


module.exports = {Club,RealMadrid,Barcelona,Liverpool,Arsenal}
