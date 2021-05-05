class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
function findClosestValueInBst(tree, target){
    let closest = Infinity
    let currentNode = tree
    while(currentNode !== null){
        if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
            closest = currentNode.value
        }
        if(target < currentNode.value){
            currentNode = currentNode.left
        }else if(target > currentNode.value){
            currentNode = currentNode.right
        }else{
            break;
        }
    }
    return closest
}

