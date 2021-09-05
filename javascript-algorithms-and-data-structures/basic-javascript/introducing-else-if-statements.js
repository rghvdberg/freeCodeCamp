function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else return "Between 5 and 10";
}

testElseIf(7);
console.log(testElseIf(0)); // should return the string Smaller than 5
console.log(testElseIf(5)); // should return the string Between 5 and 10
console.log(testElseIf(7)); // should return the string Between 5 and 10
console.log(testElseIf(10)); // should return the string Between 5 and 10
console.log(testElseIf(12)); // should return the string Greater than 10
