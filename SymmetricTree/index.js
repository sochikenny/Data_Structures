/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

        1
       / \
      2   2
     / \ / \
    3  4 4  3
*/

/*
Approach:
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
