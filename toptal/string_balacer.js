// Task Description
// An S string is built up from "+" and "-" characters exclusively. The balance of such string is the number of all plus characters subtracted by the number of all minus characters within S.
//
// For example the balance of "++-+" is 2 and the balance of "+-+-" is 0.
//
// You can modify the account balance by removing the rightmost character. This result can be further modified using this same method until the resulting string is empty.
//
// Your task is to write a function that accepts String S and Integer N. This function returns the minimum number of removals necessary for the balance to become greater than or equal to N. If the desired balance isn’t achievable the function should return -1.
//
// Example:
// possibleBalance("++-", 2) // should return 1

function possibleBalance(strWIthChars, numBalance) {
    //+++-----
    let arrChars = strWIthChars.split('');
    let totalLength = arrChars.length;

    let currBalance = currentBalance(arrChars);

    if (currBalance >= numBalance) {
        return 0;
    }
    // currentBalance = -3 numBalance = 2
    for(let i = 1; i < totalLength; i++) {
        arrChars.length = totalLength - i;
        let updatedCurrBalance = currentBalance(arrChars);
        if (updatedCurrBalance >= numBalance) {
            return i;
        }
    }
    return -1;

}

function currentBalance(arrChars) {
    let arrPluses = arrChars.filter(item => item === '+');
    let arrMinuses = arrChars.filter(item => item === '-')

    let arrPlusesLength = arrPluses.length;
    let arrMinusesLength = arrMinuses.length;

    return (arrPlusesLength - arrMinusesLength);
}

console.log(possibleBalance("++-", 2));
