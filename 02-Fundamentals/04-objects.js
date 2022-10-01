/*
In JavaScript, an object is an unordered collection of key-value pairs. 
Each key-value pair is called a property.

The key of a property can be a string. 
And the value of a property can be any value, e.g., a string, a number, an array, and even a function.

JavaScript provides you with many ways to create an object.
The most commonly used one is to use the object literal notation.
*/

let employee = {
    firstName: 'Surya',
    lastName: 'Prakash',
    skills: {
        languages: ['Java', 'Python', 'Javascript', 'Typescript'],
        tools: ['Selenium', 'WDIO', 'cucumber', 'behave']
    }
}

// we can the properties using dot notation or array notation
console.log(employee.firstName);
console.log(employee['skills']['tools']);
console.log(employee['tools']); // undefined because key tools is not present in employee object

// adding new property
employee['emp id'] = 99889;
// console.log(employee.'emp id'); // gives error
console.log(employee['emp id']);

// updating a value for property
employee['lastName'] = "Prathipati";
console.log(employee);

// deleting a property
delete employee['emp id']
console.log(employee);

// search for a property 
console.log('emp id' in employee); // false
console.log('skills' in employee); // true


let person = employee

console.log(person);

person.firstName='SURYA';
console.log(person);
console.log(employee);