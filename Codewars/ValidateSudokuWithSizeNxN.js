/*
*  Description:
Given a Sudoku data structure with size NxN, N > 0 and √N == integer, write a method to validate if it has been filled out correctly.

The data structure is a multi-dimensional Array, i.e:

[
  [7,8,4,  1,5,9,  3,2,6],
  [5,3,9,  6,7,2,  8,4,1],
  [6,1,2,  4,3,8,  7,5,9],

  [9,2,8,  7,1,5,  4,6,3],
  [3,5,7,  8,4,6,  1,9,2],
  [4,6,1,  9,2,3,  5,8,7],

  [8,7,6,  3,9,4,  2,1,5],
  [2,4,3,  5,6,1,  9,7,8],
  [1,9,5,  2,8,7,  6,3,4]
]
Rules for validation

Data structure dimension: NxN where N > 0 and √N == integer
Rows may only contain integers: 1..N (N included)
Columns may only contain integers: 1..N (N included)
'Little squares' (3x3 in example above) may also only contain integers: 1..N (N included)
*
*
* */

var Sudoku = function(data)
{
    //   Private methods
    // -------------------------
    var N = data.length;
    var rootN = Math.floor(Math.sqrt(N));

    var isValidSubSudoku = function(leftX, leftY, size) {
        var sudokuTracker = {};
        for (var j = leftX; j < leftX+size; j++) {
            for (var k = leftY; k < leftY+size; k++) {
                if (typeof data[j][k] === 'number' && data[j][k] >= 1 && data[j][k] <= N) {
                    sudokuTracker[data[j][k]] = true;
                } else {
                    return false;
                }
            }
        }
        return Object.keys(sudokuTracker).length === N;
    }


    //   Public methods
    // -------------------------
    return {
        isValid: function() {
            if (rootN !== Math.sqrt(N)) { return false; }
            for (var r = 0; r < N; r+= rootN) {
                for (var c = 0; c < N; c+= rootN) {
                    var isValid =  isValidSubSudoku(r, c, rootN);
                    if (isValid === false) return false;
                }
            }
            return true;
        }
    };
};
