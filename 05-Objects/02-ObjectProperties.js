/*
Objects have two types of properties: data and accessor properties.

1) Data properties

A data property contains a single location for a data value. A data property has four attributes:

 [[Configurarable]] – determines whether a property can be redefined or removed via delete operator.
 [[Enumerable]] – indicates if a property can be returned in the for...in loop.
 [[Writable]] – specifies that the value of a property can be changed.
 [[Value]] – contains the actual value of a property.

By default, the [[Configurable]], [[Enumerable]] And [[Writable]] attributes set to true for all properties defined directly on an object. 
The default value of the[[Value]] attribute is undefined.

To change any attribute of a property, you use the Object.defineProperty() method.

The Object.defineProperty() method accepts three arguments:
    An object.
    A property name of the object.
    A property descriptor object that has four properties: configurable, enumerable, writable, and value.

NOTE: If you use the Object.defineProperty() method to define a property of the object, the default values 
of [[Configurable]], [[Enumerable]], and [[Writable]] are set to false unless otherwise specified.
*/
'use strict';

let Book = {};

Object.defineProperty(Book, 'isbn', {
    configurable: false,
    value: '998-1112-222'
});

console.log(Book.isbn);
// delete Book.isbn // throws error


let person = {};
Object.defineProperties(person, {
    firstName: {
        value: 'Surya',
        enumerable: true 
    },
    lastName: {
        value: 'Prakash',
        enumerable: false, // default value is false no need to explicitly mention
    },
    email: {
        value: 'suryap@ideyalabs.com',
        enumerable: true,
        configurable: true // can delete this property, we can't delete first name and last name because by default configurable: false for those
    }
});

for(let property in person) {
    console.log(property); // does not display email
}

/*
ES6 provides a method propertyIsEnumerable() 
that determines whether or not a property is enumerable. It returns true if the property is enumerable; otherwise false
*/

console.log(person.propertyIsEnumerable('firstName'));
console.log(person.propertyIsEnumerable('lastName'));
console.log(person.propertyIsEnumerable('email'));

console.log(person);
delete person.email // success
console.log(person); // does not show email
// delete person.lastName // throws error becuase configurable is false




/*
The  Object.getOwnPropertyDescriptor() method allows you to get the descriptor object of a property. 
The Object.getOwnPropertyDescriptor() method takes two arguments:
    An object
    A property of the object
It returns a descriptor object that describes a property.
The descriptor object has four properties: configurable, enumerable, writable, and value.
*/

let student = {
    name: 'Surya',
    course: 'Java'
}

let descriptor = Object.getOwnPropertyDescriptor(student, 'name')
console.log(descriptor);


/*
2) Accessor properties

Similar to data properties, accessor properties also have [[Configurable]] and [[Enumerable]] attributes.
But the accessor properties have the [[Get]] and [[Set]] attributes instead of [[Value]] and [[Writable]].

When you read data from an accessor property, the [[Get]] function is called automatically to return a value. 
The default return value of the [[Get]] function is undefined.

If you assign a value to an accessor property, the [[Set]] function is called automatically.

To define an accessor property, you must use the Object.defineProperty() method.
*/

let employee = {
    firstName: 'Surya',
    lastName: 'Prakash'
}

Object.defineProperty(employee, 'fullName', {
    get: function () {
        return this.firstName + ' ' + this.lastName;
    },
    set: function (value) {
        let parts = value.split(' ');
        if (parts.length == 2) {
            this.firstName = parts[0];
            this.lastName = parts[1];
        } else {
            throw 'Invalid name format';
        }
    }
});

console.log(employee);
console.log(employee.fullName);
employee.fullName = 'Surya Prathipati';
console.log(employee.fullName);



