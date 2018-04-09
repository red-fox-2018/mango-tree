class League {
  constructor(country, ceo) {
    this.country = country
    this.ceo = ceo
    this.clubs = []
  }

  addClub(club){
    this.clubs.push(club)
  }

  members(){
    console.log();
    console.log(`List club in this League:`);
    console.log(`================================================================`);
    for (var i = 0; i < this.clubs.length; i++) {
      console.log(`${i+1}. ${this.clubs[i].name}, stadium: ${this.clubs[i].stadium}`);
    }
  }

}

class PremierLeague extends League{
  constructor(country, ceo) {
    super('United Kingdom', 'Richard Scudamore')
  }
}

class LaLiga extends League{
  constructor(country, ceo) {
    super('Spain', 'Javier Gomez')
  }
}

module.exports = {League, PremierLeague, LaLiga};
