/*
Similar to functions, classes have expression forms. A class expression provides you with an alternative
way to define a new class.
A class expression doesn’t require an identifier after the class keyword.
And you can use a class expression in a variable declaration 
*/
let Person = class {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

p1 = new Person('Surya');
console.log(p1.getName());
console.log(typeof Person); // function

// Classes are first class citigens. Means we can pass class to function, return class from function and assign to variable
function factory(aClass) {
    return new aClass();
}

// passing an anonymous class to factory function  
let greeting = factory( class {
    sayHi() { console.log('Hi');}
});

console.log(typeof greeting);
greeting.sayHi();

// singleton pattern 
/*
Singleton is a design pattern that limits the instantiation of a class to a single instance.
It ensures that only one instance of a class can be created throughout the system.

We can achieve singleton by using class expression with new keyword
*/
let app = new class{
    constructor(name) {
        this.name = name;
    }

    start() {
        console.log(`Statring the ${this.name}`);
    }
} ('Awesome App');

app.start();


// COMPUTED PROPERTIES
/*
ES6 allows we to use an expression in brackets []. It’ll then use the result of the expression as the property name of an object
*/
let propName = 'c';

const rank = {
    a: 1,
    b: 2,
    [propName]: 3 // computed property of rank object
};

console.log(rank.c);

/*
When we access c property of the rank object, JavaScript evaluates propName and returns the property’s value.
we can use coputed properties for getter and setters of a class.
*/

let full = "fullName";

class Human {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get [full]() {
        return `Name = ${this.firstName} ${this.lastName}`;
    }
}

h1 = new Human('Surya', 'Prakash');
console.log(h1.fullName);







