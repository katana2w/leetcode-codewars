/*
* Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Note:
You may assume k is always valid, 1 ≤ k ≤ BST's total elements.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:
What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?

   Hide Hint #1
Try to utilize the property of a BST.
   Hide Hint #2
Try in-order traversal. (Credits to @chan13)
   Hide Hint #3
What if you could modify the BST node's structure?
   Hide Hint #4
The optimal runtime complexity is O(height of BST).
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    let stack = [];
    while (true) {
        while (root != null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (--k == 0) return root.val;
        root = root.right;
    }
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// const obj = new TreeNode(3)
// obj.left = new TreeNode(1)
// obj.right = new TreeNode(4)
// obj.left.left = null;
// obj.left.right = new TreeNode(2)
//
// console.log(kthSmallest(obj, 1))


const obj = new TreeNode(5)
obj.left = new TreeNode(3)
obj.right = new TreeNode(6)
obj.right.left = null
obj.right.right = null
obj.left.left = new TreeNode(2)
obj.left.left.left = new TreeNode(1)
obj.left.left.right = null
obj.left.right = new TreeNode(4)
obj.left.right.left = null
obj.left.right = null

console.log(kthSmallest(obj, 5))
