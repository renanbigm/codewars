function findOdd(A) {
  for (let i of A) {
    let counter = A.reduce((acc, curr) => i === curr ? acc += 1 : acc , 0);
    if (counter % 2 === 1) {
      return i;
    }
  }
}
console.log(findOdd([1,1,2,-2,5,2,4,4,5]));