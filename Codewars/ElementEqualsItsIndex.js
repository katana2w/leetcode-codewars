/*
* Given a sorted array of distinct integers, write a function indexEqualsValue that returns the lowest index for which array[index] == index. Return -1 if there is no such index.

Your algorithm should be very performant.

[input] array of integers ( with 0-based nonnegative indexing )
[output] integer

Examples:
input: [-8,0,2,5]
output: 2 # since array[2] == 2

input: [-1,0,3,6]
output: -1 # since no index in array satisfies array[index] == index
Random Tests Constraints:
Array length: 200 000

Amount of tests: 1 000

Time limit: 150 ms

If you liked this Kata check out my more complex creations:

Find the neighbourhood in big dimensions. Neighbourhood collection

The Rubik's cube
*
* */

// function indexEqualsValue(a) {
//     let currentLow = -1;
//     let helperFunction = (start, stop, currentLow, a) => {
//         if (start > stop) {
//             return currentLow;
//         }
//         let mid = Math.floor(start - ((start- stop) / 2));
//         if (a[mid] == mid) {
//             currentLow = mid;
//             return helperFunction(start, mid-1, currentLow, a);
//         } else if (a[mid] > mid) {
//             return helperFunction(start, mid-1, currentLow, a);
//         } else {
//             return helperFunction(mid+1, stop, currentLow, a);
//         }
//     }
//     return helperFunction(0, a.length -1, currentLow, a);
// }

function indexEqualsValue(a) {
    let min = 0
    let max = a.length - 1
    while (min < max) {
        let i = Math.floor((min+max)/2)
        if (i <= a[i]) max = i
        else min = i + 1
    }
    return a[max] === max ? max : -1
}

indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15])

// describe("Element equals its index",()=>{
//     it("example tests",()=>{
//         Test.assertEquals( indexEqualsValue([-8,0,2,5]), 2 );
//         Test.assertEquals( indexEqualsValue([-1,0,3,6]), -1 );
//         Test.assertEquals( indexEqualsValue([-3,0,1,3,10]), 3 );
//         Test.assertEquals( indexEqualsValue([-5, 1, 2, 3, 4, 5, 7, 10, 15]), 1 );
//         Test.assertEquals( indexEqualsValue([9,10,11,12,13,14]), -1 );
//         Test.assertEquals( indexEqualsValue([0]), 0 );
//     });
// });