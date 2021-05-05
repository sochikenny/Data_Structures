class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

//-------ITERATIVE------------------//
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

//-------------ANOTHER METHOD--------(RECURSIVE)--> PREFERRED IN BSTs---//
function findClosestValueInBst(tree, target, closest = Infinity) {
    if (tree === null) return closest;
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
        closest = tree.value;
      }
    if (target < tree.value) {
        return findClosestValueInBst(tree.left, target, closest);
    } else if (target > tree.value) {
        return findClosestValueInBst(tree.right, target, closest);
    } else {
        return closest;
      }
  }
  

