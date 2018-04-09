const {League} = require('./league.js')

class PremierLeague extends League {
  constructor(country, ceo) {
    super('United Kingdom', 'Richard Scudamore')
  }
}

module.exports = PremierLeague
