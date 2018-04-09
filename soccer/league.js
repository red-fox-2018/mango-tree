class League{
  constructor (country,ceo){
    this.country = country
    this.ceo = ceo
    this.club = []
  }
  addClub(team){
      this.club.push(team)
      return this.club
  }
  members(){
      console.log('List club in this League:' )
      console.log('==============================')
      for (let i = 0; i < this.club.length; i++) {
        console.log(`${i+1}. ${this.club[i].name} , stadium: ${this.club[i].stadium}`)
      }
  }
}

class PremierLeague extends League{
  constructor(){
    super('United Kingdom','Richard Scudamore')
  }
}

class LaLiga extends League{
  constructor(){
    super('Spain','Javier Gomez')
  }
}

module.exports = {PremierLeague,LaLiga}
