/*
* Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = [];
    if(root === null) return result;
    let curr_path = root.val.toString();
    if (root.left === null && root.right === null) {
        result.push(curr_path);
    }
    if(root.left !== null) inorder(root.left, curr_path, result);
    if(root.right !== null) inorder(root.right, curr_path, result);
    return result;
};

var inorder = function (root, curr_path, result) {
    curr_path += '->' + root.val;
    if(root.left === null && root.right === null) {
        result.push(curr_path);
        return;
    }
    if(root.left !== null) inorder(root.left, curr_path, result);
    if(root.right !== null) inorder(root.right, curr_path, result);
}