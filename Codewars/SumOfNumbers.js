/*
* Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
* */

//my solution
function getSum( a,b )
{
//    //Good luck!
    let valuePlus = 0;

    if (a === b) return a;
    if (Math.sign(b) === -1 && b < a) {
        for (let i = a; i >= b; i--) {
            valuePlus = valuePlus + i;
        }
    } else if(Math.sign(b) === -1 && b > a) {
        for (let i = a; i <= b; i++) {
            valuePlus = valuePlus + i;
        }

    } else if(Math.sign(b) === 1  && (b > a)) {
        for (let i = a; i <= b; i++) {
            valuePlus = valuePlus + i;
        }

    } else if (Math.sign(b) === 1 && (a > b)) {

        for (let i = a; i >= b; i--) {
            valuePlus = valuePlus + i;
        }

    } else if (Math.sign(b) === 0 && Math.sign(a) === -1) {

        for (let i = a; i <= b; i++) {
            valuePlus = valuePlus + i;
        }

    } else if (Math.sign(b) === 0 && Math.sign(a) === 1) {

        for (let i = a; i >= b; i--) {
            valuePlus = valuePlus + i;
        }

    }


    return valuePlus;
}

//best solution
function GetSum(a,b)
{
    return (Math.abs(a - b) + 1) * (a+b) / 2;
}