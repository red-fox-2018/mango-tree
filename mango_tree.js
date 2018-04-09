"use strict"

// release 0
/* 
class MangoTree {
  // Initialize a new MangoTree
  constructor() {
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healtyStatus = true
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
    return `${this.fruits.length} ${this.harvest()}`
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._fruits = []
    this._age++    
    if(this.age<=17){
      this._height+=Math.random()-0.15
      this._height = Number(this._height.toFixed(2))
    }
    if(this._age>=20){
      this._healtyStatus=false
    }
  }

  // Produce some mangoes
  produceMangoes() {
    if(this._age>=4){
      let produce = Math.floor(Math.random()*16)+2
      for(let i=0;i<produce;i++){
        // let mango = 
        if(new Mango().quality==1){
          this._fruits.push('bad')
        }
        else{
          this._fruits.push('good')
        }
      }
    }
    return this._fruits
  }

  // Get some fruits
  harvest() {
    let good = 0
    let bad = 0
    for(let i=0;i<this._fruits.length;i++){
      if(this._fruits[i]=='good'){
        good++
      }else{
        bad++
      }
    }
    return `(${good} good, ${bad} bad)`
  }

}

class Mango {
  // Produce a mango
  constructor() {
    this.quality = Math.floor(Math.random()*2)
  }
}
  //  driver code untuk release 0
   let mangoTree = new MangoTree()
   let mango = new Mango()
   do {
     mangoTree.grow();
     mangoTree.produceMangoes();
     mangoTree.harvest()
     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
   } while (mangoTree.healtyStatus!= false)
  

// Release 1
class AppleTree {
  constructor(){
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healtyStatus = true
  }
  get age(){
    return this._age
  }
  get height(){
    return this._height
  }
  get fruits(){
    return this._fruits
  }
  get healtyStatus(){
    return this._healtyStatus
  }
  get harvested(){
    return `${this.fruits.length} ${this.harvest()}`
  }
  grow(){
    this._fruits = []
    this._age++
    if(this._height<16){
      this._height+=Math.random()
      this._height=Number(this._height.toFixed(2))
    }
    if(this._age>=18){
      this._healtyStatus = false
    }
  }

  produceApples(){
    if(this._age>=2){
      let produce = Math.floor(Math.random()*10)+4
      for(let i=0;i<produce;i++){
        if(new Apple().quality==1){
          this._fruits.push('bad')
        }else{
          this._fruits.push('good')
        }
      }
    }
  }
  harvest(){
    let good = 0
    let bad = 0
    for(let i=0;i<this._fruits.length;i++){
      if(this._fruits[i]=='good'){
        good++
      }else{
        bad++
      }
    }
    return `(${good} good, ${bad} bad)`
  }
}
class Apple {
  constructor(){
    this.quality = Math.floor(Math.random()*2)
  }
}

let appleTree = new AppleTree()
let apple = new Apple()
console.log('Apple Tree is live :)')
do {
  appleTree.grow();
  appleTree.produceApples();
  appleTree.harvest()
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healtyStatus!= false)
console.log('The Apple Tree has met its end. :(')
 */
// Release 2
class FruitTree {
  constructor(){
    this._age = 0
    this._height = 0
    this._fruits = []
    this._healtyStatus = true
    this._maxHeight = 7
    this._maxAge = 18
    this._mature = 2
    this._typeOfFruit = 'Apples Fruits'
  }
  get typeOfFruit(){
    return this._typeOfFruit
  }
  get age(){
    return this._age
  }
  get height(){
    return this._height
  }
  get fruits(){
    return this._fruits
  }
  get healtyStatus(){
    return this._healtyStatus
  }
  get harvested(){
    return `${this.fruits.length} ${this.harvest()}`
  }
  grow(){
    this._fruits = []
    this._age++
    let random = Math.random()
    if(this._height+random<this._maxHeight){
      this._height+=random
      this._height=Number(this._height.toFixed(2))
    }
    if(this._age>=this._maxAge){
      this._healtyStatus = false
    }
  }

  produceFruits(){
    if(this._age>=this._mature){
      let produce = Math.floor(Math.random()*10)+4
      for(let i=0;i<produce;i++){
        if(new Fruit().quality==1){
          this._fruits.push('bad')
        }else{
          this._fruits.push('good')
        }
      }
    }
  }
  harvest(){
    let good = 0
    let bad = 0
    for(let i=0;i<this._fruits.length;i++){
      if(this._fruits[i]=='good'){
        good++
      }else{
        bad++
      }
    }
    return `(${good} good, ${bad} bad)`
  }
}

class Fruit {
  constructor(){
    this.quality = Math.floor(Math.random()*2)
  }
}

class MangoTree extends FruitTree{
  constructor(maxHeight,maxAge,mature,typeOfFruit){
    super()
    this._maxHeight = maxHeight
    this._maxAge = maxAge
    this._mature = mature
    this._typeOfFruit = 'Mango Fruits'
  }
}
class AppleTree extends FruitTree{
  constructor(){
    super()
  }
}
class PearTree extends FruitTree{
  constructor(maxHeight,maxAge,mature){
    super()
    this._maxHeight = maxHeight
    this._maxAge = maxAge
    this._mature = mature
    this._typeOfFruit = 'Pear Fruits'
  }
}

let appleTree = new AppleTree()
let mangoTree = new MangoTree(5,20,4)
let pearTree = new PearTree(9,25,6)
let fruit = new Fruit()

console.log('Apple Tree is live :)')
do {
  appleTree.grow()
  appleTree.produceFruits()
  appleTree.harvest()
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | ${appleTree.typeOfFruit} harvested = ${appleTree.harvested}`)
} while (appleTree.healtyStatus!= false)
console.log('The Apple Tree has met its end. :(')
console.log('-------------------------------------------------------------------------')
console.log('Mango Tree is live :)')
do {
  mangoTree.grow()
  mangoTree.produceFruits()
  mangoTree.harvest()
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | ${mangoTree.typeOfFruit} harvested = ${mangoTree.harvested}`)
} while (mangoTree.healtyStatus!= false)
console.log('The Mango Tree has met its end. :(')
console.log('-------------------------------------------------------------------------')
console.log('Pear Tree is live :)')
do {
  pearTree.grow()
  pearTree.produceFruits()
  pearTree.harvest()
  console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | ${pearTree.typeOfFruit} harvested = ${pearTree.harvested}`)
} while (pearTree.healtyStatus!= false)
console.log('The Pear Tree has met its end. :(')