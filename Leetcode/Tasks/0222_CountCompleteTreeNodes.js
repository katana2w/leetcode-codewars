/*
* Given a complete binary tree, count the number of nodes.

Note:

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example:

Input:
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
* */

//class Solution {
//     public int countNodes(TreeNode root) {
//         int ans = 0;
//         TreeNode node = root;
//
//         while(node != null) {
//             // Get the leftDepth of left subtree and right subtree to check which one is unfull tree
//             int left = leftDepth(node.left);
//             int right = leftDepth(node.right);
//
//             if(left == right) {
//                 // Left subtree is a full tree, and right subtree could be a non-full tree
//                 ans += (1 << left);
//                 node = node.right;
//
//             } else {
//                 // Right subtree is a full tree, and left subtree could be a non-full tree
//                 ans += (1 << right);
//                 node = node.left;
//             }
//         }
//
//         return ans;
//     }
//
//     private int leftDepth(TreeNode root) {
//         int ans = 0;
//
//         while(root != null) {
//             ans++;
//             root = root.left;
//         }
//
//         return ans;
//     }
// }
