class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

//Traversals WITH HELPERS---//

//InOder DFS Traversal
function DFSInOrder(tree){
 let data = []
 traverse(tree, data)
 return data
}

function traverse(node, data){
    if (node === null) return //base case

    traverse(node.left)
    data.push(node.value)
    traverse(node.right)
}

//PostOrder DFS Traversal
function DFSPostOrder(tree){
    let data = []
    postTraverse(tree, data)
    return data
   }
   
   function postTraverse(node, data){
       if (node === null) return //base case
   
       postTraverse(node.left)
       postTraverse(node.right)
       data.push(node.value)
   }

//PreOrder DFS Traversal
function DFSPreOrder(tree){
    let data = []
    preTraverse(tree, data)
    return data
   }
   
   function preTraverse(node, data){
       if (node === null) return //base case
       
       data.push(node.value)
       preTraverse(node.left)
       preTraverse(node.right) 
   }


//TRAVERSALS W/O HELPERS-------------------------------------

function inOrderTraverse(tree, array = []) {
    // Base case
      if(tree === null) return
      
      inOrderTraverse(tree.left, array)
      array.push(tree.value)
      inOrderTraverse(tree.right, array)
      return array
  }
  
  function preOrderTraverse(tree, array = []) {
    // Base case
      if(tree === null) return
      
      array.push(tree.value)
      preOrderTraverse(tree.left, array)
      preOrderTraverse(tree.right, array)
      return array
  }
  
  function postOrderTraverse(tree, array = []) {
    // Base case
      if(tree === null) return
      
      postOrderTraverse(tree.left, array)
      postOrderTraverse(tree.right, array)
      array.push(tree.value)
      return array
  }
  