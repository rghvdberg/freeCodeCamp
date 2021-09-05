function rangeOfNumbers(startNum, endNum) {
  if (endNum <= startNum) return [startNum];
  const rangeArray = rangeOfNumbers(startNum, endNum - 1);
  rangeArray.push(endNum);
  return rangeArray;
}

console.log(rangeOfNumbers(6, 9));
