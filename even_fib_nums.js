/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  var sum = 0;
  const array = [];
  let previousNum = 1;
  let currentNum = 1;
  for (let i = 0; i < maxFibValue; i++) {
    newestNum = previousNum + currentNum;
    if (newestNum <= maxFibValue) {
      array.push(newestNum);
      previousNum = currentNum;
      currentNum = newestNum;
    } else {
      break;
    }
  }

  let evenNumbers = array.filter(num => num % 2 === 0);
  sum = evenNumbers.reduce((a, b) => a + b, 0);

  return sum;
}

// bonus round
function _highestFibonacciNumber(maxFibValue) {
  const array = [];
  let previousNum = 1;
  let currentNum = 1;
  for (let i = 0; i < maxFibValue; i++) {
    newestNum = previousNum + currentNum;
    if (newestNum <= maxFibValue) {
      array.push(newestNum);
      previousNum = currentNum;
      currentNum = newestNum;
    } else {
      break;
    }
  }
  return array.pop();
}

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};
