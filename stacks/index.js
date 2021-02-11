//Implementing Stacks (almost like linked list) --> LIFO (last In, first out)

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }
    //push method (adding a value to the top of a stack)
    push(val){
        var newNode = new Node(val)
        if(!this.first){
            this.first = newNode
            this.last = newNode
        }else{
            var temp = this.first
            this.first = newNode
            this.first.next = temp
        }
        return ++this.size;
    }

    //pop method (you remove value from the top of a stack)
    pop(){
        if(!this.first) return null
        var temp = this.first
        if(this.first === this.last){
            this.last = null
        }
        this.first  = this.first.next
        this.size --
        return temp.value
    }
}

var stack = new Stack()

stack.push('ikenna')
stack.push('tasha')
stack.push('mom')
stack.push('tobes')
stack.push('obiora')
stack.push('md')

console.log(stack)