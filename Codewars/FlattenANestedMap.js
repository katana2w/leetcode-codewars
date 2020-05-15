/*
* Write a function that takes a hierarchical map of properties and converts it to a single, flattened map, with the different levels separated by a forward slash ('/').

For example, given an input such as this:

{
  'a': {
    'b': {
      'c': 12,
      'd': 'Hello World'
    },
    'e': [1,2,3]
  }
}
return a new map:

{
  'a/b/c': 12,
  'a/b/d': 'Hello World',
  'a/e': [1,2,3]
}
The passed in argument will always be an object, but it may be empty. Make sure to correctly test for Arrays and nulls — they should be left as is in the result. The only property types will be:

true
false
Numbers
Strings
null
Arrays
Functions
Nested Maps
Keys can be any string of characters, excluding the '/' character.
* */


function flattenMap(map, way, res) {
    way = way || [], res = res || {};
    for (var key in map) {
        var arr = way.concat([key]);
        if ({}.toString.call(map[key]) == '[object Object]') {
            flattenMap(map[key], arr, res);
        } else {
            res[arr.join('/')] = map[key];
        }
    }
    return res;
}


var sampleMap = {
    'a': {
        'b': {
            'c': 12,
            'd': 'Hello World'
        },
        'e': [1,2,3]
    }
};

flattenMap(sampleMap);



function flattenMap(map) {
    var result = {};
    function recurse (cur, prop) {
        if (Object(cur) !== cur || Array.isArray(cur)) {
            return result[prop] = cur;
        }
        for (var p in cur) {
            recurse(cur[p], prop ? prop+"/"+p : p);
        }
    }
    recurse(map, "");
    return result;
}
