class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

/*
 Approach (Recursion):
 1) We create a helper method where we input our root and null as our min and max values
 2) In our helper, we define our base case and our recursive call
 3) Our base cases are if our root is null, then we return true. Basically, our root being null means that we ran thru all the nodes and then returned true
 4) If our min is not null and is greater than/equal to our root's value or if our max is not null and is less than/equal to our root's value then we straight up return false
 5) We then call our function on the left subtree with its min being null and max being the original root's value. 
 We also call it on the right subtree with is min being the root's value and the max being null
*/

//-----with Helper----//
  function validateBst(tree) {
   return validateBSTHelper(tree, -Infinity, Infinity)
  }
  
  function validateBSTHelper(tree, minValue, maxValue){
      if(tree === null){
          return true
      }
      if(tree.value < minValue || tree.value >= maxValue){
          return false
      }
      const leftIsValid = validateBSTHelper(tree.left, minValue, tree.value)
      const rightIsValid = validateBSTHelper(tree.right, tree.value, maxValue)
      return leftIsValid && rightIsValid
  }

//----without Helper----//
function validateBst(tree, minValue = -Infinity, maxValue = Infinity) {
    if(tree === null){
        return true
    }
    if(tree.value < minValue || tree.value >= maxValue){
        return false
    }
    const leftIsValid = validateBst(tree.left, minValue, tree.value)
    const rightIsValid = validateBst(tree.right, tree.value, maxValue)
    return leftIsValid && rightIsValid

}
    