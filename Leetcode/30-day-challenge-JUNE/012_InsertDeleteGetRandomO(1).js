/*
* Insert Delete GetRandom O(1)
Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.
getRandom: Returns a random element from current set of elements. Each element must have the same probability of being returned.
Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
* */

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.indices = {};
    this.set = [];
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.indices[val] !== undefined) {
        return false;
    }
    this.set.push(val);
    this.indices[val] = this.set.length - 1;
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.indices[val] === undefined) {
        return false;
    }
    if (this.set.length <= 1) {
        delete this.indices[val];
        this.set.pop();
        return true;
    }
    let idx = this.indices[val];
    let lastIdx = this.set.length - 1;
    let lastIdxVal = this.set[lastIdx];
    [this.set[idx], this.set[lastIdx]] = [this.set[lastIdx], this.set[idx]];
    this.indices[lastIdxVal] = idx;
    delete this.indices[val];
    this.set.pop();
    return true;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let min = 0, max = this.set.length - 1;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return this.set[randomNum];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
//["RandomizedSet","insert","insert","getRandom","getRandom","insert","remove","getRandom","getRandom","insert","remove"]
// [[],[3],[3],[],[],[1],[3],[],[],[0],[0]]

var obj = new RandomizedSet();
var param_1 = obj.insert(3);
var param_2 = obj.insert(3);
var param_3 = obj.getRandom();
var param_3 = obj.getRandom();
var param_1 = obj.insert(1);
var param_1 = obj.remove(3);
var param_3 = obj.getRandom();
var param_3 = obj.getRandom();
var param_1 = obj.insert(0);
var param_1 = obj.remove(0);
