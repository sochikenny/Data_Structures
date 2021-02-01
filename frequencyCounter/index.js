//Write a function called SAME, which accepts two arrays. The function should return true if every value in the
//array has it's corresponding value squared in the second array. The frequency of the values must be the same

//Examples: same([1,2,3], [4,1,9])-> true; same([1,2,3], [1,9])-> false; same([1,2,1], [4,4,1])-> false

//Solution(hint: when you are trying to count stuff, you initialize an object)
function same(arr1, arr2){
    if(arr1.length !== arr2.length)
    return false; 

    let obj1 = {}
    let obj2 = {}

    for (let val of arr1){
        obj1[val] ? obj1[val] += 1 : obj1[val] = 1
    } //basically if the val in array 1 is in object 1 then add 1, if not, set it to 1

    for (let val of arr2){
        obj2[val] ? obj2[val] += 1 : obj2[val] = 1
    }//basically if the val in array 2 is in object 2 then add 1, if not, set it to 1

    for (let key in obj1){ //At this point, we are generically comparing the objects(using their keys and values)
        if(!(key ** 2 in obj2)){
            return false
        }
        if(obj2[key ** 2] !== obj1[key]){
            return false
        }
    }
    return true
}

console.log(same([1,2,3], [4,1,9]))
console.log(same([1,2,3], [1,9]))
console.log(same([1,2,1], [4,4,1]))