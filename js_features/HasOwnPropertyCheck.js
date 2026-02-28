for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        // do stuff
    }
}

/*
*
* It's necessary because an object's prototype contains additional properties for the object which are technically part of the object. These additional properties are inherited from the base object class, but are still properties of obj.

hasOwnProperty simply checks to see if this is a property specific to this class, and not one inherited from the base class.

It's also possible to call hasOwnProperty through the object itself:

if (obj.hasOwnProperty(prop)) {
    // do stuff
}
But this will fail if the object has an unrelated field with the same name:

var obj = { foo: 42, hasOwnProperty: 'lol' };
obj.hasOwnProperty('foo');  // TypeError: hasOwnProperty is not a function
That's why it's safer to call it through Object.prototype instead:

var obj = { foo: 42, hasOwnProperty: 'lol' };
Object.prototype.hasOwnProperty.call(obj, 'foo');  // true
* */