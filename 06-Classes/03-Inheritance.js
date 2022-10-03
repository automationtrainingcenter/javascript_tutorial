/*
Prior to ES6 we can achieve inheritance using prototypal inheritance.
ES6 simplified these steps by using the extends and super keywords
*/

class Animal {
    constructor(legs) {
        this.legs = legs;
    }

    walk() {
        console.log(`walking on ${this.legs} legs`);
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs); // calling parent class constructor from child class.
    }

    fly() {
        console.log('Flying');
    }
}

b = new Bird(2);
b.walk()
b.fly()


class Dog extends Animal {
    constructor(legs, breed) {
        super(legs);
        this.breed = breed;
    }

    getBreed() {
        console.log(`Breed is ${this.breed}`);
    }
}

d = new Dog(4, 'Puppy');
d.walk()
d.getBreed()

// shadowning methods: ES 6 allows same method in parent and child classes
class Fish extends Animal {
    constructor() {
        super(0);
    }

    swim() {
        console.log("Swimming");
    }

    walk() {
        super.walk(); // calling parent class method
        console.log('Fish can not walk');
    }
}

f = new Fish();
f.walk()
f.swim()

// NOTE: child class object inherit the parent class static members also
class Parent {
    constructor() {
        console.log(`Parent class object created`);
    }

    instance() {
        console.log(`instance method and this is ${this}`);
    }

    static staticMethod() {
        console.log(`static method and this is ${this}`);
    }
}

class Child extends Parent {
    constructor() {
        super();
        console.log('Child class object created');
    }

    childMethod() {
        console.log(`child class method and this is ${this}`);
    }
}

c = new Child();
c.instance();
Child.staticMethod(); // we can access static methods using class name not with object
c.childMethod();