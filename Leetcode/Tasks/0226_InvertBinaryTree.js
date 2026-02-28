/*
* Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1
Trivia:
This problem was inspired by this original tweet by Max Howell:

Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (root == null) return null;
    let queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        let current = queue.pop();
        let temp = current.left;
        current.left = current.right;
        current.right = temp;
        if (current.right != null) queue.push(current.right);
        if (current.left != null) queue.push(current.left);
    }
    return root;
};


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//[4,2,7,1,3,6,9]
const obj = new TreeNode(4)
obj.left = new TreeNode(2)
obj.right = new TreeNode(7)
obj.right.left = new TreeNode(6)
obj.right.right = new TreeNode(9)
obj.left.left = new TreeNode(1)
obj.left.right = new TreeNode(3)

console.log(invertTree(obj))
