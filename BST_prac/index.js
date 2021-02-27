class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST{
    constructor(){
        this.root = null
    }
    insert(value){
        let newNode = new Node(value)   //create a new node 
        if(!this.root){           //if there's no root, then new node becomes root
            this.root = newNode
            return this
        }
        let currentNode = this.root   //Now set root to a var name currentNode
        while(true){                  //initialize a while loop
            if(value === currentNode.value) //if you find value, return null
            return undefined
            if(value < currentNode.value){    //if value is less than currentNode value,
                if(currentNode.left === null){  //and if the left value is null(non-existent), 
                    currentNode.left = newNode  //make that the new Node
                    return this
                }
                currentNode = currentNode.left //otherwise, keep going to the left of the value
            }else{                             
                if(currentNode.right === null){   //EVERYTHING THAT WAS DONE ON THE LEFT IS DONE 
                    currentNode.right = newNode   //ON THE RIGHT AS WELL
                    return this
                }
                currentNode = currentNode.right
            }
        }
    }
    search(value){
        if(!this.root) return false
        let current = this.root
        let found = false
        while(current && !found){
            if(value < current.value){
                current = current.left
            }else if(value > current.value){
                current = current.right
            }else{
                return true
            }
        }
        return false
    }
}

const binSearchTree = new BST()
binSearchTree.insert(5)
binSearchTree.insert(6)
binSearchTree.insert(7)
binSearchTree.insert(10)
binSearchTree.insert(4)
binSearchTree.insert(13)
const find_10 = binSearchTree.search(10)

console.log(binSearchTree)
console.log(find_10)
