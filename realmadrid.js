const Club = require('./club.js')

class RealMadrid extends Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    super('Real Madrid F.C', 'Santiago Bernabéu', 'Madrid', 'Zinedine Zidane', 10000000000)
  }
}

module.exports = RealMadrid
