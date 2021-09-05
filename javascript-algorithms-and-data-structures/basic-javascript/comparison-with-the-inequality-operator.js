// Setup
function testNotEqual(val) {
  if (val != 99) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10));
console.log(testNotEqual(99)); // should return the string Equal
console.log(testNotEqual("99")); // should return the string Equal
console.log(testNotEqual(12)); //should return the string Not Equal
console.log(testNotEqual("12")); // should return the string Not Equal
console.log(testNotEqual("bob")); // should return the string Not Equal
