

class Fruit {
  constructor() {
    this._quality = Math.round(Math.random()) == 1 ? 'good' : 'bad';
  }
}

module.exports = Fruit;