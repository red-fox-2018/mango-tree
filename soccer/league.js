class League {
  constructor(country, ceo){
    this.country = country,
    this.ceo = ceo,
    this.clubs = []
  }

  addClub(club){
    this.clubs.push(club)
  }

  members(){
    let clubs = this.clubs;
    let count = 1
    console.log('List club in this League:');
    console.log('=========================');
    clubs.forEach(function (data) {
      console.log(`${count}. ${data.name}, stadium : ${data.stadium}`);
      count++
    })
    console.log("");
  }
}

class PremierLeague extends League {
  constructor(country, ceo){
    super(country, ceo)
  }
}

class LaLiga extends League {
  constructor(country, ceo){
    super(country, ceo)
  }
}

module.exports = {PremierLeague, LaLiga};
