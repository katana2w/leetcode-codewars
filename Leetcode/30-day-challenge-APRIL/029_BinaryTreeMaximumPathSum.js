/*
* Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain at least one node and does not need to go through the root.

Example 1:

Input: [1,2,3]

       1
      / \
     2   3

Output: 6
Example 2:

Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
*
* */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = root.val;
    let go = root => {
        let L = root.left ? go(root.left) : 0,
            R = root.right ? go(root.right) : 0;
        max = Math.max(max,
            root.val,
            root.val + L,
            root.val + R,
            root.val + L + R
        );
        return Math.max(
            root.val,
            root.val + L,
            root.val + R
        );
    };
    go(root);
    return max;
}