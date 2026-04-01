/**
 * https://leetcode.com/problems/unique-binary-search-trees-ii/description/?envType=study-plan-v2&envId=dynamic-programming
 *
 * Given an integer n, return all the structurally unique BST's (binary search trees), which has exactly n nodes of unique values from 1 to n. Return the answer in any order.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: n = 3
 * Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
 * Example 2:
 *
 * Input: n = 1
 * Output: [[1]]
 *
 *
 * Constraints:
 *
 * 1 <= n <= 8
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function generateTrees(n: number): Array<TreeNode | null> {
    if (n === 0) return [];
    return build(1, n);
}

function build(start: number, end: number): Array<TreeNode | null> {
    const result: Array<TreeNode | null> = [];

    if (start > end) {
        return [null];
    }

    for (let rootVal = start; rootVal <= end; rootVal++) {
        const leftTrees = build(start, rootVal - 1);
        const rightTrees = build(rootVal + 1, end);

        for (const left of leftTrees) {
            for (const right of rightTrees) {
                const root = new TreeNode(rootVal);
                root.left = left;
                root.right = right;
                result.push(root);
            }
        }
    }

    return result;
}