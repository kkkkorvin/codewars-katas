// www.codewars.com/users/kkorvin

// String incrementer
console.log("-------------------------String incrementer-------------------");

function incrementString(str) {
  const index = str.match(/(\d+$)/)?.index;
  let num = str.match(/(\d+$)/)?.[0] ?? 0;
  const numLength = num.length;
  let newStr = str.slice(0, index) + `${++num}`.padStart(numLength, 0);
  return newStr;
}

console.log(incrementString("foobar009999"));
console.log(incrementString("fo99obar99"));
console.log(incrementString("foobar000"));
console.log(incrementString("foobar999"));
console.log(incrementString("foobar1"));

// Weight for weight (Quick Sort)
console.log(
  "-------------------------Weight for weight (Quick Sort)-------------------"
);

function orderWeight(str) {
  let arr = str.split(" ");

  const sort = function (list) {
    if (list.length <= 1) {
      return list;
    }

    const pivot = list[list.length - 1];
    const pivotWeight = pivot.split("").reduce((a, b) => +a + +b, 0);
    const leftList = [];
    const rightList = [];

    for (let i = 0; i < list.length - 1; i++) {
      let elementWeight = list[i].split("").reduce((a, b) => +a + +b, 0);
      if (elementWeight < pivotWeight) {
        leftList.push(list[i]);
      } else if (elementWeight == pivotWeight) {
        list[i] < pivot ? leftList.push(list[i]) : rightList.push(list[i]);
      } else {
        rightList.push(list[i]);
      }
    }

    return [...sort(leftList), pivot, ...sort(rightList)];
  };

  let sortedList = sort(arr).join(" ");

  return sortedList;
}

console.log(orderWeight("103 123 4444 999 2000"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
console.log(orderWeight("2 27 14 52 31 96 73 47 22 6"));

// First non-repeating character
console.log("-------------------First non-repeating character----------------");

function firstNonRepeatingLetter(s) {
  let lowerStr = s.toLowerCase();
  for (let i = 0; i < s.length; i++) {
    if (
      lowerStr.indexOf(lowerStr.charAt(i)) ==
      lowerStr.lastIndexOf(lowerStr.charAt(i))
    )
      return s.charAt(i);
  }
  return "";
}

console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("sTrEss"));
console.log(firstNonRepeatingLetter(""));
console.log(firstNonRepeatingLetter("XXXX"));

// Scramblies
console.log("-------------------Scramblies----------------");

function scramble(str1, str2) {
  let arr1 = str1.split("");
  const arr2 = str2.split("");
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    } else {
      return false;
    }
  }
  return true;
}

console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("katas", "steak"));
console.log(scramble("scriptjaavx", "javascript"));
console.log(scramble("commas", "commas"));
