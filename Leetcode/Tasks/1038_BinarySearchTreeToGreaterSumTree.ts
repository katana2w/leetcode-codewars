/**
 * https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/description/
 *
 * Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.
 *
 * As a reminder, a binary search tree is a tree that satisfies these constraints:
 *
 * The left subtree of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
 * Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
 * Example 2:
 *
 * Input: root = [0,null,1]
 * Output: [1,null,1]
 */

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val = 0, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function bstToGst(root: TreeNode | null): TreeNode | null {
    let sum = 0;

    const dfs = (node: TreeNode | null) => {
        if (!node) return;

        dfs(node.right);        // 1) большие
        sum += node.val;        // 2) накопить
        node.val = sum;         // 3) обновить
        dfs(node.left);         // 4) меньшие
    };

    dfs(root);
    return root;
}
