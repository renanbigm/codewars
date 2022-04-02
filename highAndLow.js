function highAndLow(numbers){
  
    let elements = numbers.split(" ");
    let result = [];
  
    for (let i = 0; i < elements.length; i++) {
      result.push(elements[i]); 
    }
    return Math.max(...result) + " " + Math.min(...result); 
}

console.log(highAndLow("98768135"))
  
