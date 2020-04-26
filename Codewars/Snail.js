/*
*Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*
*
* */

// MY DESICION

snail = function(array) {
    let resultArray = [];

    let topRight = function() {
        resultArray = [...resultArray, ...array[0]];
        array.shift();
        if(array && array.length) {
            let m = array[0].length
            for(let i = 0; i < array.length; i++){
                resultArray.push(array[i][m-1]);
                array[i].pop();
            }
        }
    }

    let buttomLeft = function() {
        let n = array && array.length;
        if(n) {
            resultArray = [...resultArray, ...array[n - 1].reverse()];
            array.pop();
            let m = array[0] && array[0].length
            for(let i = (array.length - 1); i >= 0; i--){
                resultArray.push(array[i][0]);
                array[i].shift();
            }
        }
    }

    let x = array.length, y = array[0].length;
    while(x && y) {
        topRight();
        buttomLeft();
        x = array.length;
        if(x) y = array[0].length;
    }

    return resultArray;
}

// BEST DESICION

function snail(array) {
    var vector = [];
    while (array.length) {
        vector.push(...array.shift());
        array.map(row => vector.push(row.pop()));
        array.reverse().map(row => row.reverse());
    }
    return vector;
}


console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))