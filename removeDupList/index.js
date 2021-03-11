//Write a function that removes duplicates from a sorted list

class LinkedList{
    constructor(value){
        this.value = value
        this.next = null
    }
}

function removeDuplicates(linkedList){
    let currentNode = linkedList
    while(currentNode !== null && currentNode.next !== null){
        if(currentNode.next.value === currentNode.value){
            currentNode.next = currentNode.next.next
        }else{
            currentNode = currentNode.next
        }
    }
    return linkedList
}