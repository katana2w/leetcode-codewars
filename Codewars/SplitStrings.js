/*
* Description:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

solution('abc') // should return ['ab', 'c_']
solution('abcdef') // should return ['ab', 'cd', 'ef']
* */
//my solution
function solution(str){
    let resultArray = [];
    if (str.length === 0) return resultArray;

    while (str.length > 1) {
        resultArray.push(str.substring(0,2));
        str = str.substring(2);
    }
    if(str.length > 0) resultArray.push(str + "_");

    return resultArray;
}

//best solution
function solution(str) {
    return (str.length % 2 ? str + '_' : str).match(/../g);
}

console.log(solution('abc'));
console.log(solution('abcdef'));