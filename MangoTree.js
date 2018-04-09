"use strict"

const FruitTree = require('./FruitTree');
const Mango = require('./Mango');

class MangoTree extends FruitTree {
  /**
   * 
   * @param {Number} matureAge - batas minimal pohon berbuah
   * @param {Number} maxGrowth - batas maksimal pohon dapat tumbuh
   * @param {Number} maxAge - matas maksimal pohon dapat hidup
   */
  constructor(matureAge, maxGrowth, maxAge) {
    super(matureAge, maxGrowth, maxAge);
  }
}

module.exports = MangoTree;
