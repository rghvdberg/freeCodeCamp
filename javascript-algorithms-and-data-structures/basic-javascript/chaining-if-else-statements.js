function testSize(num) {
  // Only change code below this line
  if (num < 5) return "Tiny";
  else if (num < 10) return "Small";
  else if (num < 15) return "Medium";
  else if (num < 20) return "Large";
  else if (num >= 20) return "Huge";
  // Only change code above this line
}

testSize(7);

for (var i = 0; i < 10; i++) {
  var foo = Math.floor(Math.random() * 25);
  console.log(foo);
  console.log(testSize(foo));
}
