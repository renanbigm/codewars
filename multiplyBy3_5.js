function solution(number){
  let result = 0;
  for (let i = number - 1; i >= 3; i -=1) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }  
  return result;
}

console.log(solution(10));