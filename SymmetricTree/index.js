/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

        1
       / \
      2   2
     / \ / \
    3  4 4  3
*/

/*
Approach #1:
 Recursion:
 1) Base case is if root is null, return false
 2) Use a helper to proceed stricly on the roots left and right
 3) The Helper takes in left and right inputs
    - Base cases are if(left===null || right === null) return left === right AND
    if the left value is not equal to the right value, then return false.
 4) Then we make our recursive call strictly on the left child's left with the right child's right AND 
 on the left child's right with the right child'd left
*/

function isSymmetric(root) {
  if (root === null) {
    return true;
  }
  return isSymmetricHelper(root.left, root.right);
}

function isSymmetricHelper(left, right) {
  if (left === null || right === null) {
    return left === right;
  }
  if (left.val !== right.val) {
    return false;
  }
  return (
    isSymmetricHelper(left.left, right.right) &&
    isSymmetricHelper(left.right, right.left)
  );
}

/*
Approach #2:
 Iterative(Preference):
 1) Initialize a variable queue that will be an array containing both the root's left and right children
 2) Create a while loop on the condition that there is something in the queue
    - In this loop, shift the left node(node1) and right node(node2)..we doing this to basically compare and push it back to the queue at the top level so that we can compare and push their children and they cycle will continue 
    - Set conditionals: 
    if (node1 == null && node2 == null) continue
    if (node1 == null || node2 == null) return false
    if (node1.val !== node2.val) return false
    - Once we are past these conditionals and if we keep moving along, then we push node1's left child along with node2's right child THEN we can push node1's right child along with node2's left child and check them using the aforementioned conditionals
3) Once we are done with the loop and nothing returns false, then it means everything went as planned so we can return true at the end.
*/

var isSymmetric = function(root) {
    let queue = [root.left, root.right];
    while (queue.length) {
        let node1 = queue.shift(), node2 = queue.shift();
        if (node1 == null && node2 == null) continue;
        if (node1 == null || node2 == null) return false;
        if (node1.val !== node2.val) return false;
        queue.push(node1.left, node2.right);
        queue.push(node1.right, node2.left);
    }
    
    return true;
    // Time Complexity: O(n), we possibly visit all nodes
    // Space Complexity: O(n/2) = O(n), the bottom level could have at most n/2 nodes
}