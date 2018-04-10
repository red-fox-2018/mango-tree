const Club = require('./club.js');

class Arsenal extends Club {
  constructor(){
    super('Arsenal F.C.', 'Emirates Stadium', 'London', 'Arsène Wenger', 35000000)
  }
}


module.exports = Arsenal;
