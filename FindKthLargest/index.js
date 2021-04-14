//Write a function that takes in a BST and a positive integer k and returns 
//the kth largest integer contained in the BST

//-----Non-Optimal Solution---->  O(N) time, O(N) space 
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findKthLargestValueInBst(tree, k) {
      let result = [] //initialize empty array
      inOrderTraverse(tree, result) //call helper w/ tree & result input
      return result[result.length - k] //return length - k value of the data
  }
      
  function inOrderTraverse(node, result){
      if(node === null) return; //if the node is null, return (base case)
      
      inOrderTraverse(node.left, result) //traverse left 
      result.push(node.value)            //visit node 
      inOrderTraverse(node.right, result)  //traverse right
  }



//Optimal ---> O(h + k) time & O(h) Space; where h is the height of tree and 
//k is the input parameter

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  //A tree class is created to keep track of # of visited nodes 
  //and subsequently, the current node value 
  class TreeInfo {
      constructor(numOfNodesVisited, currVisitedNodeValue){
          this.numOfNodesVisited = numOfNodesVisited
          this.currVisitedNodeValue = currVisitedNodeValue
      }
  }
  
  //function initializes tree class as treeInfo
  //calls a helper function that takes in tree, k, and treeInfo class
  //then it returns the current visited node of the tree info class
  function findKthLargestValueInBst(tree, k) {
   let treeInfo = new TreeInfo(0, -1)
   reverseInOrderTraverse(tree, k, treeInfo)
   return treeInfo.currVisitedNodeValue
  }
  
  function reverseInOrderTraverse(node, k, treeInfo){
      if (node === null || treeInfo.numOfNodesVisited >= k){
          return
      } //base case
      
      reverseInOrderTraverse(node.right, k, treeInfo)
      if (treeInfo.numOfNodesVisited < k){
          treeInfo.numOfNodesVisited += 1
          treeInfo.currVisitedNodeValue = node.value
          reverseInOrderTraverse(node.left, k, treeInfo)
      }
  }
