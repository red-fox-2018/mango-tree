"use strict"

// release 0
class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healtyStatus = true
    this._harvest = 0
    this._good =0
    this._bad = 0
  }

  get age() {
    return this._height
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruits
  }

  get healtyStatus() {
    return this._healtyStatus
  }

  get harvested() {
    return this._harvest
  }
  // Get current states here
  // Grow the tree
  grow() {
    this._age += 1

    if(this._age < 20){
      this._height += Math.round(Math.floor(Math.random() * 20) /12)
      return this._healtyStatus = true

    }
    else{
      return this._healtyStatus = false
    }

  }

  // Produce some mangoes
  produceMangoes() {
    let randomTotalBuah = Math.floor(Math.random() * 20) + 20

    if(randomTotalBuah>40){
        randomTotalBuah = 40
    }

    for(let i=0;i<randomTotalBuah;i++){
      let mango = new Mango()

      if(mango.quality=="good"){
        this._good++;
      }
      else{
        this._bad++;
      }

      this._fruits.push(mango);
    }

  }

  // Get some fruits
  harverst() {
    this._harvest = `${this._fruits.length} (${this._good} good, ${this._bad} bad)`;
    this._fruits = [];
    this._bad = 0;
    this._good = 0
  }
}

class Mango {
  constructor() {
    this.quality
    if(Math.floor(Math.random() * 20) % 2 == 0){
      this.quality = "good"
    }
    else{
      this.quality = "bad"
    }
  }
}

console.log(`The Mango tree is alive! :smile:`);

  //driver code untuk release 0
  let mangoTree = new MangoTree()
  do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harverst();
     console.log(`[Year ${mangoTree._age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
  } while (mangoTree.healtyStatus != false)

  console.log(`The Mango tree has met its end. :sad:\n`);

// Release 1
class FruitTree {
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healtyStatus = true
    this._harvest = 0
    this._good =0
    this._bad = 0
    this._maxHeight = 5
    this._maxAge = 20
    this._mature = 8
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height
  }

  get fruits() {
    return this._fruits
  }

  get healtyStatus() {
    return this._healtyStatus
  }

  get harvested() {
    return this._harvest
  }
  // Get current states here
  // Grow the tree
  grow() {
    this._age += 1

    if(this._age < this._maxAge){
      this._height += Math.round(Math.floor(Math.random() * 20) /12)
      this._healtyStatus = true

    }else{
      this._healtyStatus = false
    }

  }

  // Produce
  produce() {
    if(this._age>=this._mature){
      let randomTotalBuah = Math.floor(Math.random() * 20) + 20

      if(randomTotalBuah>40){
          randomTotalBuah = 40
      }

      for(let i=0;i<randomTotalBuah;i++){
        let fruits = new Fruits()

        if(fruits.quality=="good"){
          this._good++;
        }else{
          this._bad++;
        }

        this._fruits.push(fruits);
      }
    }
  }

  // Get some fruits
  harverst() {
    this._harvest = `${this._fruits.length} (${this._good} good, ${this._bad} bad)`;
    this._fruits = [];
    this._bad = 0;
    this._good = 0
  }
}

class Fruits {
  constructor() {
    this.quality
    if(Math.floor(Math.random() * 20) % 2 == 0){
      this.quality = "good"
    }else{
      this.quality = "bad"
    }
  }
}

class AppleTree extends FruitTree{
  constructor(maxHeight,maxAge,mature){
    super()
    this._maxHeight = maxHeight
    this._maxAge = maxAge
    this._mature = mature
  }
}
class Apple extends Fruits {
  constructor(){
    super()
  }
}

let appletree = new AppleTree(4,18,3);
console.log(`The Apple tree is alive! :smile:`);

  do {
    appletree.grow();
    appletree.produce();
    appletree.harverst();
    console.log(`[Year ${appletree._age} Report] Height = ${appletree.height} | Fruits harvested = ${appletree.harvested}`)
  } while (appletree.healtyStatus != false)

console.log(`The Apple tree has met its end. :sad:\n`);

// Release 2
class PearTree extends FruitTree{
  constructor(maxHeight,maxAge,mature){
    super()
    this._maxHeight = maxHeight
    this._maxAge = maxAge
    this._mature = mature
  }
}

class Pear extends Fruits {
  constructor(){
    super()
  }
}

let peartree = new PearTree(6,22,5);
console.log(`The Pear tree is alive! :smile:`);

  do {
    peartree.grow();
    peartree.produce();
    peartree.harverst();
    console.log(`[Year ${peartree._age} Report] Height = ${peartree.height} | Fruits harvested = ${peartree.harvested}`)
  } while (peartree.healtyStatus != false)

console.log(`The Pear tree has met its end. :sad:\n`);