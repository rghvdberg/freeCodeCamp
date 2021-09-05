function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
console.log(testLogicalOr(0)); // should return the string Outside
console.log(testLogicalOr(9)); // should return the string Outside
console.log(testLogicalOr(10)); // should return the string Inside
console.log(testLogicalOr(15)); // should return the string Inside
console.log(testLogicalOr(19)); // should return the string Inside
console.log(testLogicalOr(20)); // should return the string Inside
console.log(testLogicalOr(21)); // should return the string Outside
console.log(testLogicalOr(25)); // should return the string Outside
