class League {
  constructor(country,ceo) {
    this.country=country
    this.CEO=ceo
    this.clubs=[]
  }


members(){
  console.log('\n');
  console.log('List club in this League:');
  console.log('===============================');
  for (var i = 0; i < this.clubs.length; i++) {
    console.log(`${i+1}, ${this.clubs[i].name} stadium:${this.clubs[i].stadium}`)
  }

}

}

class LaLiga extends League{
  constructor(country,ceo) {
    super('Spain','Javier Gomez')
  }
  addClub(club){
    this.clubs.push(club)
  }
}

class PremierLeague extends League {
  constructor(country,ceo) {
    super('United Kingdom','Richard Scudamore')
  }
  addClub(club){
    this.clubs.push(club)
  }
}

module.exports = {
                  League,
                  LaLiga,
                  PremierLeague
                }
