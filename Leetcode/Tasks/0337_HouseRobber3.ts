/**
 * https://leetcode.com/problems/house-robber-iii/description/?envType=study-plan-v2&envId=dynamic-programming
 *
 * The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.
 *
 * Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.
 *
 * Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,2,3,null,3,null,1]
 * Output: 7
 * Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
 * Example 2:
 *
 *
 * Input: root = [3,4,5,1,3,null,1]
 * Output: 9
 * Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
 *
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 104].
 * 0 <= Node.val <= 104
 *
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

function rob(root: TreeNode | null): number {
    const [robThis, skipThis] = dfs(root);
    return Math.max(robThis, skipThis);
}

function dfs(node: TreeNode | null): [number, number] {
    if (!node) {
        return [0, 0];
    }

    const [leftRob, leftSkip] = dfs(node.left);
    const [rightRob, rightSkip] = dfs(node.right);

    const robThis = node.val + leftSkip + rightSkip;

    const skipThis =
        Math.max(leftRob, leftSkip) + Math.max(rightRob, rightSkip);

    return [robThis, skipThis];
}