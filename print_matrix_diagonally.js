function printdiagonally() {
    var matrix_len = matrix[0].length; //Assumption 1: Square matrix
    
    matrix[0].forEach(function(elem, index) {
        row = 0;
        col = index;
        printDiagonals(row, col);
    });
    
    [0, 1, 2, 3].forEach(function(elem) {
        row = elem;
        col = matrix_len - 1;
        printDiagonals(row, col);
    });
}

function printDiagonals(row, col) {
    var arr = [];    
    while (col > 0 && row < 4) {
        arr.push(matrix[row][col]);
        row++;
        col--
    }
    console.log(arr);
}

var matrix = [
              [1,2,3,4],
              [2,3,4,5],
              [3,4,5,6],
              [4,5,6,7]
             ];                  
printdiagonally(matrix);