// Setup
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
console.log(testStrictNotEqual(17)); //should return the string Equal
console.log(testStrictNotEqual("17")); //should return the string Not Equal
console.log(testStrictNotEqual(12)); //should return the string Not Equal
console.log(testStrictNotEqual("bob")); //should return the string Not Equal
