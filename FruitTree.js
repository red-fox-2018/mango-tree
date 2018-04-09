
class FruitTree {
  /**
   * 
   * @param {Number} matureAge - batas minimal pohon berbuah
   * @param {Number} maxGrowth - batas maksimal pohon dapat tumbuh
   * @param {Number} maxAge - matas maksimal pohon dapat hidup
   */
  constructor(matureAge, maxGrowth, maxAge) {
    this._age = 0;
    this._height = 0;
    this._fruits = [];
    this._healtyStatus = true;
    this._matureAge = matureAge;
    this._maxGrowth = maxGrowth;
    this._maxAge = maxAge;
    this._count = {};
    // this._harvest = [];
  }
  get age() {
    // this._height += this._randomNumer(1, 9);
    return this._age;
  }
  get height() {
    return this._height;
  }
  get healtyStatus() {
    return this._healtyStatus;
  }
  get fruits() { // mendapatkan kumpulan buah ?
    return this._fruits;
  }
  get harvested() {
    return `${this._count.total} (${this._count.good} good, ${this._count.bad} bad)`;
  }
  grow() {
    // pada umur tententu pohon berhenti tumbuh
    this._age++;
    if (this._age <= this._maxGrowth) {
      this._height += this._randomNumer(0, 5);
    }
    // @ TODO pohon dapat berbuah ketika mature age ??
    // let pm = this.produceMangoes();
    if (this._age >= this._matureAge) {
      this.produceMangoes();
    }

    // pohon mati pada umur tertentu
    if (this._age > this._maxAge) {
      this._healtyStatus = false;
    }
  }
  produceMangoes() { // @ TODO
    let cruFruit = [];
    let total = this._randomNumer(15, 5);
    for (let i = 0; i < total; i++) {
      let mango = new Apple();
      cruFruit.push(mango);
    }
    // console.log(cruFruit)
    this._fruits = cruFruit;
  }
  harvest() { // @ TODO
    let good = 0, bad = 0, total = 0;
    for (let i of this._fruits) {
      if (i._quality == 'good') {
        good++;
      } else if (i._quality == 'bad') {
        bad++;
      }
      total++;
    }
    this._count['total'] = total;
    this._count['good'] = good;
    this._count['bad'] = bad;
  }
  _randomNumer(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

module.exports = FruitTree;