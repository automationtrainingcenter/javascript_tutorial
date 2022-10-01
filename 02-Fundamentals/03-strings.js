/*
JavaScript strings are primitive values. 
Also, strings are immutable. 
It means that if you modify a string, you will always get a new string. 
The original string doesn’t change.
*/

// To create a string we can use either single or double quotes
let s1 = 'single Quote String';
let s2 = "Double quote String";

console.log(s1);
console.log(s2);


// Template literals were introduced in ES 6 which uses back tick `
// we can combint single and double quotes in the string and also variables
let s3 = `I'm learning "JavaScript"`;
console.log(s3);

let myName = "Surya";
console.log(`My name is ${myName}`);

// length of the string
console.log(s1.length);

// strings are index based
console.log(s1[0]); // First character
console.log(s1[s1.length - 1]); // Last character

// string concatenate
let className = 'btn';
console.log(className);
className = className + ' btn-primary';
console.log(className);
className += ' btn-green';
console.log(className);

