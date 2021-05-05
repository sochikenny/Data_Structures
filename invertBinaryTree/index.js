function invertBinaryTree(tree) {
    // Base case 
      if(!tree) return null

    //Swap the nodes (just like you would variables)
      const left = tree.left
      tree.left = tree.right
      tree.right = left
    
    //Call the function on the left and right subtrees 
      invertBinaryTree(tree.left)
      invertBinaryTree(tree.right)
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }