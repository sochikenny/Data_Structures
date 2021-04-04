function basicHash(key, arrayLen){
    let total = 0
    for(let char of key){
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen
    }
    return total
}

// console.log(basicHash('pink', 10))
// console.log(basicHash('orangered', 10))


function betterHash(key, arrayLen){
    let total = 0
    let WIERD_PRIME = 31   //selecting a random prime number
    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i]
        let value = char.charCodeAt(0) - 96
        total = (total * WIERD_PRIME + value) % arrayLen 
    }
    return total
}

//--------------A simple hash table class-----------------//
class HashTable{
    constructor(size=53){
        this.keyMap = new Array(size)
        //keyMap is a new array being initialized
    }

    // hash method is basically taking a key and giving it an index
    // that could be used in the initialized array
    _hash(key){
        let total = 0
        let WIERD_PRIME = 31
        for(let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * WIERD_PRIME + value) % this.keyMap.length 
        }
        return total
    }

    //set method takes a key, hashes it to get its index and sets 
    // the value at the index in the initialized array
    set(key, value){
        let index = this._hash(key)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        }
        this.keyMap[index].push([key,value])
    }

    //get method takes a key, searches for the value in the key map array
    //then returns the value 
    get(key){
        let index = this._hash(key)
        if(this.keyMap[index]){//checking if there's something at this index, of not then we return undefined
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined //return undefined is there's nothing at the index
    }

    //values method returns a list of all the values in our table(array)
    values(){
        let valuesArr = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){ 
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr
    }

    //key method returns a list of all the keys in our table(array)
    keys(){
        let keysArr = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){ 
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr
    }

}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")



console.log(ht)
console.log(ht.keys())
console.log(ht.values())
console.log(ht.get('maroon'))
