/*

The alphabetized kata
Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") // "BbeehHilloTy"

*/

// function alphabetized(s) {
//     //var splitIntoLetters = s.split(/\s|!|@|#|\$|%|\^|\&|\*|_|\+|\-|\=|\(|\)/g);
//    var regex = /[\W_|0-9]+/g
//    var str = s.replace(regex, '');
//    var splitIntoLetters  = str.split('')
 
//    var finalAr = [];
 
//    for(var i = 0; i < splitIntoLetters.length; i++) {
 
 
//      if(splitIntoLetters[i].toUpperCase() === splitIntoLetters[i] ) {
//        finalAr.push(splitIntoLetters[i]);
//      } else {
//        finalAr.push(splitIntoLetters[i])
//      }
     
//      finalAr.sort(function(a,b) { 
//        var aCharCode = a.toLowerCase().charCodeAt(0);
//        var bChardCode = b.toLowerCase().charCodeAt(0);
     
//        if(aCharCode !== bChardCode) {
//          return aCharCode - bChardCode
//        }
      
//        if(splitIntoLetters.indexOf(a) > splitIntoLetters.indexOf(b) ) {
//          return 1
//        }
 
//      });
     
   
//    }
//    return finalAr.join('');
//  }


 // function alphabetized(s) {
 //    var ans="";
 //    for (var i=97; i<123; ++i){
 //        for (var j=0; j<s.length; j++) {
 //            if (s[j].toLowerCase().charCodeAt()==i) {
 //                ans+=s[j]
 //            }
 //        }
 //    }
 //
 //    return ans
 //  }


//    const alphabetized = s =>"abcdefghijklmnopqrstuvwxyz".split('').map(e=> (s.match(new RegExp(e,"gi"))||[]  ).join('') ).join('')

function alphabetized(s) {
    let res = "abcdefghijklmnopqrstuvwxyz".split('');
    let res2 = res.map(e=> (s.match(new RegExp(e,"gi"))||[]  ).join('') );
    return res2.join('')

}

console.log(alphabetized("The Holy Bible"));