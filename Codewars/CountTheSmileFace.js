/*
*Description:
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :]

Example cases:

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note: In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same
Happy coding!
*
*
* */


// MY SOLUTION

//return the total number of smiling faces in the array
function countSmileys(arr) {
    if(arr.length === 0) return 0;
    return flat = arr.reduce((acc, it) => {
        let charFirst = it.toString().charAt(0);
        let charLast = it.toString().charAt(it.length - 1);
        let itLength = it.length;
        if (itLength > 3 || itLength < 2) return acc;
        if((charFirst === ';' || charFirst ===':') && (charLast === ')' || charLast === 'D')) {
            if(it.length === 3 && (it.toString().charAt(1) === '-' || it.toString().charAt(1) === '~')) {
                return acc + 1
            }
            if (it.length === 2) {
                return acc + 1
            }
        }

        return acc;
    }, 0);
}

// countSmileys([';D' , ':D' , ';>' , ';(' , ';~)' , ':>' , ':~('])
countSmileys([';)' , ':~>' , ';(' , ':~)' , ':)' , ':o)' , ';D'])


//BEST SOLUTION

function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}


const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);
