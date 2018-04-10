const Club = require('./club.js');

class Barcelona extends Club {
  constructor(){
    super('F.C. Barcelona', 'Camp Nou', 'Barcelona', 'Ernesto Valverde', 20000000)
  }
}

module.exports = Barcelona;
