//Reverse a Linked List

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}
class linkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let newNode = new Node(val)
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length ++
        return this
    }
    reverse(){
        if(this.length === 0) return null
        let prev = null,
            curr = this.head,
            next;
        while(curr !== null){
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        return prev
    }
}

const list = new linkedList()
console.log(list.push(5))
console.log(list.push(6))
console.log(list.push("ikenna"))
console.log(list.push("tasha"))
console.log(list.push(50))
console.log(list)
console.log(list.reverse(this.head))






