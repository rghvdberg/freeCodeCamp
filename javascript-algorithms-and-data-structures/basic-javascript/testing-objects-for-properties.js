function checkObj(obj, checkProp) {
  // Only change code below this line
  return obj.hasOwnProperty(checkProp) ? obj[checkProp] : "Not Found";
  // Only change code above this line
}

console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "pet"));
console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "house"));
console.log(checkObj({ city: "Seattle" }, "city"));
console.log(checkObj({ city: "Seattle" }, "district"));
console.log(checkObj({ pet: "kitten", bed: "sleigh" }, "gift"));
