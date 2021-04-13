/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const currentArr = String(n).split('');
  const arr1 = [];
  for (let i = 0; i < currentArr.length; i++) {
    arr1.push(currentArr.filter((elem, index) => {
      if (i === index) {
        return false;
      }
      return true;
    }));
  }
  return arr1.reduce((accumulator, currentValue) => {
    const p = currentValue.join('') * 1;
    let accum;
    if (Array.isArray(accumulator)) {
      accum = accumulator.join('') * 1;
    } else { accum = accumulator; }
    if (accum <= p) {
      accum = p;
      return accum;
    } return accum;
  });
}

module.exports = deleteDigit;
