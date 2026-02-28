/*
* Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: [5,7]
Output: 4
Example 2:

Input: [0,1]
Output: 0
*
*
*
* The key to solve this problem is bitwise AND consecutive numbers. You can use the following example to walk through the code.
*
*   8  4  2  1
---------------
5 | 0  1  0  1
6 | 0  1  1  0
7 | 0  1  1  1
*
*
*
*
* Analysis:

At the first glance, looping from m to n seems straightforward but obviously time-consuming.
Looping from number to number seems unavailable, but we can considering looping from bit to bit.
Let's first write down some binary numbers:

1    000001
2    000010
3    000011
4    000100
5    000101
6    000110
7    000111
8    001000

Let's consider each bit from low to high, we can observe that the lowest bit, is either 1 or 0 after a number of AND operation. In this problem, because the range is continuous, the only case that lowest bit will become 1 is when m==n, and the lowest bit is 1. In other words,  for the range [m, n], if n > m, the lowest bit is always 0. Why? Because either the lowest bit of m is 0 or 1, the lowest bit of (m AND m+1) must be 0.

Now we have get the lowest bit for final result, next step is to check the 2nd lowest bit. How to do it? Just using bit shifting!  m >> 1 and n >> 1 is all we need.

When to stop looping? Consider the case that:
m =  01000
n =   01011

(1)   01011 > 01000  ->  lowest bit = 0
(2)   0101 > 0100      ->  2nd lowest bit  = 0
(3)   010 = 010          ->  3rd lowest bit = current lowest bit  0
(4)   01 = 01              ->  4th lowest bit = current lowest bit   1
(5)   0 = 0                  ->  5th lowest bit = current lowest bit   0

Final result:   01000
We can see that step (3)-(5) is unnecessary, when m=n, the other bits are just the same as current m (or n), then we can easily get the final result.

The code below are writing in two fashions: using loop and recursion. The former is easy understand, while the later is neat and simple.
*
* */


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    while (n > m) {
        n = n & n - 1;
    }
    return m & n;
};