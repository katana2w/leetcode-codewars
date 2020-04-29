/*
* There is a secret string which is unknown to you. Given a collection of random triplets from
* the string, recover the original string.

A triplet here is defined as a sequence of three letters such that each letter occurs somewhere
* before the next in the given string. "whi" is a triplet for the string "whatisup".

As a simplification, you may assume that no letter occurs more than once in the secret string.

You can assume nothing about the triplets given to you other than that they are valid triplets
* and that they contain sufficient information to deduce the original string. In particular, this
* means that the secret string will never contain letters that do not occur in one of the
* triplets given to you.
*
* */

// const recoverSecret = (triplets) => {
//     let duplets = [];
//     let res = '';
//
//     /*
//       convert triplets to duplets
//      */
//     triplets.forEach(trip => {
//         let str = trip.join('');
//         let d1 = str.substr(0,2);
//         let d2 = str.substr(1,3);
//         if (duplets.indexOf(d1) === -1) { duplets.push(d1); }
//         if (duplets.indexOf(d2) === -1) { duplets.push(d2); }
//     });
//
//     let nxt = findNext(duplets);
//     while (nxt) {
//         res += nxt;
//         duplets = duplets.filter(d => d.indexOf(nxt) === -1);
//         nxt = findNext(duplets);
//     }
//
//     return res;
// }
//
// /**
//  * Return the first letter of the secret word.
//  */
// function findNext(duplets) {
//     // 1st char is not the 2nd char in any duplet
//     let nxt = duplets.find(d => duplets.every(_d => d[0] !== _d[1]));
//     return duplets.length > 1 ? nxt[0] : duplets[0];
// }

var recoverSecret = function(triplets) {
    for(var [first] of triplets)
    {
        if (triplets.every(tuple => tuple.indexOf(first) <= 0))
        {
            triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
            return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
        }
    }
    return '';
}

secret1 = "whatisup"
triplets1 = [
    ['t','u','p'],
    ['w','h','i'],
    ['t','s','u'],
    ['a','t','s'],
    ['h','a','p'],
    ['t','i','s'],
    ['w','h','s']
]

console.log(recoverSecret(triplets1))