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
    this.totalFruit=0;

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
    this.totalFruit=mangoQty;
  }

  // Get some fruits
  harvest() {
    this.good=0;
    this.bad=0;

  	this._fruits=[]
  	for(let i=0;i<this.totalFruit;i++) {
  		let mango=new Mango();
  		this._fruits.push(mango);
  	}
  	
  	for(let j=0;j<this._fruits.length;j++) {
  		if(this._fruits[j]['quality']==="good") {
  			this.good++
  		}else{
  			this.bad++
  		}
  	}


    return `${this._fruits.length} (${this.good} good ${this.bad} bad) `;
  }

}

class Mango {
  constructor() {
    this.quality= this.assignQuality()
  }
  
  assignQuality() {
    var random = Math.floor(Math.random()*2);
    if(random == 0) {
      return 'bad'
    } else {
      return 'good'
    }
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


//=====================================================================================================================================

class AppleTree {

  // Initialize a new MangoTree
  constructor() {
    this._age=0;
    this.matureAge=10;
    this.stopAge=20;
    this.deathAge=35;
    this._height=0;
    this._healthyStatus=true;
    this._fruits=[];
    this.maxFruits=50;
    this.bad=0;
    this.good=0;
    this.totalFruit=0;

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

  // Produce some mangoes
  produceApples() {
    let appleQty=Math.ceil(Math.random()*this.maxFruits);
    this.totalFruit=appleQty;
  }

  // Get some fruits
  harvest() {
    this.good=0;
    this.bad=0;

    this._fruits=[]
    for(let i=0;i<this.totalFruit;i++) {
      let apple=new Apple();
      this._fruits.push(apple);
    }
    
    for(let j=0;j<this._fruits.length;j++) {
      if(this._fruits[j]['quality']==="good") {
        this.good++
      }else{
        this.bad++
      }
    }


    return `${this._fruits.length} (${this.good} good ${this.bad} bad) `;
  }

}

class Apple {
  constructor() {
    this.quality= this.assignQuality()
  }
  
  assignQuality() {
    var random = Math.floor(Math.random()*2);
    if(random == 0) {
      return 'bad'
    } else {
      return 'good'
    }
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

//============================================================================================================================

class PearTree {

  // Initialize a new MangoTree
  constructor() {
    this._age=0;
    this.matureAge=5;
    this.stopAge=20;
    this.deathAge=35;
    this._height=0;
    this._healthyStatus=true;
    this._fruits=[];
    this.maxFruits=50;
    this.bad=0;
    this.good=0;
    this.totalFruit=0;

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
      return this.producePear();
    }

  }

  // Produce some mangoes
  producePear() {
    let pearQty=Math.ceil(Math.random()*this.maxFruits);
    this.totalFruit=pearQty;
  }

  // Get some fruits
  harvest() {
    this.good=0;
    this.bad=0;

    this._fruits=[]
    for(let i=0;i<this.totalFruit;i++) {
      let pear=new Pear();
      this._fruits.push(pear);
    }
    
    for(let j=0;j<this._fruits.length;j++) {
      if(this._fruits[j]['quality']==="good") {
        this.good++
      }else{
        this.bad++
      }
    }


    return `${this._fruits.length} (${this.good} good ${this.bad} bad) `;
  }

}

class Pear {
  constructor() {
    this.quality= this.assignQuality()
  }
  
  assignQuality() {
    var random = Math.floor(Math.random()*2);
    if(random == 0) {
      return 'bad'
    } else {
      return 'good'
    }
  }

}

console.log("===========================================PEAR TREE================================================")
let pearTree = new PearTree()
  do {
    pearTree.grow();
    pearTree.producePear();
    //mangoTree.harverst();
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvest()}`) 
  } while (pearTree.healthyStatus !== false)


  //=============================================================================================================================

  class FruitTree {

  // Initialize a new MangoTree
  constructor(matureAge,stopAge,deathAge,maxFruits,type) {
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
    this.totalFruit=0;

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
      return this.produceFruits();
    }

  }

  // Produce some mangoes
  produceFruits() {
    let fruitQty=Math.ceil(Math.random()*this.maxFruits);
    this.totalFruit=fruitQty;
  }

  // Get some fruits
  harvest() {
    this.good=0;
    this.bad=0;

    this._fruits=[]
    for(let i=0;i<this.totalFruit;i++) {
      let fruit=new Fruit();
      this._fruits.push(fruit);
    }
    
    for(let j=0;j<this._fruits.length;j++) {
      if(this._fruits[j]['quality']==="good") {
        this.good++
      }else{
        this.bad++
      }
    }


    return `${this._fruits.length} (${this.good} good ${this.bad} bad) `;
  }

}

class Fruit {
  constructor() {
    this.quality= this.assignQuality()
  }
  
  assignQuality() {
    var random = Math.floor(Math.random()*2);
    if(random == 0) {
      return 'bad'
    } else {
      return 'good'
    }
  }

}

class PearTree2 extends FruitTree {

  // Initialize a new MangoTree
  constructor(matureAge,stopAge,deathAge,maxFruits,type) {
    super(5,20,35,50,"Pear Tree")

  }
}

class Pear2 extends Fruit {
  constructor() {
    super()
  }
}

console.log("===========================================PEAR TREE (pake parent)================================================")
let pearTree2 = new PearTree2()
  do {
    pearTree2.grow();
    pearTree2.produceFruits();
    //mangoTree.harverst();
    console.log(`[Year ${pearTree2.age} Report] Height = ${pearTree2.height} | Fruits harvested = ${pearTree2.harvest()}`) 
  } while (pearTree2.healthyStatus !== false)
