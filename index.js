/**
 * @author: Iswanul Umam - Red Fox
 */

const MangoTree = require('./MangoTree');

// # Release 0
let mangoTree = new MangoTree(3, 10, 15);

console.log(`# The tree is alive!`);

do {
  mangoTree.grow();
  // mangoTree.produceMangoes();
  mangoTree.harvest();
  console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`);
} while (mangoTree.healtyStatus != false);
console.log(`# The tree has met its end.`);

// # Release 1