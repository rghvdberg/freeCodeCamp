function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      break;
  }

  // Only change code above this line
  return answer;
}

console.log(caseInSwitch(1)); // should have a value of the string `alpha`
console.log(caseInSwitch(2)); // should have a value of the string `beta`
console.log(caseInSwitch(3)); // should have a value of the string `gamma`
console.log(caseInSwitch(4)); //  should have a value of the string `delta`
