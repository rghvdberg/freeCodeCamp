function chainToSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }

  // Only change code above this line
  return answer;
}

console.log(chainToSwitch("bob")); // should be the string Marley
console.log(chainToSwitch(42)); // should be the string The Answer
console.log(chainToSwitch(1)); // should be the string There is no #1
console.log(chainToSwitch(99)); // should be the string Missed me by this much!
console.log(chainToSwitch(7)); // should be the string Ate Nine
console.log(chainToSwitch("John")); // should be "" (empty string)
console.log(chainToSwitch(156)); // should be "" (empty string)
