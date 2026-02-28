/**
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
 *
 * You are given the root of a binary tree containing digits from 0 to 9 only.
 *
 * Each root-to-leaf path in the tree represents a number.
 *
 * For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
 * Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
 *
 * A leaf node is a node with no children.
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

function sumNumbers(root: TreeNode | null): number {
    function dfs(node: TreeNode | null, current: number): number {
        if (!node) return 0;

        const next = current * 10 + node.val;

        // если лист
        if (!node.left && !node.right) {
            return next;
        }

        return dfs(node.left, next) + dfs(node.right, next);
    }

    return dfs(root, 0);
};
