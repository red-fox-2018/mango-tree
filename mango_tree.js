"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor(umur,tinggi,maxBuah) {
    this._name = 'Buah'
    this._umur = 0
    this._maxUmur = 20
    this._tinggi = 0
    this._maxBuah = 20
    this._quantity = []
    this._isHealthy = true
  }

  get age() {
    return this._umur
  }

  get height() {
    return this._tinggi
  }

  get fruits() {
    return this._maxBuah
  }

  get healtyStatus() {
    return this._isHealthy
  }

  get harvested() {
      return this._quantity.length
  }


  // Get current states here

  // Grow the tree
  grow(umur) { 
    if (this._umur === this._maxUmur) {
      console.log('this is the end');
      return this._isHealthy = false
    }
    this._umur++
    if (this._umur<this._maxUmur) {
      this._tinggi += Math.floor(Math.random()*4)
    }
    if (this._umur>=5) {
      let harvest = this.harvest()
      console.log(`[Year ${this._umur} Report] Height = ${this._tinggi}  | Fruits harvested = ${this.harvested} (${harvest[0]} good, ${harvest[1]} bad)`);
    }
    else{
      let harvest = 0
      console.log(`[Year ${this._umur} Report] Height = ${this._tinggi}  | Fruits harvested = 0 (0 good, 0 bad)`);
    }
    this._quantity = []
  }

  // Produce some mangoes
  produceMangoes() {
    return Math.floor(Math.random()*20)
  }

  // Get some fruits
  harvest() {
    let fruit = new FruitQuality()
    let goodFruit = 0
    let badFruit = 0
    for(var i=0;i<this.produceMangoes();i++){
     this._quantity.push(fruit.quality()) 
    }
    for (let j = 0; j < this._quantity.length; j++){
      if (this._quantity[j]%2===0) {
        goodFruit++
      }
      else{
        badFruit++
      }
    }
    return [goodFruit,badFruit]
  }

}
class FruitQuality{
  constructor(){
  }
  quality(){
      return Math.floor(Math.random()*2)
    }
}

class Mango {
  // Produce a mango
  constructor() {
  }
}


   //driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
      //console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthyStatus !== false && mangoTree.age<20)
  

// Release 1
// class AppleTree {}
// class Apple {}

// Release 2
class FruitTree {}
class Fruit {}
