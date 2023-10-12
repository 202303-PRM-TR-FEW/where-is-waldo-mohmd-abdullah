const example = [
  ["A", "A", "A"],
  ["A", "A", "B"],
  ["A", "A", "A"]];

const whereIsWaldo = (matrix) => {
  const removeDuplicate = matrix.map(arr => [...new Set(arr)]);
  console.log("01", removeDuplicate);
  const locateRow = removeDuplicate.findIndex(el => el.length > 1)
  console.log("02", locateRow);
  const locateColumn = matrix[locateRow].findIndex(col => col != matrix[locateRow][0]);
  console.log(locateColumn);
  return [locateRow + 1, locateColumn + 1]
}
console.log(whereIsWaldo(example));
