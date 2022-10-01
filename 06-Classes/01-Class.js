/*
Prior to ES6, JavaScript had no concepts of classes. To mimic a class, you often use the constructor/prototype pattern.
*/
class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let p1 = new Person('Surya');
console.log(p1.getName());

/*
Class Vs Custome Type (using constructor function)
1. Class declarations are not hoisted means if we try to create an object of a class before class declaration throws reference error
2. All the code inside the class is automatically executes in strict mode.
3. Class methods are non enumerable. In constructor/prototype pattern we have to use Object.defineProperty() to make a
property non-enumerable.
4. Calling a class constructor without a new keyword will throw type error.
*/

// GETTER AND SETTERS
class Student {
    constructor(name) {
        this._name = name;
    }

    get name() {
        console.log('Getter is called');
        return this._name;
    }

    set name(name) {
        console.log('Setter is called');
        name = name.trim();
        if(name === '') {
            throw 'Name can not be empty';
        }
        this._name = name;
    }
}

s1 = new Student('Surya')
console.log(s1.name);

s1.name = 'Prakash '
console.log(s1.name);

// Class with only getter
class Employee {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

e1 = new Employee('Surya')
console.log(e1.name);

e1.name ='Prakash';
console.log(e1.name);

// Using getters in object literal
let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};

meeting.add('Surya').add('Uday').add('Prakash');
console.log(`The latest attendee is ${meeting.latest}.`);