class League {
  constructor(country, ceo) {
    this.country = country
    this.ceo = ceo
    this.clubs = []
  }

  addClub(objClub) {
    this.clubs.push(objClub)
  }

  members() {
    console.log('List club in this league:');
    console.log('=========================');
    for(var i = 0; i < this.clubs.length; i++) {
      console.log(`${i+1}. ${this.clubs[i].name}, stadium: ${this.clubs[i].stadium}`);
    }
  }

}

module.exports = {League}
