/*
Variable names follow these rules:
    1. Variable names are case-sensitive. This means that the message and Message are different variables.
    2. Variable names can only contain letters, numbers, underscores, or dollar signs and cannot contain spaces. 
    Also, variable names must begin with a letter, an underscore (_) or a dollar sign ($).
    3. Variable names cannot use the reserved words.


Variable can be declared using var and let(ES 6) keywords

By convention, variable names use camelcase like message, yourAge, and myName.
*/

var message;  // declaration

message = "hello"; // initialization

console.log(message);

let myName = "Surya"; // declaration and initialization

console.log(myName);

myName = "Prakash"; // updating the variable name
console.log(myName);

const id = "999";
console.log(id);

// id = "123"; // throws error as TypeError can not assign values to constants


let unDefinedVar; 
console.log(unDefinedVar); // declared but not initialized so it will be considered as special type (undefined)


// console.log(unDeclaredVar); // No declaration to this variable so throws error
