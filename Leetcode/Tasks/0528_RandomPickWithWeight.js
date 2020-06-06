/*
* Given an array w of positive integers, where w[i] describes the weight of index i, write a function pickIndex which randomly picks an index in proportion to its weight.

Note:

1 <= w.length <= 10000
1 <= w[i] <= 10^5
pickIndex will be called at most 10000 times.
Example 1:

Input:
["Solution","pickIndex"]
[[[1]],[]]
Output: [null,0]
Example 2:

Input:
["Solution","pickIndex","pickIndex","pickIndex","pickIndex","pickIndex"]
[[[1,3]],[],[],[],[],[]]
Output: [null,0,1,1,1,0]
Explanation of Input Syntax:

The input is two lists: the subroutines called and their arguments. Solution's constructor has one argument, the array w. pickIndex has no arguments. Arguments are always wrapped with a list, even if there aren't any.
* */

/**
 * @param {number[]} w
 */
var Solution = function(w) {
    let sum = 0;
    this.probabilities = Array.from({length:w.length});
    for(let weight of w)
        sum += weight;
    for(let i = 0; i < w.length; i++){
        w[i] += (i == 0) ? 0 : w[i - 1];
        this.probabilities[i] = w[i]/sum;
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let rand = Math.random();
    if(this.probabilities.length === 1 || rand < this.probabilities[0]) return 0;

    let left = 0, right = this.probabilities.length - 1;

    while (right >= left) {
        let mid = Math.floor(left + (right - left) / 2);
        if(this.probabilities[mid] >= rand && this.probabilities[mid - 1] <= rand) {
            return mid;
        }

        if (this.probabilities[mid] < rand) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

var obj = new Solution([1, 3]);
// var obj = new Solution([1]);
var param_1 = obj.pickIndex();
var param_2 = obj.pickIndex();
var param_3 = obj.pickIndex();
var param_4 = obj.pickIndex();
var param_5 = obj.pickIndex();

/*
* class Solution {
    private double[] probabilities;

    public Solution(int[] w) {
        double sum = 0;
        this.probabilities = new double[w.length];
        for(int weight : w)
            sum += weight;
        for(int i = 0; i < w.length; i++){
            w[i] += (i == 0) ? 0 : w[i - 1];
            probabilities[i] = w[i]/sum;
        }
    }

    public int pickIndex() {
        return Math.abs(Arrays.binarySearch(this.probabilities, Math.random())) - 1;
    }
}
* */
