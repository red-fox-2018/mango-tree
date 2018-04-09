"use strict"

// release 0

// class MangoTree {

//   // Initialize a new MangoTree
//   constructor() {
//     this._age = 0;
//     this._height = 0;
//     this._healtyStatus = true;
//     this._hervested = 0;
//     this.maxFruits = 15;
//     this.maxAge = 20;
//     this.notGrowAge = 17;
//     this.productiveAge = 1;
//     this.badFruits = 0;
//     this.goodFruits = 0
//   }

//   get age() {
//     return this._age;
//   }

//   get height() {
//     return this._height;
//   }

//   get healtyStatus() {
//     return this._healtyStatus;
//   }

//   get hervested() {
//     return this._hervested
//   }


//   // Get current states here

//   // Grow the tree
//   grow() {
//     this._age++
//     if (this._age < this.notGrowAge) {
//       this._height += (Math.ceil(Math.random() * 100))
//     }
//     if (this._age > this.productiveAge && this._hervested <= this.maxFruits) {
//       this.badFruits = 0;
//       this.goodFruits = 0;
//       this._hervested = 0;
//       this.produceMangoes()
//       this.harvest()
//       // console.log(this._hervested)
//     }
//     if (this._age >= this.maxAge) {
//       this._healtyStatus = false;
//     }
//   }

//   // Produce some mangoes
//   produceMangoes() {
//     this._hervested += Math.ceil(Math.random() * this.maxFruits);
//   }
//   // Get some fruits
//   harvest() {
//     for (let i = 0; i < this._hervested; i++) {
//       let temp = new Mango();
//       temp.quality()
//       if (temp.good > 0) {
//         this.goodFruits++
//       } else {
//         this.badFruits++
//       }
//     }
//   }
// }

// class Mango {
//   // Produce a mango
//   constructor() {
//     this.good = 0
//     this.bad = 0;
//   }
//   quality() {
//     let rand = Math.round(Math.random() * 10)
//     // console.log(rand)
//     if (rand > 5) {
//       this.good += 1
//     } else {
//       this.bad += 1
//     }
//   }
// }

// /* *
//   * driver code untuk release 0 */
// let mangoTree = new MangoTree()
// let mango = new Mango()
// do {
//   mangoTree.grow();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height/100} m | Fruits harvested = ${mangoTree.hervested} (${mangoTree.goodFruits} Good, ${mangoTree.badFruits} Bad)`)
// } while (mangoTree._healtyStatus != false)

// Release 1

// class AppleTree {
//   // Initialize a new AppleTree
//   constructor() {
//     this._age = 0;
//     this._height = 0;
//     this._healtyStatus = true;
//     this._hervested = 0;
//     this.maxFruits = 20;
//     this.maxAge = 20;
//     this.notGrowAge = 20;
//     this.productiveAge = 5;
//     this.badFruits = 0;
//     this.goodFruits = 0
//   }

//   get age() {
//     return this._age;
//   }

//   get height() {
//     return this._height;
//   }

//   get healtyStatus() {
//     return this._healtyStatus;
//   }

//   get hervested() {
//     return this._hervested
//   }


//   // Get current states here

//   // Grow the tree
//   grow() {
//     this._age++
//     if (this._age < this.notGrowAge) {
//       this._height += (Math.ceil(Math.random() * 100))
//     }
//     if (this._age > this.productiveAge && this._hervested <= this.maxFruits) {
//       this.badFruits = 0;
//       this.goodFruits = 0;
//       this._hervested = 0;
//       // this._fruits = []
//       this.produceApples();
//       this.harvest();
//     }
//     if (this._age >= this.maxAge) {
//       this._healtyStatus = false;
//     }
//   }

//   // Produce some apples
//   produceApples() {
//     this._hervested += Math.ceil(Math.random() * this.maxFruits);
//   }
//   // Get some fruits
//   harvest() {
//     for (let i = 0; i < this._hervested; i++) {
//       let temp = new Apple();
//       temp.quality()
//       if (temp.good > 0) {
//         this.goodFruits++
//       } else {
//         this.badFruits++
//       }
//     }
//   }
// }
// class Apple {
//   // Produce a apple
//   constructor() {
//     this.good = 0
//     this.bad = 0;
//   }
//   quality() {
//     let rand = Math.round(Math.random() * 10)
//     // console.log(rand)
//     if (rand > 5) {
//       this.good += 1
//     } else {
//       this.bad += 1
//     }
//   }
// }

// /* *
//   * driver code untuk release 1 */
// let appleTree = new AppleTree()
// let apple = new Apple()
// do {
//   appleTree.grow();
//   console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height/100} m | Fruits harvested = ${appleTree.hervested} (${appleTree.goodFruits} Good, ${appleTree.badFruits} Bad)`)
// } while (appleTree._healtyStatus != false)

// Release 2
class FruitTree { 
  // Initialize a new FruitTree
  constructor() {
    this._age = 0;
    this._height = 0;
    this._healtyStatus = true;
    this._hervested = 0;
    this.maxFruits = 20;
    this.maxAge = 20;
    this.notGrowAge = 20;
    this.productiveAge = 3;
    this.badFruits = 0;
    this.goodFruits = 0
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get healtyStatus() {
    return this._healtyStatus;
  }

  get hervested() {
    return this._hervested
  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age++
    if (this._age < this.notGrowAge) {
      this._height += (Math.ceil(Math.random() * 100))
    }
    if (this._age > this.productiveAge && this._hervested <= this.maxFruits) {
      this.badFruits = 0;
      this.goodFruits = 0;
      this._hervested = 0;
      // this._fruits = []
      this.produceFruits();
      this.harvest();
    }
    if (this._age >= this.maxAge) {
      this._healtyStatus = false;
    }
  }

  // Produce some fruits
  produceFruits() {
    this._hervested += Math.ceil(Math.random() * this.maxFruits);
  }
  // Get some fruits
  harvest() {
    for (let i = 0; i < this._hervested; i++) {
      let temp = new Fruit();
      temp.quality()
      if (temp.good > 0) {
        this.goodFruits++
      } else {
        this.badFruits++
      }
    }
  }
}
class Fruit { 
// Produce a fruit
  constructor() {
    this.good = 0
    this.bad = 0;
  }
  quality() {
    let rand = Math.round(Math.random() * 10)
    // console.log(rand)
    if (rand > 5) {
      this.good += 1
    } else {
      this.bad += 1
    }
  }
}

class MangoTree extends FruitTree{
  constructor() {
    super();
    this.productiveAge = 5;
    this.maxAge = 20;
    this.notGrowAge = 15;
  }
}
class Mango extends Fruit{
  constructor() {
    super();
  }
}
class AppleTree extends FruitTree{
  constructor() {
    super();
    this.productiveAge = 10;
    this.maxAge = 50;
    this.notGrowAge = 40;
  }
}
class Apple extends Fruit{
  constructor() {
    super();
  }
}

// /* *
//   * driver code untuk release 1 */
let mangoTree = new MangoTree()
let mango = new Mango()
do {
  mangoTree.grow();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height/100} m | Fruits harvested = ${mangoTree.hervested} (${mangoTree.goodFruits} Good, ${mangoTree.badFruits} Bad)`)
} while (mangoTree._healtyStatus != false)
console.log(`The Mango tree has met its end. :sad:`)
console.log('================================')
//==========drive code Release 2============//
let appleTree = new AppleTree()
let apple = new Apple()
do {
  appleTree.grow();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height/100} m | Fruits harvested = ${appleTree.hervested} (${appleTree.goodFruits} Good, ${appleTree.badFruits} Bad)`)
} while (appleTree._healtyStatus != false)
console.log(`The Apple tree has met its end. :sad:`)
//================================//