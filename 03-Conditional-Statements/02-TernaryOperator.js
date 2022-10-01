// ternary operator is short hand version of if else statement
// Syntax is; condition ? expression1 : expression2
let age = 18;
let message;
message = age >= 18 ? 'Allowed to drive' : 'Not allowed'
console.log(message);

let authenticated = false;
let nextURL = authenticated ? '/home-page' : '/login-page'
console.log(nextURL);

// multiple ternary operators
let mode = 'adf';
let level = mode == 'l' ? 'Level 1' : mode == 'm' ? 'Level 2' : 'Level 3'
console.log(level);