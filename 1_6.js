// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

var matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(matrix);
var layer = 0;
var _top = 0;
var n = matrix.length;
for (var layer =0;layer<n/2;layer++){
  first = layer;
  last = n - 1 - layer;
  for(var i = first;i<last;i++){
    offset = i - first;
    _top = matrix[first][i];
    matrix[first][i] = matrix[last - offset][first];
    matrix[last-offset][first] = matrix[last][last-offset];
    matrix[last][last-offset] = matrix[i][last];
    matrix[i][last] = _top;
  }
}
console.log(matrix);