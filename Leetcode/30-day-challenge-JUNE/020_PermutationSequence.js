/*
* The set [1,2,3,...,n] contains a total of n! unique permutations.

By listing and labeling all of the permutations in order, we get the following sequence for n = 3:

"123"
"132"
"213"
"231"
"312"
"321"
Given n and k, return the kth permutation sequence.

Note:

Given n will be between 1 and 9 inclusive.
Given k will be between 1 and n! inclusive.
Example 1:

Input: n = 3, k = 3
Output: "213"
Example 2:

Input: n = 4, k = 9
Output: "2314"
* */

//class Solution {
//     public String getPermutation(int n, int k) {
//         		boolean[] output = new boolean[n];
// 		StringBuilder buf = new StringBuilder("");
//
// 		int[] res = new int[n];
// 		res[0] = 1;
//
// 		for (int i = 1; i < n; i++)
// 			res[i] = res[i - 1] * i;
//
// 		for (int i = n - 1; i >= 0; i--) {
// 			int s = 1;
//
// 			while (k > res[i]) {
// 				s++;
// 				k = k - res[i];
// 			}
//
// 			for (int j = 0; j < n; j++) {
// 				if (j + 1 <= s && output[j]) {
// 					s++;
// 				}
// 			}
//
// 			output[s - 1] = true;
// 			buf.append(Integer.toString(s));
// 		}
//
// 		return buf.toString();
//     }
// }
