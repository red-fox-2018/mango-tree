
// release 0

class FruitTree{
  constructor(age,height,maxfruits,matureage,maxage,fruitname){
    this._age = age
    this._height=height
    this._fruits=[]
    this.maxfruits=maxfruits
    this._healthyStatus=true
    this.matureage = matureage
    this.maxage=maxage
    this.harvested = ''
    this.fruitname=fruitname
  }

}

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor() {
    super(0,0,15,3,20,"Mango")
    // this._age = 0
    // this._height=0
    // this._fruits=[]
    // this.maxfruits=10
    // this._healthyStatus=true
    // this.matureage = 3
    // this.maxage=3
    // this.harvested = ''
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

  get healthyStatus() {
    return this._healthyStatus
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age=this._age+1
    if(this._age>=this.maxage){
      this._healthyStatus=false
    }
    else{
      this._height= this._height+Math.round(Math.random()*7)
      if(this._age==this.matureage){
        this.produceMangoes()
      }

    }
    // console.log(this._age)
    // console.log(this._height)
  }

  // Produce some mangoes
  produceMangoes() {
      
    if(this._fruits.length>this.maxfruits){
      this._fruits.slice(0,this.maxfruits)
    }

      var mangoes = Math.round(Math.random()*10)
      var array = ["good","bad"]
      for(var i=0; i<mangoes; i++){
        this._fruits.push(new Mango(array[Math.round(Math.random()*1)]))
      }
      // console.log(this._fruits)
  }
  
  // Get some fruits
  harvest() {
    var countGood =0
    var countBad=0
    
    for(var i=0; i<this._fruits.length; i++){
      if(this._fruits[i].quality==="good"){
        countGood+=1
      }
      else{
        countBad+=1
      }
    }


    this.harvested= this._fruits.length+ " ("+ countGood + " good " + countBad + " bad " + ")"+"Fruit :" +this.fruitname
    this._fruits=[]
  }
  


}

class Mango {
  // Produce a mango
  constructor(quality) {
    this.quality=quality
  }
}


class AppleTree extends FruitTree{

  // Initialize a new MangoTree
  constructor() {
    super(0,0,15,3,20,"Apple")
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

  get healthyStatus() {
    return this._healthyStatus
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age=this._age+1
    if(this._age>=this.maxage){
      this._healthyStatus=false
    }
    else{
      this._height= this._height+Math.round(Math.random()*7)
      if(this._age==this.matureage){
        this.produceApples()
      }
    }
  }

  produceApples() {
      
    if(this._fruits.length>this.maxfruits){
      this._fruits.slice(0,this.maxfruits)
    }

      var mangoes = Math.round(Math.random()*10)
      var array = ["good","bad"]
      this.diameter= Math.round(Math.random()*15)
      for(var i=0; i<mangoes; i++){
        this._fruits.push(new Apple(array[Math.round(Math.random()*1)],this.diameter))
      }
      // console.log(this._fruits)
  }
  
  // Get some fruits
  harvest() {
    var countGood =0
    var countBad=0
    
    
    
    for(var i=0; i<this._fruits.length; i++){
      if(this._fruits[i].quality==="good"){
        countGood+=1
      }
      else{
        countBad+=1
      }
    }

    this.harvested= this._fruits.length+ " ("+ countGood + " good " + countBad + " bad " + ") " + "diameter "+this.diameter + "Fruit :" +this.fruitname
    this._fruits=[]
  }
  


}

class Apple {
  // Produce a mango
  constructor(quality,diameter) {
    this.quality=quality
    this.diameter=diameter
  }
}




class PearTree extends FruitTree {

  // Initialize a new MangoTree
  constructor() {
    super(0,0,15,3,20,"Pear")
    // this._age = 0
    // this._height=0
    // this._fruits=[]
    // this.maxfruits=10
    // this._healthyStatus=true
    // this.matureage = 3
    // this.maxage=3
    // this.harvested = ''
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

  get healthyStatus() {
    return this._healthyStatus
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._age=this._age+1
    if(this._age>=this.maxage){
      this._healthyStatus=false
    }
    else{
      this._height= this._height+Math.round(Math.random()*7)
      if(this._age==this.matureage){
        this.producePear()
      }

    }
    // console.log(this._age)
    // console.log(this._height)
  }

  // Produce some mangoes
  producePear() {
      
    if(this._fruits.length>this.maxfruits){
      this._fruits.slice(0,this.maxfruits)
    }

      var mangoes = Math.round(Math.random()*10)
      var array = ["good","bad"]
      this.weight =Math.round(Math.random()*2)
      for(var i=0; i<mangoes; i++){
        this._fruits.push(new Pear(array[Math.round(Math.random()*1)]))
      }
      // console.log(this._fruits)
  }
  
  // Get some fruits
  harvest() {
    var countGood =0
    var countBad=0
    
    for(var i=0; i<this._fruits.length; i++){
      if(this._fruits[i].quality==="good"){
        countGood+=1
      }
      else{
        countBad+=1
      }
    }

    this.harvested= this._fruits.length+ " ("+ countGood + " good " + countBad + " bad" + ") "+"weight: "+ this.weight+"Fruit :" +this.fruitname
    this._fruits=[]
  }
  

}

class Pear {
  // Produce a mango
  constructor(quality) {
    this.quality=quality
  }
}



  //  driver code untuk release 0
   let mangoTree = new MangoTree()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest();
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healthyStatus != false)
  

   let appleTree = new AppleTree()
   do {
     appleTree.grow();
     appleTree.produceApples();
     appleTree.harvest();
     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
   } while (appleTree.healthyStatus != false)


   let pearTree = new PearTree()
   do {
     pearTree.grow();
     pearTree.producePear();
     pearTree.harvest();
     console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
   } while (pearTree.healthyStatus != false)


// var mangotree=new MangoTree()
// mangotree.grow()
// mangotree.produceMangoes()

// Release 1
// class AppleTree {}
// class Apple {}

// Release 2
// class FruitTree {}
// class Fruit {}
