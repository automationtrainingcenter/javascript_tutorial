/*
In JavaScript, an array is an ordered list of values.
Each value is called an element specified by an index.

A JavaScript array has the following characteristics:

First, an array can hold values of mixed types. 
For example, you can have an array that stores elements with the types number, string, boolean, and null.

Second, the size of an array is dynamic and auto-growing. ]
In other words, you don’t need to specify the array size up front.
*/

// creating an array
let cars = new Array(); // cars is an empty array

// creating an array with initial size
cars = new Array(10); // cars is an array with initial size as 10

// creating an array with initial values
let nums = new Array(1, 3, 4, 5, 6, 9); // create an with 6 numbers

// Note: new keyword is optional while creating an Array
let numbers = Array(2, 3, 4, 5, 6, 8); // valid syntax

// most used way of creating an array is
let vowels = ['a', 'e', 'i', 'o', 'u'];

let emptyArray = [];

// find the number of items in an array
console.log(`number of vowels are ${vowels.length}`);

// Arrays are index based so we can access them using index  number
console.log(vowels[0]); // first value in array
console.log(vowels[vowels.length - 1]); // last value in array

// update the value at a given index
vowels[2] = 'I';
console.log(vowels);

let skills = ['Java', 'Python', 'TypeScript']
// add new element at end of the array
skills.push('JavaScript')
console.log(skills);

// add new element to the starting of the array
skills.unshift('Go');
console.log(skills);

// remove an elemnet from the end of the array
let latestSkill = skills.pop()
console.log(latestSkill);
console.log(skills);

// remove an element from the starting of the array
let oldSkill = skills.shift()
console.log(oldSkill);
console.log(skills);

// get the index of the element
console.log(skills.indexOf('Python'));

// verify the type of a variable is array or not
console.log(Array.isArray(skills));

// sorting in arrays
nums = [1, 3, 4, 10, 11, 2];
nums.sort((a, b) => a - b);
console.log(nums);

let names = ['abc', 'b', 'Cat', 'CAb', 'e', 'F'];
names.sort();
console.log(names);
    




