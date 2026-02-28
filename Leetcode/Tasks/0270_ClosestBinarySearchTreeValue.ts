/**
 * https://leetcode.com/problems/closest-binary-search-tree-value/description/
 *
 * Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target. If there are multiple answers, print the smallest.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [4,2,5,1,3], target = 3.714286
 * Output: 4
 * Example 2:
 *
 * Input: root = [1], target = 4.428571
 * Output: 1
 *
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 104].
 * 0 <= Node.val <= 109
 * -109 <= target <= 109
 */

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function closestValue(root: TreeNode | null, target: number): number {
    let closest = root.val;
    let node = root;
    while (node) {
        if (
            Math.abs(target - node.val) < Math.abs(target - closest) ||
            (
                Math.abs(target - node.val) === Math.abs(target - closest) &&
                node.val < closest
            )
        ) {
            closest = node.val;
        }

        node = target < node.val ? node.left : node.right;
    }
    return closest;
};
