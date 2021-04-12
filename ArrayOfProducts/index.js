function arrayOfProducts(array) {
    let result = []
    for(let i = 0; i < array.length; i++){
		let multiplier = 1
        for(let j = 0; j < array.length; j++){
            if(i!==j){
                multiplier *= array[j]
            }
            result[i] = multiplier
        }
    }
    return result
}


//Optimal Solution
function arrayOfProducts(array) {
    
      let products = new Array(array.length).fill(1)
      let leftProducts = new Array(array.length).fill(1)
      let rightProducts = new Array(array.length).fill(1)
      
      //constructing our left product array
      let leftRunProduct = 1
      for (let i = 0; i < array.length; i++){
          leftProducts[i] = leftRunProduct
          leftRunProduct *= array[i]
      }
      
      //constructing our right product array
      let rightRunProduct = 1
      for(let i = array.length - 1; i > -1; i--){
          rightProducts[i] = rightRunProduct
          rightRunProduct *= array[i]
      }
      
      for (let i = 0; i < array.length; i++){
          products[i] = leftProducts[i] * rightProducts[i]
      }
      
      return products 
  }

//More Optimal
  function arrayOfProducts(array) {
    
      const products = new Array(array.length).fill(1)
      
      let leftRunProduct = 1
      for(let i=0; i < array.length; i++){
          products[i] = leftRunProduct
          leftRunProduct *= array[i]
      }
      
      let rightRunProduct = 1
      for(let i=array.length - 1; i > -1; i--){
          products[i] *= rightRunProduct
          rightRunProduct *= array[i]
      }
      
      return products
  }
  

console.log(arrayOfProducts([5,1,4,2]))