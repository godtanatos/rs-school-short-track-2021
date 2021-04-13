/*
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const a1 = Array.from(s1);
  const a2 = Array.from(s2);
  let a3 = [];
  a3 = a1.filter((n) => {
    if (a2.indexOf(n) !== -1) {
      a2[a2.indexOf(n)] = 0;
      return true;
    } return false;
  });
  return a3.length;
}

module.exports = getCommonCharacterCount;
