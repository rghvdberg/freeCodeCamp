function testElse(val) {
  var result = "";
  // Only change code below this line
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  // Only change code above this line
  return result;
}

console.log(testElse(4)); // should return the string 5 or Smaller
console.log(testElse(5)); // should return the string 5 or Smaller
console.log(testElse(6)); // should return the string Bigger than 5
console.log(testElse(10)); // should return the string Bigger than 5
