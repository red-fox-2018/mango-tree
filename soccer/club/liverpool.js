const Club = require('./club.js');

class Liverpool extends Club {
  constructor(){
    super('Liverpool F.C.', 'Anfield', 'Liverpool', 'Jürgen Klopp', 50000000)
  }
}


module.exports = Liverpool;
