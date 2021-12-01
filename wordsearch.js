const wordSearch = (letters, word) => {
  const transpose = function(matrix) {
    let result = [];
    for (let i = 0; i < matrix[0].length; i++) {
      let col = [];
      for (let j = 0; j < matrix.length; j++) {
        col.push(matrix[j][i]);
      }
      result.push(col);
    }
    return result;
  };
  const matrix = transpose(letters);//transformed martrix

  const horizontalJoin = letters.map(ls => ls.join(''));

  for (let l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalJoin = matrix.map(ls => ls.join(''));

  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};
module.exports = wordSearch;