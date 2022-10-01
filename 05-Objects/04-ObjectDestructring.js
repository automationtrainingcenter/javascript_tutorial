/*tslint:disabled*/
/*
ES6 introduces the object destructuring syntax that provides an alternative way to assign properties of an object to variables.
let { property1: variable1, property2: variable2 } = object;
*/
let person = {
    firstname: 'Surya',
    lastname: 'Prakash'
}

let {firstname: fname, lastname: lname} = person;
console.log(fname);
console.log(lname);

// if variable name is equal to the property name
let {firstname, lastname} = person
console.log(firstname);
console.log(lastname);

let firstName, lastName; // variable declaration
/*
It’s possible to separate the declaration and assignment. However, we must surround the variables in parentheses.
If we don’t use the parentheses, the JavaScript engine will interpret the left-hand side as a block and throw a syntax error.
*/
({firstname: firstName, lastname: lastName} = person);

// When we assign a property that does not exist to a variable using the object destructuring, the variable is set to undefined.
({firstname, lastname, middlename} = person);
console.log(middlename); //undefined


// we can assign a default value to the variable when the property of an object doesn’t exist
let employee = {
    fName: 'Surya',
    lName: 'Prakash',
    currentAge: 32
};

let {fName, lName, middleName, currentAge: age = 35} = employee;
console.log(middleName); // undefined
console.log(age);
console.log(age);


// nested object destructruing
let student = {
    id: 1001,
    fullname: {
        first: 'Surya',
        last: 'Prakash'
    }
};

// let {id, fullname: {first, last}} = studnet;
// NOTE: It’s possible to do multiple assignement of a property to multiple variables

let {fullname: {first, last}, fullname} = student;
console.log(first);
console.log(last);
console.log(fullname);


// Destructuring function arguments
let display = (perosn) => console.log(`${person.firstname} ${person.lastname}`);
display(person)

let show = ({firstname: first, lastname: last}) => console.log(`${first} ${last}`);
show(person)

/*
ES2020 introduced the optional chaining operator denoted by the question mark followed by a dot.
objectName ?. propertyName
objectName ?. [expression]
functionName ?. (args)
The optional chaining operator (?.) allows you to access the value of a property located deep within a chain of objects 
without explicitly checking if each reference in the chain is null or undefined
*/

function getUser(id) {
    if (id <= 0) {
        return null;
    }
    return {
        id: id,
        username: 'admin',
        profile: {
            avatar: '/avatar.png',
            language: 'English'
        }
    };
}

let user = getUser(1);
console.log(user.profile);

user = getUser(-1);
// let profile = user.profile // throws error
// console.log(profile); 
// to avoid the error at run time we can use logical && operator
profile = user && user.profile;
console.log(profile); // returns null
// or we can use optional chaining operator
profile = user ?. profile;
console.log(profile); // returns undefined

