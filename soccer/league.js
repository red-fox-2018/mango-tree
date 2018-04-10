class League {
  constructor(country,ceo){
    this.country = country;
    this.ceo = ceo;
    this.club = [];
  }

  addClub(obj){
    this.club.push(obj);
  }

  members(){
    console.log('List club in this League:');
    console.log('====================================');
    for(let i = 0 ; i < this.club.length ; i++){
      console.log(`${i+1}. ${this.club[i].name} , ${this.club[i].stadium}`);
    }
  }
}

class PremierLeague extends League{
  constructor(country,ceo){
    super(country,ceo);
  }

}

class LaLiga extends League{
  constructor(country,ceo){
    super(country,ceo);
  }

}




module.exports = {League,PremierLeague,LaLiga}
