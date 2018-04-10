"use strict"

// release 0

class MangoTree {

  // Initialize a new MangoTree
  constructor() {
    this._age=0;
    this.matureAge=5;
    this.stopAge=10;
    this.deathAge=15;
    this._height=0;
    this._healthyStatus=true;
    this._fruits=[];
    this.maxFruits=30;
    this.bad=0;
    this.good=0;
    this.temp=-1;

    // this.capasity=//math.random
    // this.buah_dipetik=;
    // this.healthyStatus=;
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {

  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age+=1;
    if(this._age<=this.stopAge) {
      this._height+=Math.ceil(Math.random()*5);
    }
    
    if(this._age===this.deathAge){
      this._healthyStatus=false;
    }
    
    if(this._age===this.matureAge) {
      return this.produceMangoes();
    }

  }

  // Produce some mangoes
  produceMangoes() {
    let mangoQty=Math.ceil(Math.random()*this.maxFruits);
    this._fruits.push(mangoQty);
    return this._fruits;

  }

  // Get some fruits
  harvest() {
    this.temp+=1;
    let mango= new Mango(Math.ceil(Math.random()*this._fruits[this.temp]));
    this.bad=mango.quality;
    this.good= this.fruits[this.temp] - this.bad;
    return `${this._fruits[this.temp]} (${this.good} good ${this.bad} bad) `;
  }

}

class Mango {
  // Produce a mango
  constructor(quality) {
    this.quality=quality;
  }
}

console.log("===========================================MANGO TREE================================================")
let mangoTree = new MangoTree()
  do {
    mangoTree.grow();
    mangoTree.produceMangoes();
    //mangoTree.harverst();
    console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvest()}`) 
  } while (mangoTree.healthyStatus !== false)

//===============================================================================================================================
// Release 1
class AppleTree {
  // Initialize a new MangoTree
  constructor() {
    this._age=0;
    this.matureAge=10;
    this.stopAge=15;
    this.deathAge=20;
    this._height=0;
    this._healthyStatus=true;
    this._fruits=[];
    this.maxFruits=30;
    this.bad=0;
    this.good=0;
    this.temp=-1;

    // this.capasity=//math.random
    // this.buah_dipetik=;
    // this.healthyStatus=;
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {

  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age+=1;
    if(this._age<=this.stopAge) {
      this._height+=Math.ceil(Math.random()*5);
    }
    
    if(this._age===this.deathAge){
      this._healthyStatus=false;
    }
    
    if(this._age===this.matureAge) {
      return this.produceApples();
    }

  }

  // Produce some apples
  produceApples() {
    let appleQty=Math.ceil(Math.random()*this.maxFruits);
    this._fruits.push(appleQty);
    return this._fruits;

  }

  // Get some fruits
  harvest() {
    this.temp+=1;
    let apple= new Apple(Math.ceil(Math.random()*this._fruits[this.temp]));
    this.bad=apple.quality;
    this.good= this.fruits[this.temp] - this.bad;
    return `${this._fruits[this.temp]} (${this.good} good ${this.bad} bad) `;
  }


}


class Apple {
  constructor(quality) {
  this.quality=quality;
  }
}

console.log("===========================================APPLE TREE================================================")
let appleTree = new AppleTree()
  do {
    appleTree.grow();
    appleTree.produceApples();
    //mangoTree.harverst();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvest()}`) 
  } while (appleTree.healthyStatus !== false)


// Release 2
class FruitTree {
  constructor(matureAge,stopAge,deathAge,maxFruits,type){
    this._age=0;
    this.matureAge=matureAge;
    this.stopAge=stopAge;
    this.deathAge=deathAge;
    this._height=0;
    this._healthyStatus=true;
    this._fruits=[];
    this.maxFruits=maxFruits;
    this.bad=0;
    this.good=0;
    this.temp=-1;
    this.type=type;
  }
}
  

class Fruit {
  constructor(quality) {
   this.quality=quality;
  }
}



class PearTree extends FruitTree {
  constructor() {
    super(10,20,30,20,"Pear Tree")
  }

  get age() {
    return this._age
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthyStatus() {
    return this._healthyStatus;
  }

  get harvested() {

  }


  // Get current states here

  // Grow the tree
  grow() {
    this._age+=1;
    if(this._age<=this.stopAge) {
      this._height+=Math.ceil(Math.random()*5);
    }
    
    if(this._age===this.deathAge){
      this._healthyStatus=false;
    }
    
    if(this._age===this.matureAge) {
      return this.producePears();
    }

  }

  // Produce some apples
  producePears() {
    let pearQty=Math.ceil(Math.random()*this.maxFruits);
    this._fruits.push(pearQty);
    return this._fruits;

  }

  // Get some fruits
  harvest() {
    this.temp+=1;
    let pear= new Pear (Math.ceil(Math.random()*this._fruits[this.temp]));
    this.bad=pear.quality;
    this.good= this.fruits[this.temp] - this.bad;
    return `${this._fruits[this.temp]} (${this.good} good ${this.bad} bad) `;
  }


}


class Pear{
  constructor(quality) {
    this.quality=quality;
  }

} 

//mau tanya

// class Pear extends Fruit{
//   constructor() {
//     super()
//   }
// } //mau tanya

console.log("===========================================PEAR TREE================================================")
let pearTree = new PearTree()
  do {
    pearTree.grow();
    pearTree.producePears();
    //mangoTree.harverst();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvest()}`) 
  } while (pearTree.healthyStatus !== false)


//console.log(pearTree.good)
