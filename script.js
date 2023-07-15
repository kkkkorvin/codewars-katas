// www.codewars.com/users/kkorvin

// String incrementer

function incrementString(str) {
  const index = str.match(/(\d+$)/)?.index;
  let number = str.match(/(\d+$)/)?.[0] ?? 0;
  const numLength = number.length;
  let newStr = str.slice(0, index) + `${++number}`.padStart(numLength, 0);
  return newStr;
}

console.log(incrementString("foobar009999"));
console.log(incrementString("fo99obar99"));
console.log(incrementString("foobar000"));
console.log(incrementString("foobar999"));
console.log(incrementString("foobar1"));
