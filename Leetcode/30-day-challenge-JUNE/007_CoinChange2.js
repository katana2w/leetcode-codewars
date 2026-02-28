/*
https://www.youtube.com/watch?v=DJ4a7cmjZY0

* You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.



Example 1:

Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:

Input: amount = 10, coins = [10]
Output: 1


Note:

You can assume that

0 <= amount <= 5000
1 <= coin <= 5000
the number of coins is less than 500
the answer is guaranteed to fit into signed 32-bit integer
* */

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    // Declaring a 2-D array
    // for storing solutions to subproblems:
    let size = coins.length;
    let arr = new Array();
    for (let j = 1; j <= size + 1; j++) {
        arr.push(new Array(amount + 1).fill(0))
    }
    // let arr = Array.from({length:size + 1}).fill([]);
    // for(let i = 0; i < size + 1; i++) {
    //     arr[i].push(Array.from({length:amount+1}))
    // }

    // Initializing first column of array to 1
    // because a sum of 0 can be made
    // in one possible way: {0}
    for(let i = 0; i < size + 1; i++)
        arr[i][0] = 1;

    // Applying the recursive solution:
    for(let i = 1; i < size + 1; i++)
        for(let j = 0; j < amount + 1; j++)
            if(coins[i - 1] > j)  // Cannot pick the highest coin:
                arr[i][j] = arr[i - 1][j];
            else  // Pick the highest coin:
                arr[i][j] = arr[i][j - coins[i - 1]] + arr[i - 1][j];

    return arr[size][amount];
};

console.log(change(5,[1,2,5]));
