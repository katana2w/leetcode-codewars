/*
Given the root of a binary tree, find the largest subtree, which is also a Binary Search Tree (BST), where the largest means subtree has the largest number of nodes.

A Binary Search Tree (BST) is a tree in which all the nodes follow the below-mentioned properties:

The left subtree values are less than the value of their parent (root) node's value.
The right subtree values are greater than the value of their parent (root) node's value.
Note: A subtree must include all of its descendants.

Input: root = [10,5,15,1,8,null,7]
Output: 3
Explanation: The Largest BST Subtree in this case is the highlighted one. The return value is the subtree's size, which is 3.
Example 2:

Input: root = [4,2,7,2,3,5,null,2,null,null,null,null,null,1]
Output: 2
 */


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
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class NodeValue {
    constructor(minNode, maxNode, maxSize) {
        this.minNode = minNode;
        this.maxNode = maxNode;
        this.maxSize = maxSize;
    }
}

var largestBSTSubtreeHelper = function(root) {
    if (root === null) {
        return new NodeValue(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0);
    }

    let left = largestBSTSubtreeHelper(root.left);
    let right = largestBSTSubtreeHelper(root.right);

    if (left.maxNode < root.val && root.val < right.minNode) {
        return new NodeValue(Math.min(root.val, left.minNode), Math.max(root.val, right.maxNode),
            left.maxSize + right.maxSize + 1);
    }

    return new NodeValue(Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Math.max(left.maxSize, right.maxSize));
};

var largestBSTSubtree = function(root) {
    return largestBSTSubtreeHelper(root).maxSize;
};
