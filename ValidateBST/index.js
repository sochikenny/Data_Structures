class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

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
    