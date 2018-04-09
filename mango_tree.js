"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this.growRange = 10
    this.growPerYear = 0.5
    this.fruitCapacity = 10
    this.matureAge = 5
    this._age = 0
    this._height = 0
    this._fruitStock = 0
    this._pickedFruits = []
    this._fruitStat = []
    this._healthyStatus = true
    this._maxAge = 15
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruitStock
  }

  get healtyStatus() {
    return this._healthyStatus
  }

  get harvested() {
    return this._pickedFruits
  }

  get fruitcap() {
    return this.fruitCapacity
  }

  // Get current states here

  // Grow the tree
  grow() {
    if (this._age <= this._maxAge) {
      this._age++
    }
    if (this._age <= this.growRange) {
      this._height += this.growPerYear
    }
    if (this._age >= this.matureAge) {
      this.produceMangoes()
    }
    if (this._age == this._maxAge) {
      this._healtyStatus = false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    this._fruitStock = Math.floor(Math.random() * this.fruitCapacity) + 2
    let statusFruits = []
    for (var i = 0; i < this._fruitStock; i++) {
      let random = Math.floor(Math.random() * 2)
      if (random === 0) {
        statusFruits.push(0)
      } else {
        statusFruits.push(1)
      }
    }
    this._fruitStat = statusFruits
  }

  // Get some fruits
  harvest() {
    let badCounter = 0
    let goodCounter = 0
    for (var i = 0; i < this._fruitStat.length; i++) {
      let status = new Mango (this._fruitStat[i])
      let statusCheck = status.qualStat()
      if (statusCheck == 'good') {
        goodCounter += 1
      } else {
        badCounter += 1
      }
    }
    this._pickedFruits = `${this._fruitStock} (${goodCounter} good, ${badCounter} bad)`;
  }
}

class Mango {
  // Produce a mango
  constructor(quality) {
    this._quality = quality
  }
  qualStat (){
    if (this._quality === 1) {
      return 'good'
    } else {
      return 'bad'
    }
  }
}

console.log('The mango tree is alive! :smile:');
let mangoTree = new MangoTree()
do {
  mangoTree.grow();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Fruits harvested = ${mangoTree.harvested}`);
} while (mangoTree._healtyStatus != false) {
  console.log(`The tree has met its end, :sad:`);
}
/**
  * driver code untuk release 0
  * let mangoTree = new MangoTree()
  * do {
  *   mangoTree.grow();
  *   mangoTree.produceMangoes();
  *   mangoTree.harverst();
  *   console.log(`[Year ${tree.age} Report] Height = ${tree.height} | Fruits harvested = ${tree.harvested}`)
  * } while (mangoTree.healthyStatus != false)
  */

// // Release 1
// class AppleTree {}
// class Apple {}
//
// // Release 2
// class FruitTree {}
// class Fruit {}
