function highAndLow(numbers){ /* mostra qual o maior e o menor número dentro de uma string de números*/
  
  let elements = numbers.split("");
  let result = [];
  
  for (let i = 0; i < elements.length; i++) {
    result.push(elements[i]); /* poe um elemento novo no array */ 
  }
  console.log(Math.max(...result) + " " + Math.min(...result)); /* pega maior e menor */
}
highAndLow("91234857")


  
