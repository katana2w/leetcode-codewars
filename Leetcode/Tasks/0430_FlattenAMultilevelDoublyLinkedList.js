/*
* https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/
*
*  You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.



Example 1:

Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
Explanation:

The multilevel linked list in the input is as follows:



After flattening the multilevel linked list it becomes:


Example 2:

Input: head = [1,2,null,3]
Output: [1,3,2]
Explanation:

The input multilevel linked list is as follows:

  1---2---NULL
  |
  3---NULL
Example 3:

Input: head = []
Output: []


How multilevel linked list is represented in test case:

We use the multilevel linked list from Example 1 above:

 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL
The serialization of each level is as follows:

[1,2,3,4,5,6,null]
[7,8,9,10,null]
[11,12,null]
To serialize all levels together we will add nulls in each level to signify no node connects to the upper node of the previous level. The serialization becomes:

[1,2,3,4,5,6,null]
[null,null,7,8,9,10,null]
[null,11,12,null]
Merging the serialization of each level and removing trailing nulls we obtain:

[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]


Constraints:

Number of Nodes will not exceed 1000.
1 <= Node.val <= 10^5
* */

// Definition for a Node.
function Node(val, prev, next, child) {
    this.val = val;
    this.prev = prev;
    this.next = next;
    this.child = child;
};


/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    if (!head) return [];

    let dummy = new Node(-1, null, head, null)
    let prev = dummy;
    let stack = [head]

    let curr;
    while (stack.length > 0) {
        curr = stack.pop();
        prev.next = curr;
        curr.prev = prev;

        if (curr.next) {
            stack.push(curr.next)
        }
        if (curr.child) {
            stack.push(curr.child)
            curr.child = null;
        }
        prev = curr;
    }

   dummy.next.prev = null
    return dummy.next;
};


let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);
let ten = new Node(10);
let eleven = new Node(11);
let twelve = new Node(12);

// set head let
let head = one;

// set next pointers
one.next = two;
one.prev = null;
two.next = three;
two.prev = one;
three.next = four;
three.prev = two;
three.child = seven;
four.next = three;
four.prev = five;
five.next = six;
five.prev = four;
six.next = null;
six.prev = five;

seven.next = eight;
seven.prev = null;
eight.next = nine;
eight.prev = seven;
eight.child = eleven;
nine.next = ten;
nine.prev = eight;
ten.next = null;
ten.prev = nine;

// set down pointers
eleven.next = twelve;
eleven.prev = null;
twelve.next = null;
twelve.prev = eleven;

flatten(head);


//"""
// # Definition for a Node.
// class Node:
//     def __init__(self, val, prev, next, child):
//         self.val = val
//         self.prev = prev
//         self.next = next
//         self.child = child
// """
// class Solution:
//     def flatten(self, head):
//         if head is None:return None
//         dummy = Node(-1, None, head, None)
//         prev = dummy
//         stack = [head]
//
//         while stack:
//             curr = stack.pop()
//
//             prev.next = curr
//             curr.prev = prev
//
//             if curr.next:
//                 stack.append(curr.next)
//             if curr.child:
//                 stack.append(curr.child)
//                 curr.child = None
//
//             prev = curr
//         dummy.next.prev = None
//         return dummy.next
