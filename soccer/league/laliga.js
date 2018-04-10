const League = require('./league');

class LaLiga extends League {
  constructor(country, ceo){
    super(country, ceo)
  }
}

module.exports = LaLiga;
