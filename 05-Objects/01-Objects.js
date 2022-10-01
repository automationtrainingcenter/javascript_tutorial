/*
An object is a collection of key/value pairs or properties. 
When the value is a function, the property becomes a method.
Typically, you use methods to describe the object behaviors.
*/

let person = {
    firstName: "Surya",
    lastName: "Prakash",
    greet: function() {
        console.log(`Hello ${this.firstName}`);
    },
    getFullName() {
        // ES6 allows to define method for object
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.getFullName());
person.greet()

// constructor function (ES 6 provides class keyword to handle constructor functions or to create custom type more effectively)
function Employee(empName, desgination) {
    this.empName = empName;
    this.desgination = desgination;

    this.greet = function() {
        console.log(`Hello ${this.empName}`);
    }
}

let emp1 = new Employee('Surya', 'test lead'); // calling constructor function using new keyword
emp1.greet()

let emp2 = Employee('Rakesh', 'some one');
// emp2.greet() // throws error

/*
if a constructor function is called with the new keyword, the new.target returns a reference of the function. 
Otherwise, it returns undefined.
*/

function Car(model, year) {
    console.log('target is', new.target);
    this.model = model;
    this.year = year;

    this.start = function() {
        console.log(`started ${this.model}`);
    }
}

console.log('calling Car constructor function without using new keyword');
let car1 = Car('Honda Amaze', 2020);

console.log('calling Car constructor function using new keyword');
let car2 = new Car('Honda City', 2022);
car2.start()


// Constructor prototype pattern in ES 5
/*
The combination of the constructor and prototype patterns is the most common way to define custom types in ES5.
In this pattern:
    The constructor pattern defines the object properties.
    The prototype pattern defines the object methods.
*/

function Student(stdName, course) {
    // properties of the object using constructor pattern
    this.stdName = stdName;
    this.course = course;
}

Student.prototype.getDetails = function() {
    // methods of the object using prototype pattern
    return `name = ${this.stdName} and course = ${this.course}`;
};

let s1 = new Student('Saketh', "Java");
console.log(s1.getDetails());

// NOTE: ES 6 introduced a class keyword that makes this constructor-prototype pattern easy to use
class StudentClass {
    constructor(name, course) {
        this.name = name;
        this.course = course;
    }

    getDetails() {
        return `name = ${this.name} and course = ${this.course}`
    }
}

let s2 = new StudentClass('Santosh', 'Pyhton')
console.log(s2.getDetails());




