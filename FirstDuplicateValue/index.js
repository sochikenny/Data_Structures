//Solution 1
function firstDuplicateValue(array) {
   let seen = new Set()

   for(let i = 0; i < array.length; i++){
       let value = array[i]
       if(seen.has(value)){
           return value
       }else{
           seen.add(value)
       }
   }
      return -1
}


//Solution 2
function firstDuplicateValue(array) {
   let object = {}

   for(let i = 0; i < array.length; i++){
       let value = array[i]
       if(value in object){
           return value
       }else{
           object[value] += 1
       }
   }
      return -1
}


//Solution 3
function firstDuplicateValue(array) {

   for(let i = 0; i < array.length; i++){
       let absValue = Math.abs(array[i])
       let index = absValue - 1
       if(array[index] < 0){
           return absValue
       }
       array[index] *= -1
   }
      return -1
}