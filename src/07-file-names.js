/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(array) {
  const array2 = array;
  array.forEach((element, index) => {
    let numbRepeat = 0;
    for (let i = index + 1; i < array.length - index; i++) {
      if (element === array2[i]) {
        numbRepeat += 1;
        array2[i] = `${element}(${numbRepeat})`;
      }
    }
  });
  return array2;
}

module.exports = renameFiles;
