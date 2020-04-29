var doSearch = function(array, targetValue) {
    var min = 0;
    var max = array.length - 1;
    var guess;

    while( min <= max ) {
        guess = Math.floor((min + max)/2);
        if (array[guess] === targetValue) {
            return guess;
        }
        if(array[guess] > targetValue) {
            max = guess - 1;
        } else {
            min = guess + 1;
        }
    }

    return -1;
};

console.log(doSearch( [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97] ,73));