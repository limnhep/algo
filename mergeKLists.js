/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.



Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []


Constraints:

k == lists.length
0 <= k <= 10^4
0 <= lists[i].length <= 500
-10^4 <= lists[i][j] <= 10^4
lists[i] is sorted in ascending order.
The sum of lists[i].length won't exceed 10^4.

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  if (lists.length > 0) {
    let mergedResult = lists[0];
    const result = [];
    for (let i = 1; i < lists.length; i++) {
      mergedResult = mergedTwoLists(mergedResult, lists[i]);
    }
    return mergedResult;
  }
  return null;
};

const mergedTwoLists = function (listA, listB) {
  if (listA === null) return listB;
  if (listB === null) return listA;
  let mergedHead = null;
  if (listA.val <= listB.val) {
    mergedHead = listA;
    listA = listA.next;
  } else {
    mergedHead = listB;
    listB = listB.next;
  }
  let dummy = mergedHead;
  while (listA !== null && listB !== null) {
    let temp = null;
    if (listA.val <= listB.val) {
      temp = listA;
      listA = listA.next;
    } else {
      temp = listB;
      listB = listB.next;
    }
    dummy.next = temp;
    dummy = temp;
  }
  if (listA !== null) dummy.next = listA;
  if (listB !== null) dummy.next = listB;
  return mergedHead;
}

// time: O(n x k), where n is the length of input linked lists, and k is the length of the values in each linked list
// space: O(1) as constant space is used