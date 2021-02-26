/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?



Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]


Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  // Set dummy node to point to head of the list
  const dummy = new ListNode(0);
  dummy.next = head;
  // Set both runner and walker to the start of the node
  let runner = dummy;
  let walker = dummy;
  // Advances runner so that the distance between is n+1
  for (let i = 0; i < n + 1; i++) {
    runner = runner.next;
  }
  // Move runner to end while maintaining the gap
  while (runner !== null) {
    runner = runner.next;
    walker = walker.next;
  }

  // Remove the n-th node from the end (walker is currently at n-1 node)
  walker.next = walker.next.next;
  return dummy.next;
};

// time: O(n)
// space: O(1)