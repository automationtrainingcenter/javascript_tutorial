/*
Simple if

if (condition) {
    statements;
}

The condition can be a value or an expression. Typically, the condition evaluates to a Boolean value, which is true or false.
If the condition evaluates to true, the if statement executes the statement. 
Otherwise, the if statement passes the control to the next statement after it.
If the condition evaluates to a non-Boolean value, 
JavaScript implicitly converts its result to a Boolean value by calling the Boolean() function.
*/

let age = 16;

if (age >= 18) {
    console.log("Sign Up is allowed");
}

// nested if or multiple conditions
let state = 'CA';

if (state == 'CA') {
    if (age >= 16) {
        console.log("Allowed to Sign Up");
    }
}

// or

if (state == 'CA' && age >= 16) {
    console.log("Allowed to Sign Up");
}

/*
If else

if (condition) {
    statements to run when condition satisfies
} else {
    statemens to run when condition fails
}
*/


if (age >= 18) {
    console.log("Allowed to Sign up");
} else {
    console.log(`Wait ${18 - age} years to Sign Up`);
}

/*
if else if or else if ladder

if (condition1) {
    statements to run when condition1 satisfies
} else if (condition2) {
    statements to run when condition2 statisfies and condition1 fails
} else if (condtion2) {
    statments to run when condition3 statisfies and condtion1 and 2 fails
} else {
    statements to run when all the previous condition fails
}

*/

let weight = 70; // kg
let height = 1.72; // meter

// calculate the body mass index (BMI)
let bmi = weight / (height * height);

let weightStatus;

if (bmi < 18.5) {
  weightStatus = 'Underweight';
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = 'Healthy Weight';
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = 'Overweight';
} else {
  weightStatus = 'Obesity';
}

console.log(weightStatus);

