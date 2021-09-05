// Setup
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(10)); // should return the string Not Equal
console.log(testStrict(7)); // should return the string Equal
console.log(testStrict("7")); //should return the string Not Equal
