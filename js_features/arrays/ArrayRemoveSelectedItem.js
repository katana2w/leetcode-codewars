removeWithoutCopy = function(arr, item) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
            arr.splice(i, 1);
        }
    }
}