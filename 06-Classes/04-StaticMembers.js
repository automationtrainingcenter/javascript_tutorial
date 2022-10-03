/*
By definition, static methods are bound to a class, not the instances of that class. 
Therefore, static methods are useful for defining helper or utility methods.
*/

class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        console.log(`${this.name.toUpperCase()}`);
    }
    
    static getAnounumous(gender) {
        return gender === 'male' ? 'John Doe' : 'Jane Doe';
    }
}

let person = new Person('Surya');
person.getName()
let anonymous = Person.getAnounumous('male') // static method must call by class name.
console.log(anonymous);

// NOTE: We can access static methods inside the class instance methods or constructors using the class name
// NOTE: we can access static properties inside the constructor using this.constructor.propertyName or className.propertyName

class Item {
    constructor(name, quntity) {
        this.name = name;
        this.quntity = quntity;
        // Item.count++; // or we can use this.constructor as below
        this.constructor.count++;
    }

    static count = 0; // Static property
    static getCount() {
        return Item.count;
    }
}

let pen = new Item('Pen', 10);
let book = new Item('Book', 10);

console.log(`Items count = ${Item.getCount()}`);