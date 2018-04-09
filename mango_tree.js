"use strict"

// release 0

// class MangoTree {

//   constructor() {
//     this._age = 0;
//     this._height = 0;
//     this._fruits = [];
//     this._matureAge = 15
//     this._maxAge = 90
//   }

//   get age() {
//     return this._age;
//   }

//   get height() {
//     return this._height;
//   }

//   get fruits() {

//     return this._fruits;
//   }

//   get healtyStatus() {
//     return this._maxAge;
//   }

//   get harvested() {
//     return this._fruits.length;
//   }

//   // Grow the tree
//   grow() {
//     let number = 0;
//     while(number === 0){
//       number = Math.floor(Math.random()*3);
//     }
//     this._age +=1;
//     this._height += number;
//     this.produceMangoes();
//   }

//   // Produce some mangoes
//   produceMangoes() {
//     this._fruits = [];
//     let number = 0;
//     if(this._age > 15){
//       while(number === 0){
//         number = Math.floor(Math.random()*10);
//       }
//       for(let i=0;i<number;i++){
//         let mango = new Mango()
//         if(mango.good === 0){
//           this._fruits.push(false);
//         }
//         else{
//           this._fruits.push(true);
//         }
//       }
//     }    
//   }

//   // Get some fruits
//   harvest() {
//     let conditionGood = 0;
//     let conditionBad = 0;
//     for(let i=0;i<this._fruits.length;i++){
//       if(this._fruits[i] === true){
//         conditionGood +=1;
//       }
//       else{
//         conditionBad +=1;
//       }
//     }
//     return `(${conditionGood} good , ${conditionBad} bad)`;
//   }
// }

// class Mango extends MangoTree {
//   constructor() {
//     super();
//     this.good = Math.floor(Math.random()*2);
//   }
// }

// //==========drive code Release 0============//
// let mango_tree = new MangoTree();
// console.log(mango_tree.healtyStatus)
// let time = 0;
// while(mango_tree.healtyStatus !== time){
//   mango_tree.grow();
//   mango_tree.produceMangoes();
//   let condition = mango_tree.harvest();
//   console.log(`[Year ${mango_tree.age} Report] Height = ${mango_tree.height} m| Fruits harvested = ${mango_tree.harvested} ${mango_tree.fruits} ${condition}`) 
//   time++;
// }
// console.log(`The Manggo tree has met its end. :sad:`)
// //================================//





















// Release 1
// class AppleTree {
//   constructor() {
//     this._age = 0;
//     this._height = 0;
//     this._fruits = [];
//     this._matureAge = 7;
//     this._maxAge = 50;
//   }

//   get age() {
//     return this._age;
//   }

//   get height() {
//     return this._height;
//   }

//   get fruits() {

//     return this._fruits;
//   }

//   get healtyStatus() {
//     return this._maxAge;
//   }

//   get harvested() {
//     return this._fruits.length;
//   }



//   // Grow the tree
//   grow() {
//     let number = 0;
//     while(number === 0){
//       number = Math.floor(Math.random()*3);
//     }
//     this._age +=1;
//     this._height += number;
//     this.produceApples();
//   }

//   // Produce some mangoes
//   produceApples() {
//     this._fruits = [];
//     let number = 0;
//     if(this._age > this._matureAge){
//       while(number === 0){
//         number = Math.floor(Math.random()*10);
//       }
//       for(let i=0;i<number;i++){
//         let apple = new Apple()
//         if(apple.good === 0){
//           this._fruits.push(false);
//         }
//         else{
//           this._fruits.push(true);
//         }
//       }
//     }    
//   }

//   // Get some fruits
//   harvest() {
//     let conditionGood = 0;
//     let conditionBad = 0;
//     for(let i=0;i<this._fruits.length;i++){
//       if(this._fruits[i] === true){
//         conditionGood +=1;
//       }
//       else{
//         conditionBad +=1;
//       }
//     }
//     return `(${conditionGood} good , ${conditionBad} bad)`;
//   }
// }
// class Apple extends AppleTree{
//   constructor() {
//     super();
//     this.good = Math.floor(Math.random()*2);
//   }
// }

// //==========drive code Release 1============//
// let apple_tree = new AppleTree();
// console.log(apple_tree.healtyStatus)
// let time = 0;
// while(apple_tree.healtyStatus !== time){
//   apple_tree.grow();
//   apple_tree.produceApples();
//   let condition = apple_tree.harvest();
//   console.log(`[Year ${apple_tree.age} Report] Height = ${apple_tree.height} m| Fruits harvested = ${apple_tree.harvested} ${apple_tree.fruits} ${condition}`) 
//   time++;
// }
// console.log(`The Apple tree has met its end. :sad:`)
// //================================//





















// Release 2
class FruitTree {
  constructor() {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._matureAge = 0;
    this._maxAge = 0;
  }

  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {

    return this._fruits;
  }

  get healtyStatus() {
    return this._maxAge;
  }

  get harvested() {
    return this._fruits.length;
  }

  // Grow the tree
  grow() {
    let number = 0;
    while(number === 0){
      number = Math.floor(Math.random()*3);
    }
    this._age +=1;
    this._height += number;
    this.produceFruits();
  }

  // Produce some mangoes
  produceFruits() {
    this._fruits = [];
    let number = 0;
    if(this._age > this._matureAge){
      while(number === 0){
        number = Math.floor(Math.random()*10);
      }
      for(let i=0;i<number;i++){
        let fruits = new Fruit()
        if(fruits.good === 0){
          this._fruits.push(false);
        }
        else{
          this._fruits.push(true);
        }
      }
    }    
  }

  // Get some fruits
  harvest() {
    let conditionGood = 0;
    let conditionBad = 0;
    for(let i=0;i<this._fruits.length;i++){
      if(this._fruits[i] === true){
        conditionGood +=1;
      }
      else{
        conditionBad +=1;
      }
    }
    return `(${conditionGood} good , ${conditionBad} bad)`;
  }
}

class Fruit{
  constructor() {
    this.good = Math.floor(Math.random()*2);
  }
}

class MangoTree extends FruitTree{
  constructor() {
    super();
    this._matureAge = 15
    this._maxAge = 90
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
    this._matureAge = 7;
    this._maxAge = 50;
  }
}
class Apple extends Fruit{
  constructor() {
    super();
  }
}


// //==========drive code Release 2============//
// let mango_tree = new MangoTree();
// console.log(mango_tree.healtyStatus)
// let time = 0;
// while(mango_tree.healtyStatus !== time){
//   mango_tree.grow();
//   mango_tree.produceFruits();
//   let condition = mango_tree.harvest();
//   console.log(`[Year ${mango_tree.age} Report] Height = ${mango_tree.height} m| Fruits harvested = ${mango_tree.harvested} ${mango_tree.fruits} ${condition}`) 
//   time++;
// }
// console.log(`The Manggo tree has met its end. :sad:`)
// //================================//
//==========drive code Release 2============//
let apple_tree = new AppleTree();
console.log(apple_tree.healtyStatus)
let time = 0;
while(apple_tree.healtyStatus !== time){
  apple_tree.grow();
  apple_tree.produceFruits();
  let condition = apple_tree.harvest();
  console.log(`[Year ${apple_tree.age} Report] Height = ${apple_tree.height} m| Fruits harvested = ${apple_tree.harvested} ${apple_tree.fruits} ${condition}`) 
  time++;
}
console.log(`The Apple tree has met its end. :sad:`)
//================================//