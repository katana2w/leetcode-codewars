var arrayList =  ['a','b','c','d','e','f'];


// Method 1
arrayList = []
// Method 2
arrayList.length = 0;
// Method 3
arrayList.splice(0, arrayList.length);
// Method 4
while(arrayList.length){
    arrayList.pop();
}