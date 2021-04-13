//Write a function that takes in a non-empty sorted array of distinct integers,
//constructs a BST from the integers, and returns the root of the BST

//Non-Optimal --> Time is O(NlogN); Space is O(N) where N is the length of array
function minHeightBst(array) {
	return constructMinHeightBst(array, null, 0, array.length - 1)
}

function constructMinHeightBst(array, bst, startIdx, endIdx){
	if (endIdx < startIdx) return;
	const midIdx = Math.floor((startIdx + endIdx)/2);
	const valueToAdd = array[midIdx];
	if (bst === null){
		bst = new BST(valueToAdd)
	}else{
		bst.insert(valueToAdd)
	}
	constructMinHeightBst(array, bst, startIdx, midIdx - 1);
	constructMinHeightBst(array, bst, midIdx + 1, endIdx);
	return bst
}

//Optimal Solution --> Time is O(N); Space is O(N) where N is the length of array
function minHeightBst(array) {
	return constructMinHeightBst(array, 0, array.length - 1)
}

function constructMinHeightBst(array, startIdx, endIdx){
	if (endIdx < startIdx) return;
	const midIdx = Math.floor((startIdx + endIdx)/2);
	const value = array[midIdx];
    const bst = new BST(value)
	bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
	bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
	return bst
}

//BST class with Insert Method given to us
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}


console.log(minHeightBst([1,2,5,7,10,13,14,15,22]))