// Setup
function compareEquality(a, b) {
  if (a === b) {
    // Change this line
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, 10));
console.log(compareEquality(10, "10")); // should return the string Not Equal
console.log(compareEquality("20", 20)); // should return the string Not Equal
