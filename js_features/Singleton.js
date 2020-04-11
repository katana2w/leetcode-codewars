/*
* The most flexible, albeit somewhat advanced, approach involves using the Proxy object.
* The Proxy object is used to define so-called traps, methods that allow the definition of custom
* behavior for certain operations such as property lookup, assignment etc. The singleton pattern
* dictates that the given class can only have one instance, which means that the most useful trap
* is handler.construct(), the trap for the new operator.

As the handler is itself an object, we can use it to store the unique instance of the class we want,
* if it has been instantiated, while also providing a trap for the new operator via handler.construct().
* In doing so, we can create an object that can be easily reused for any class we want to convert
* into a singleton, while also allowing us to provide additional traps for any other operations we
* might want to customize.

Here's the most basic version of a function that takes a class and converts it into a singleton,
* based on the above explanation:
* */

const singletonify = (className) => {
    return new Proxy(className.prototype.constructor, {
        instance: null,
        construct: (target, argumentsList) => {
            if (!this.instance)
                this.instance = new target(...argumentsList);
            return this.instance;
        }
    });
}

class MyClass {
    constructor(msg) {
        this.msg = msg;
    }

    printMsg() {
        console.log(this.msg);
    }
}

MySingletonClass = singletonify(MyClass);

const myObj = new MySingletonClass('first');
myObj.printMsg();           // 'first'
const myObj2 = new MySingletonClass('second');
myObj2.printMsg();           // 'first'

/*
*In the above example, you can see that the second time MySingletonClass is instantiated,
* nothing happens, due to the fact that an instance already exists, so it is returned instead
* of a new object being created. While this is the minimum implementation of a singletonify function,
* it can easily be extended to modify the behavior even further or even use some of the data
* passed to the constructor in subsequent calls to update the instance it holds.
* */