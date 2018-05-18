const {League} = require('./league.js')

class LaLiga extends League {
  constructor(country, ceo) {
    super('Spain', 'Javier Gomez')
  }
}

module.exports = LaLiga
