// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];

  // Only change code above this line
  return result;
}
foo = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot"];
for (bar in foo) {
  
  console.log(foo[bar]);
  console.log(phoneticLookup(foo[bar]));
}
// console.log(phoneticLookup("charlie"));
