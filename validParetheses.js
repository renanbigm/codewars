function validParentheses(parens) {
  let verifyParens = [];
  for (let i of parens.split('')) {
    if (i === '(') {
      verifyParens.push(i);
    } else {
      if (verifyParens.length > 0) {
        verifyParens.pop();
      } else {
        verifyParens.push(i);
        break;
      }
    }
  }
  return verifyParens.length === 0 ? true : false;
}

console.log(validParentheses('()))'));

// function validParentheses(parens){
//   var n = 0;
//   for (var i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++;
//     if (parens[i] == ')') n--;
//     if (n < 0) return false;
//   }
  
//   return n == 0;
// }