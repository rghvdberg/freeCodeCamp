const { seq } = require("async");

function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
    default:
      answer = undefined;
      break;
  }

  // Only change code above this line
  return answer;
}

console.log(sequentialSizes(1)); //should return the string Low
console.log(sequentialSizes(2)); //should return the string Low
console.log(sequentialSizes(3)); //should return the string Low
console.log(sequentialSizes(4)); //should return the string Mid
console.log(sequentialSizes(5)); //should return the string Mid
console.log(sequentialSizes(6)); //should return the string Mid
console.log(sequentialSizes(7)); //should return the string High
console.log(sequentialSizes(8)); //should return the string High
console.log(sequentialSizes(9)); //should return the string High
console.log(sequentialSizes(10));
