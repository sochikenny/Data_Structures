/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example:
Input: s = "()"
Output: true

Example:
Input: s = "()[]{}"
Output: true

Example:
Input: s = "([)]"
Output: false

Example:
Input: s = "{[]}"
Output: true
*/

/*
Approach:
1) create an stack
2) Loop through the input string
    - In this loop, if each item is open (ex. '(', '{', '[' ) push it to the stack
    - Otherwise, we can check if the stack has something in it and that the item you are on in the loop is a closing item(opposite of the open item) and 
    that the last item in the stack is the open item that corresponds to it, then we pop the last item off the stack. 
    -if this aint the case in the loop, then return false
3) Once we have broken out of the loop, we can return a boolean for stack.length===0. This is because, for the stack to have nothing in it, then every open and closed bracked has to correspond perfectly.
*/

function isValid(s){
    let stack = [];
    for(let char of s){
        if(char==='(' || char==='{' || char==='['){
            stack.push(char);
        } else if(stack.length && char===')' && stack[stack.length-1]==='('){
            stack.pop()
        } else if(stack.length && char==='}' && stack[stack.length-1]==='{'){
            stack.pop()
        } else if(stack.length && char===']' && stack[stack.length-1]==='['){
            stack.pop()
        } else{
          return false;  
        } 
    }
    return stack.length===0;
}