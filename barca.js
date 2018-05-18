const Club = require('./club.js')

class Barcelona extends Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    super('F.C Barcelona', 'Camp Nou', 'Barcelona', 'Ernesto Valverde', 20000000)
  }
}

module.exports = Barcelona
