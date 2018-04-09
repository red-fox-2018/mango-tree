//League
class League {
  constructor(country, ceo){
    this.country = country
    this.ceo = ceo
    this.clubs = []
  }

  addClub(club){
    this.clubs.push(club)
  }

  members(){
    console.log('List club in this League:')
    console.log('===============================')

    for(let i = 0; i < this.clubs.length; i++){
      console.log(`${i+1}. ${this.clubs[i].name}, stadium: ${this.clubs[i].stadium}`);
    }
  }

}

//League's Child
class PremierLeague extends League {
  constructor(){
    super('United Kingdom', 'Richard Scudamore')
  }
}

class LaLiga extends League {
  constructor(){
    super('Spain', 'Javier Gomez')
  }
}


module.exports = {
  PremierLeague,
  LaLiga
}
