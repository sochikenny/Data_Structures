/*
Merge two sorted linked lists and return it as a sorted list. 
The list should be made by splicing together the nodes of the first two lists.

Example:
Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example:
Input: l1 = [], l2 = []
Output: []

Example:
Input: l1 = [], l2 = [0]
Output: [0]


Approach:
1) initialize a dummy node 
2) create a head variable to store the dummy. This is because this variable will be useful at the end of the program. Dummy will be changing values all thru this program
3) create a while loop for when l1 and l2 are not null
    - if l1's value is less that l2's value, set dummy.next to l1 and set move l1(l1 = l1.next)
    - otherwise if l2's value was equal or greater than l1's value, then set dummy.next to l2 and move 
    as well
    - Also, as l1 and l2 are being moved as a result of these conditionals, dummy is also being moved 
    and staying right behind (dummy = dummy.next)
4) After we break out of the loop, if the first list (l1) hasn't reached null yet, then we set dummy.next from second list to l1 in orde to fully merge them. The same exact thing will occur in the case of the second list(l2)
5) Lastly, we want to the return head.next. This is because of what we did in step 2. Dummy was constantly changing throughout the iterations so it was integral that we stached dummy into head inorder to return head.next which will be one of the original heads from either l1 or l2 after the merge

 // T.C: O(min(M, N)), M = length of l1, N = length of l2
// S.C: O(1), we simply rearrange pointers

*/

function mergeTwoLists(l1, l2) {
  let dummy = new ListNode(0);
  let head = dummy;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }

  if (l1 !== null) {
    dummy.next = l1;
  }
  if (l2 !== null) {
    dummy.next = l2;
  }
  return head.next;
}
