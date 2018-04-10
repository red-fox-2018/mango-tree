const Club = require('./club.js');

class RealMadrid extends Club {
  constructor(){
    super('Real Madrid F.C.', 'Santiago Bernabéu', 'Madrid', 'Zinedine Zidane', 10000000000)
  }
}


module.exports = RealMadrid;
