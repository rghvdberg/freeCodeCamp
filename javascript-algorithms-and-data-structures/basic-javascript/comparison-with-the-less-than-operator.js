function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

console.log(testLessThan(0)); // should return the string Under 25
console.log(testLessThan(24)); // should return the string Under 25
console.log(testLessThan(25)); // should return the string Under 55
console.log(testLessThan(54)); // should return the string Under 55
console.log(testLessThan(55)); // should return the string 55 or Over
console.log(testLessThan(99)); // should return the string 55 or Over
