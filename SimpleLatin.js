function pigIt(str){
  let newStr = '';
  str.split(' ').forEach((element) => {
    newStr += `${element.slice(1)}${element[0]}ay `;
  } );
  console.log(newStr[newStr.length -4])
  if (!/^[a-zA-Z]+$/.test(newStr[newStr.length -4])) {
    return newStr.slice(0, -3);
  } else if (newStr[newStr.length -1] === ' ') {
    return newStr.slice(0, -1);
  }
  return newStr
}

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('O tempora o mores !'))