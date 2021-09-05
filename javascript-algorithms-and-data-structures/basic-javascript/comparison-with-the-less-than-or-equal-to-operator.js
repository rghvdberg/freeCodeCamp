console.log(testLessOrEqual(0)); // should return the string Smaller Than or Equal to 12
console.log(testLessOrEqual(11)); // should return the string Smaller Than or Equal to 12
console.log(testLessOrEqual(12)); // should return the string Smaller Than or Equal to 12
console.log(testLessOrEqual(23)); // should return the string Smaller Than or Equal to 24
console.log(testLessOrEqual(24)); // should return the string Smaller Than or Equal to 24
console.log(testLessOrEqual(25)); // should return the string More Than 24
console.log(testLessOrEqual(55)); // should return the string More Than 24

function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
