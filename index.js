/**
 * @author: Iswanul Umam - Red Fox
 */

const MangoTree = require('./MangoTree');
const AppleTree = require('./AppleTree');

// # Release 0
let mangoTree = new MangoTree(3, 10, 15);
console.log(`# Mango Tree`);
console.log(`# The tree is alive!`);
do {
  mangoTree.grow();
  // mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`);
} while (mangoTree.healtyStatus != false);
console.log(`# The tree has met its end.`);

// # Release 1
let appleTree = new AppleTree(4, 9, 20);
console.log(`# Apple Tree`);
console.log(`# The tree is alive!`);
do {
  appleTree.grow();
  // appleTree.produceMangoes();
  appleTree.harvest();
  console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`);
} while (appleTree.healtyStatus != false);
console.log(`# The tree has met its end.`);