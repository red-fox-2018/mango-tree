const League = require('./league');

class PremierLeague extends League {
  constructor(country, ceo){
    super(country, ceo)
  }
}


module.exports = PremierLeague;
