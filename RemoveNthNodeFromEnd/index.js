/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]

Example:
Input: head = [1,2], n = 1
Output: [1]

 Approach:
 1) create a dummy node to be attached to the head 
 2) initialize first and second index as the dummy node
 3) create a for loop for first to start iterating over the list until it reaches n (Basically, first gets a good head start)
 4) create a while loop, that while first isn't null, we iterate both the first and second indeces
 5) Once, we break out of the loop, the second index should be right before the nth to be removed.
 6) We then set the second's index next to the one after the nth (second.next = second.next.next)
 7) We then return dummy.next
 
 Time Complexity: O(N) where N represents the length of the list; Space Complexity: O(1) 
*/

//Solution
function removeNthFromHead(head, n) {
  const dummy = new ListNode(0);
  dummy.next = head;
  let first = dummy;
  let second = dummy;

  for (let i = 0; i <= n; i++) {
    first = first.next;
  }
  while (first !== null) {
    first = first.next;
    second = second.next;
  }
  second.next = second.next.next;
  return dummy.next;
}
