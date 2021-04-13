/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let count = 0;
  const arr1 = [];
  const arr2 = arr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr1.push(arr[i]);
    }
  }
  arr1.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr2[i] = arr1[count];
      count += 1;
    }
  }
  return arr2;
}

module.exports = sortByHeight;
