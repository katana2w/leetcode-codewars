// Interface segregation principle

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     walk() {
//         console.log(`${this.name} can walk`)
//     }
//     fly() {
//         console.log(`${this.name} can fly`)
//     }
//     swim() {
//         console.log(`${this.name} can swim`)
//     }
// }
//
// class Dog extends Animal {
//     fly() {
//         return null;
//     }
// }
//
// class Eagle extends Animal {
//     swim() {
//         return null;
//     }
// }
//
// class Whale extends Animal {
//     fly() {
//         return null
//     }
//     walk() {
//         return null
//     }
// }
//
// const dog = new Dog('Rex')
//
// dog.walk()
// dog.swim()
// dog.fly()
//
// const eagle = new Eagle('Berkut')
//
// eagle.fly()
// eagle.swim()
// eagle.walk()
//
// const whale = new Whale('Big Blue Whale')
// whale.fly()
// whale.swim()
// whale.walk()

class Animal {
    constructor(name) {
        this.name = name
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} can swim`)
    }
}

const flyer = {
    fly() {
        console.log(`${this.name} can fly`)
    }
}

const walker = {
    walk() {
        console.log(`${this.name} can walk`)
    }
}

class Dog extends Animal {}
class Eagle extends Animal {}
class Whale extends Animal {}

Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Eagle.prototype, walker, flyer)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog('Rex')

dog.walk()
dog.swim()

const eagle = new Eagle('Berkut')

eagle.fly()
eagle.walk()

const whale = new Whale('Big Blue Whale')
whale.swim()
