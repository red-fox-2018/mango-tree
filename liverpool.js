const Club = require('./club.js')

class Liverpool extends Club {
  constructor(name, stadium, location, manager, budgetTransfer) {
    super('Liverpool F.C', 'Anfield', 'Liverpool', 'Jürgen Klopp', 50000000)
  }
}

module.exports = Liverpool
