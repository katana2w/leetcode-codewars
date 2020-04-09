/*
* Given: an array containing hashes of names

Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

Example:

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

list([ {name: 'Bart'} ])
// returns 'Bart'

list([])
// returns ''
* */

//my solution
function list(names){
    let arrayNames = []
    for (let nameObf of names) {
        arrayNames.push(nameObf.name)
    }

    if(arrayNames.length > 0) {
        let stringValue = arrayNames.join(', ');
        if (stringValue.lastIndexOf(', ') !== -1) {
            console.log(stringValue, stringValue.lastIndexOf(', '));
            stringValue = stringValue.substring(0, stringValue.lastIndexOf(', ')) + ' & ' + stringValue.substring(stringValue.lastIndexOf(', ') + 2)
        }
        return stringValue
    } else {
        return ''
    }
}

//bets solution
var list = (names) =>  names.map(x => x.name).join(', ').replace(/(.*),(.*)$/, "$1 &$2")