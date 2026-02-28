const o = {
    'prop': 'bwahahah',
    'prop2': 'hweasa'
}

console.log('prop' in o) // true
console.log('prop1' in o) // false

console.log(o.hasOwnProperty('prop2')) // true
console.log(o.hasOwnProperty('prop1')) // false

console.log(o['prop']) // bwahahah
console.log(o['prop1']) // undefined


