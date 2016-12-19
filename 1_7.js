// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column is set to 0.

var matrix = [[1,2,3],[4,0,6],[7,8,9]];
console.log(matrix);
r = matrix.length;
c= matrix[0].length;
var r_arr = new Array(r).fill(0);
var c_arr = new Array(c).fill(0);
for(var i=0;i<r;i++){
  for(var j=0;j<c;j++){
    if(matrix[i][j] === 0){
      r_arr[i] = 1;
      c_arr[j] = 1;
    }
  }
}
console.log(r_arr);
console.log(c_arr);
for(var i=0;i<r_arr.length;i++){
  if(r_arr[i]===1){
    for(var j=0;j<c_arr.length;j++){
     matrix[i][j] = 0; 
    }
  }
}
for(var i=0;i<c_arr.length;i++){
  if(c_arr[i]===1){
    for(var j=0;j<r_arr.length;j++){
     matrix[j][i] = 0; 
    }
  }
}

console.log(matrix);