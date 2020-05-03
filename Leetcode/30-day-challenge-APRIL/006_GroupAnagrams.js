/*
* Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
* */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function(strs) {
    let group = [];
    let mapObject = new Map();
    for(let strItem of strs) {
        let keyItem = sorts(strItem);
        if(!mapObject.has(keyItem)) {
            mapObject.set(keyItem, [strItem])
        } else {
            mapObject.get(keyItem).push(strItem);
        }

    }
    return [...mapObject.values()];

}
    // doesnt work with very big arrays
    //
    //
    // for (let i = 0; i < strs.length; i++) {
    //     let tempLength = group.length;
    //     let tempCheckVar = false;
    //     for(let kk = 0; kk <= tempLength; kk++) {
    //         let tempVar = group[kk] ? group[kk][0].toString() : false
    //         if ((tempVar === '' && strs[i] === '') || tempVar && (strs[i].length === tempVar.length) && (sorts(strs[i]) === sorts(tempVar)) ) {
    //             group[kk].push(strs[i]);
    //             tempCheckVar = true;
    //             break;
    //         }
    //     }
    //     if (!tempCheckVar) group.push([strs[i]]);
    // }


    // doesnt work with very big arrays
    //
    //
    // while (strs.length > 0) {
    //     let newArra = strs.filter(a => {
    //         if (a.length === strs[0].length) {
    //             return sorts(a) === sorts(strs[0]);
    //         }
    //     });
    //     // console.log('newArra', newArra);
    //     strs = strs.filter(a => {
    //         // console.log('a', a);
    //         // console.log('a.length === strs[0].length', true);
    //         // if (a.length === strs[0].length) {
    //             return sorts(a) !== sorts(strs[0]);
    //         // }
    //     });
    //     // console.log('strs', strs);
    //     group.push(newArra);
    //
    // }



function sorts(string) {
    return string.split('').sort().join('');
}

// console.log(groupAnagrams(["", ""]))
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))