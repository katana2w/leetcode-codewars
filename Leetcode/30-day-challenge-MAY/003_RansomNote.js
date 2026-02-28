/*
*Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
*
* */

var canConstruct = function(ransomNote, magazine) {
    let sransomNoteValue = ransomNote.split('');
    let magazineValue = magazine.split('');
    let map1 = new Map();
    let map2 = new Map();

    if(sransomNoteValue.length > magazineValue.length) return false;

    for(let i = 0; i < sransomNoteValue.length; i++) {
        if(map1.has(sransomNoteValue[i])) {
            map1.set(sransomNoteValue[i], map1.get(sransomNoteValue[i])+1);
        } else {
            map1.set(sransomNoteValue[i], 1);
        }
    }

    for(let i = 0; i < magazineValue.length; i++) {
        if(map2.has(magazineValue[i])) {
            map2.set(magazineValue[i], map2.get(magazineValue[i])+1);
        } else {
            map2.set(magazineValue[i], 1);
        }
    }

    for(let [key, value] of map1) {
        if(!map2.has(key) || (value > map2.get(key))) return false;
    }

    return true;
};

console.log(canConstruct('aa','ab'))