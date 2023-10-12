const example =   [["O", "O", "O", "O"],
["O", "O", "O", "O"],
["O", "O", "O", "O"],
["O", "O", "O", "O"],
["O", "O", "O", "O"],
["P", "O", "O", "O"]]

const whereIsWaldo = (matrix) => {
  const removeDuplicate = matrix.map(arr => [...new Set(arr)]);
  const locateRow = removeDuplicate.findIndex(el => el.length > 1);
  const locateColumn = matrix[locateRow].findIndex(col => col != matrix[locateRow != matrix.length -1 ? locateRow + 1 : locateRow - 1][matrix[locateRow].length - 1]);
  return [locateRow + 1, locateColumn + 1]
}
console.log(whereIsWaldo(example));
