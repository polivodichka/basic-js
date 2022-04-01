const { NotImplementedError } = require('../extensions/index.js');

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
 function renameFiles(names) {
  if (names.length === 0) return [];
  
  let new_names = [names[0]];
  for (let i =1; i<names.length; i++){
    new_names.push(new_names.indexOf(names[i]) === -1?names[i]:createNewName(new_names, names[i]));
  }
  return new_names;
}

function createNewName(new_names, name){
  let i = 1;
  let new_name = name + `(${i})`;
  while(new_names.indexOf(new_name)>-1){
    i++;
    new_name = name + `(${i})`
  }
  return new_name;
}

module.exports = {
  renameFiles
};
