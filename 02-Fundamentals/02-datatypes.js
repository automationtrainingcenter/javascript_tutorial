/*
Datatypes
    Primitive
        1. null
        2. undefined
        3. boolean
        4. number
        5. string
        6. symbol (ES 2015)
        7. bigint (ES 2020)
    Complex
        1. array
        2. object

typeof operator is used to find the type a given variable

Note: typeof null returns object type which is known issue in JS
type of undefined is undefined and type of undeclared variable also undefined

*/

let counter;
console.log(counter); //undefined
console.log(typeof counter); //type of undefined is undefined

console.log(typeof unDeclaredVar); // type of undeclared variable is also undefined


let obj = null;
console.log(typeof obj); // object which is known issue in JS

// numbers
let num = 123456789;
console.log(num);
console.log(typeof num);

let flNum = 90.88;
console.log(flNum);
console.log(typeof flNum);

let anotherFloat = 100.00;
console.log(anotherFloat); // returns 100

console.log('a'/ 2); // returns Nan -> special type repersents a Not a Number
// Note: any operation on NaN returns NaN
console.log(NaN  + 2); // NaN
console.log(NaN === NaN); // false


// string type
let firstName = 'surya';
let lastName = "Prakash";

console.log(firstName);
console.log(lastName);

let fullName = firstName + ' ' + lastName
console.log(fullName);
console.log(typeof fullName);


// boolean type
let inProgress = true;
let completed = false;

console.log(inProgress);
console.log(typeof inProgress);

console.log(Boolean('Hi')); // true: non empty string is true
console.log(Boolean('')); // false: Empty string is false

console.log(Boolean(1999)); // true
console.log(Boolean(Infinity)); // true: Non zero and infinite is true
console.log(Boolean(0)); // false: zero is false


// Symbol type
let s1 = Symbol();
console.log(typeof s1);

// bigint type
/*
The bigint type represents the whole numbers that are larger than 25^3 – 1. 
To form a bigint literal number, we have to append the letter n at the end of the number
*/

let views = 9007199254740991n;
console.log(typeof views);

// array type
let names = ['surya', 'prakash', 'teja']
console.log(names);
console.log(names[0]);
console.log(names.length);


// object type
let employee = {
    firstName: 'Surya',
    lastName: 'Prakash',
    skills: {
        languages: ['Java', 'Python', 'Javascript', 'Typescript'],
        tools: ['Selenium', 'WDIO', 'cucumber', 'behave']
    }
}


console.log(employee.firstName);
console.log(employee['skills']);

