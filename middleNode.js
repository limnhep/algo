/*
Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.



Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
Example 2:

Input: [1,2,3,4,5,6]
Output: Node 4 from this list (Serialization: [4,5,6])
Since the list has two middle nodes with values 3 and 4, we return the second one.


Note:

The number of nodes in the given list will be between 1 and 100.
*/

// Strategy: use fast and slow pointer to identify the mid and given that fast is moving twice as fast as slow pointer, by the time fast pointer reaches the end, slow pointer will be in the middle
/*
initial state:
    s
    1 , 2 , 3 , 4 , 5
    f

first iteration:
        s
    1 , 2 , 3 , 4 , 5
            f

second iteration:
            s
    1 , 2 , 3 , 4 , 5
                    f
return s when f reaches the end
*/
var middleNode = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// time: O(n)
// space: O(1)