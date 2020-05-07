// https://www.youtube.com/watch?v=XSdr_O-XVRQ

function firstDublicate(arr) {
    let s = new Set();
    for (let i = 0; i < arr.length; i++) {
        if(s.has(arr[i])) {
           return arr[i]
        } else {
            s.add(arr[i])
        }
    }

    return -1;
}

function firstDublicate2(a) {
 for(let i = 0; i < a.length; i++) {
     if(a[Math.abs(a[i]) - 1] < 0) {
         return Math.abs(a[i])
     } else {
         a[Math.abs(a[i]) - 1] = -a[Math.abs(a[i]) - 1];
     }
 }
}

// console.log(firstDublicate([2,1,3,5,3,4,2]));
// console.log(firstDublicate2([2,1,3,5,3,4,2]));
console.log(firstDublicate2([4,1,2,5,3,4,2]));