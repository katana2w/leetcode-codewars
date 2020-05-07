/*
Description:
An array is called zero-plentiful if it contains at least one 0 and every sequence of 0s is of length at least 4. 
Your task is to return the number of zero sequences if the given array is zero-plentiful else 0.
*/


function zeroPlentiful(arr) {
    var z = arr.join('').split(/[^0]/).filter(e=>e!='')
    return z.every(e=>e.length>3) ? z.length : 0;
}

zeroPlentiful=a=>(a=>a.every(a=>a.length>3)?a.length:0)(a.join``.match(/0+/g)||[])

function zeroPlentiful(arr){
c=s=d=0
for(v of arr)
    if(v==0)
    ++d&&(++c)==4&&s++
    else if(d>0&&d<4)return 0
    else d=c=0
if(d>0&&d<4)return 0
return s;
}