"use strict"

const FruitTree = require('./FruitTree');
const Apple = require('./Apple');

class AppleTree extends FruitTree {
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

module.exports = AppleTree;
