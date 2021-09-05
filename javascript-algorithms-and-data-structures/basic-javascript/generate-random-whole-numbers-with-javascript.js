function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

for (var i = 0; i < 10; i++) {
  console.log(randomWholeNum());
}
