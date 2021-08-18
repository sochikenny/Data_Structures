/*
Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Example:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example:
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example:
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
*/

/*
Approaches:
----passed 14/19 cases-----------
// var hasCycle = function(head) {
//     if(!head) return false
//     let obj = {}
//     while(head){
//       if(head in obj){
//         return true  
//       } else {
//        obj[head] = 1 
//       }
//       head = head.next
//     }
//     return false
// };

//--------Approach #2 (T.C: O(N), S.C: O(N))
// var hasCycle = function(head) {
//     if(!head) return false
//     let obj = new Set()
//     while(head){
//       if(obj.has(head)){
//         return true  
//       } else {
//        obj.add(head)   
//       }
//       head = head.next
//     }
//     return false
// };

*/

//Solution---T.C -> O(N) & S.C -> O(1)
function hasCycle(head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
}
