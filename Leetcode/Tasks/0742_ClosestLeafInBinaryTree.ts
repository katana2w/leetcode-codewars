/**
 * https://leetcode.com/problems/closest-leaf-in-a-binary-tree/description/
 *
 * Given the root of a binary tree where every node has a unique value and a target integer k, return the value of the nearest leaf node to the target k in the tree.
 *
 * Nearest to a leaf means the least number of edges traveled on the binary tree to reach any leaf of the tree. Also, a node is called a leaf if it has no children.
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

function findClosestLeaf(root: TreeNode | null, k: number): number {
    if (!root) return -1;

    // value -> parentNode
    const parent = new Map();

    let nodeK = null;

    // DFS stack to fill parent map and find nodeK
    const stack = [root];
    parent.set(root.val, null);

    while (stack.length) {
        const node = stack.pop();
        if (node.val === k) nodeK = node;

        if (node.left) {
            parent.set(node.left.val, node);
            stack.push(node.left);
        }
        if (node.right) {
            parent.set(node.right.val, node);
            stack.push(node.right);
        }
    }

    if (!nodeK) return -1; // если k не найден (обычно по условию не нужно)

    // BFS from nodeK
    const queue = [nodeK];
    const visited = new Set([nodeK.val]);

    while (queue.length) {
        const node = queue.shift();

        // leaf check
        if (!node.left && !node.right) {
            return node.val;
        }

        // neighbors: left, right, parent
        const p = parent.get(node.val);

        if (node.left && !visited.has(node.left.val)) {
            visited.add(node.left.val);
            queue.push(node.left);
        }
        if (node.right && !visited.has(node.right.val)) {
            visited.add(node.right.val);
            queue.push(node.right);
        }
        if (p && !visited.has(p.val)) {
            visited.add(p.val);
            queue.push(p);
        }
    }

    return -1; // теоретически не должно случиться
};
