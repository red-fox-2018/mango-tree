"use strict"

// release 0
/*
class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor() {
    // this._age = 0;
    // this._height = 0;
    // this._maxAge = 15;
    // this._maxFruits = 20;
    // this._fruits = 0;
    // this._harvested = null;
    // this._healthStatus = true;
    super()
  }

  get age() {
    return this._age;
  }

  get height() {
    let inMeter = `${this._height/100} m`;
    return inMeter;
  }

  get fruits() {
    return this._fruits;
  }

  get healthyStatus() {
    return this._healthStatus;
  }

  get harvested() {
    let good = 0;
    let bad = 0
    for (var i = 0; i < this._harvested.length; i++) {
      if (this._harvested[i].isGood) {
        good++;
      } else {
        bad++
      }
    }
    return `${this._fruits} (${good} good, ${bad} bad)`;
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++;
    //height 100 - 250 cm
    if (this._age === this._maxAge) {
      this._healthStatus = false;
    } else {
      let heightGrowth = Math.floor(Math.random() * (250 - 100 + 1)) + 100
      this._height += heightGrowth;
    }

  }

  // Produce some mangoes
  produceMangoes() {
    if (this._age >= 4) {
      let fruitNum = Math.floor(Math.random() * this._maxFruits) + 1;
      this._fruits = fruitNum;
    }
  }

  // Get some fruits
  harvest() {
    // let totalFruit = this._fruits.length;
    let harvested = []
    for (var i = 0; i < this._fruits; i++) {
      let mango = new Mango()
      harvested.push(mango);
    }
    this._harvested = harvested;
  }

}

class Mango {
  // Produce a mango
  constructor(isGood) {
    this.isGood = this.getQuality();
  }

  getQuality() {
    let idxType = Math.floor(Math.random() * 2)
    if (idxType === 0) {
      return true;
    } else {
      return false;
    }
  }
}


// driver code untuk release 0
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false);



// // Release 1
// class AppleTree {}
// class Apple {}



class AppleTree {
  constructor() {
    this._age = 0;
    this._height = 0;
    this._maxAge = 20;
    this._maxFruits = 30;
    this._harvested = null;
    this._healthStatus = true;
  }

  get age() {
    return this._age;
  }

  get height() {
    let inMeter = `${this._height/100} m`;
    return inMeter;
  }

  get fruits() {
    return this._fruits;
  }

  get healthyStatus() {
    return this._healthStatus;
  }

  get harvested() {
    let good = 0;
    let bad = 0;
    for (var i = 0; i < this._harvested.length; i++) {
      if (this._harvested[i].isGood) {
        good++;
      } else {
        bad++;
      }
    }
    return `${this._fruits} (${good} good, ${bad} bad)`;
  }

  grow() {
    this._age++;
    if (this._age === this._maxAge) {
      this._healthStatus = false;
    } else {
      let heightGrowth = Math.floor(Math.random() * (200 - 125 + 1)) + 125;
      this._height += heightGrowth;
    }
  }

  produceApple() {
    if (this._age >= 6) {
      let fruitNum = Math.floor(Math.random() * this._maxFruits) + 1;
      this._fruits = fruitNum;
    }
  }

  harvest() {
    let harvested = [];
    for (var i = 0; i < this._fruits; i++) {
      let apple = new Apple();
      harvested.push(apple);
    }
    this._harvested = harvested;
  }
}

class Apple {
  constructor(isGood) {
    this.isGood = this.getQuality();
  }

  getQuality() {
    let idxType = Math.floor(Math.random() * 2);
    if (idxType === 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log('\n', '----------------------APPLE---------------------');
let appleTree = new MangoTree()
do {
  appleTree.grow();
  appleTree.produceMangoes();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthyStatus != false);


*/







// // Release 2
// class FruitTree {}
// class Fruit {}


class FruitTree {
  constructor(maxAge, maxFruits, minGrowth, maxGrowth) {
    this._age = 0;
    this._height = 0;
    this._harvested = null;
    this._healthStatus = true;
    this._maxAge = maxAge;
    this._maxFruits = maxFruits;
    this._minGrowth = minGrowth;
    this._maxGrowth = maxGrowth
  }

  get age() {
    return this._age;
  }

  get height() {
    let inMeter = `${this._height/100} m`;
    return inMeter;
  }

  get fruits() {
    return this._fruits;
  }

  get healthyStatus() {
    return this._healthStatus;
  }

  get harvested() {
    let good = 0;
    let bad = 0;
    for (var i = 0; i < this._harvested.length; i++) {
      if (this._harvested[i].isGood) {
        good++;
      } else {
        bad++;
      }
    }
    return `${this._fruits} (${good} good, ${bad} bad)`;
  }

  grow() {
    this._age++;
    if (this._age === this._maxAge) {
      this._healthStatus = false;
    } else {
      let heightGrowth = Math.floor(Math.random() * (this._maxGrowth - this._minGrowth + 1)) + this._minGrowth;
      this._height += heightGrowth;
    }
  }

  produceFruits() {
    if (this._age >= 6) {
      let fruitNum = Math.floor(Math.random() * this._maxFruits) + 1;
      this._fruits = fruitNum;
    }
  }

  harvest() {
    let harvested = [];
    for (var i = 0; i < this._fruits; i++) {
      let apple = new Apple();
      harvested.push(apple);
    }
    this._harvested = harvested;
  }
}

class Fruit {
  constructor(isGood) {
    this.isGood = this.getQuality();
  }

  getQuality() {
    let idxType = Math.floor(Math.random() * 2);
    if (idxType === 0) {
      return true;
    } else {
      return false;
    }
  }
}


class MangoTree extends FruitTree{
  constructor(maxAge, maxFruits, minGrowth, maxGrowth) {
    super(maxAge, maxFruits, minGrowth, maxGrowth)
  }

  harvest() {
    let harvested = []
    for (var i = 0; i < this._fruits; i++) {
      let mango = new Mango()
      harvested.push(mango);
    }
    this._harvested = harvested;
  }
}

class Mango extends Fruit {
  constructor() {
    super()
  }
}

let mangoTree = new MangoTree(20, 40, 100, 250)
do {
  mangoTree.grow();
  mangoTree.produceFruits();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
} while (mangoTree.healthyStatus != false);
