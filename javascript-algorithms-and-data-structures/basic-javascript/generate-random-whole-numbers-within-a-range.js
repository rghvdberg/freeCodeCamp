function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax + 1 - myMin)) + myMin;
  // Only change code above this line
}

for (var i = 0; i < 50; i++) {
  console.log(randomRange(10, 11));
}
