// Only change code below this line
function countdown(n) {
  console.log(n);
  if (n < 1) return [];
  const countArray = countdown(n - 1);
  console.log(countArray);
  countArray.unshift(n);

  return countArray;

  // return n < 1 ? [] : [n].concat(countdown(n - 1));
}
// Only change code above this line

console.log(countdown(5));
