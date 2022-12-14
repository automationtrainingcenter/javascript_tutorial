// declaring a function
function func1() {
    console.log("Function without arguments and without return type");
}

// calling a function
let reVal = func1()
console.log(reVal); // by default every function return type is undefined

function func2(a, b) {
    console.log("Function with arguments and without return type");
    console.log(`a = ${a} and b = ${b}`);
}

func2() // does not throw any error a and b parameters are undefined
func2(10, 20)

function func3() {
    console.log("Function without argument but with return type");
    return true;
}

reVal = func3()
console.log("returned value is", reVal);

function func4(a, b) {
    console.log("Function with arguments and with return type");
    return a+b;
}

reVal = func4(1, 2)
console.log(reVal);

// functions can have return statement without a value to stop the function prematurely
function func5(message) {
    if (!message) {
        return;
    }
    console.log(message);
}

func5('hello')
func5()

// arguments object is used to create function with variable number of arguments
function varArgs() {
    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

varArgs();
varArgs(1, 2, 3)
varArgs('hello', 'hi', 'bye', 'good day')


// assigning the function to the variable
function add(a, b) {
    return a + b;
}

let result = add(10, 20)
console.log(result);

let sum = add
result = sum(20, 20)
console.log(result);

// passing function as an argument to another function
function average(a, b, fn) {
   return fn(a, b) / 2; 
}

result = average(10, 20, sum)
console.log(result);

// returning function from a function
function compareBy(propertyName) {
    let fn = function(a, b) {
        let x = a[propertyName], y =b[propertyName]
        if (x > y) {
            return 1;
        } else if (x < y) {
            return -1;
        } else {
            return 0;
        }
    };
    return fn;
}

let products = [
    {name: 'iPhone', price: 890},
    {name: 'Samsung Galaxy', price: 690},
    {name: 'Sony Experia', price: 550}
];

products.sort(compareBy('price'));
console.table(products);

// Anonymous function
let show = function() {
    console.log("Anonymous function");
};

show();

// passing anonymous functino as argument to another function
setTimeout(function() {console.log("Execute after 5 second");}, 5000);

// Arrow Function
let dispaly = () => console.log("Arrow Function");
dispaly()

let addition = function(a, b) {
    return a + b;
}

console.log(addition(111, 222));

let addArrow = (a, b) => a + b;
console.log(addArrow(222, 333));

let numbers = [2, 5, 4, 3]
numbers.sort(function(a, b) { return b-a;})
console.log(numbers);

let nums = [9, 1, 2, 5, 6]
nums.sort((a, b) => b - a)
console.log(nums);


// Default Arguments
function launchBrowser(name="chorme", url="http://www.google.com", height=1900, width=1080){
    console.log(`launching ${name} browser`);
    console.log(`navigating to ${url}`);
    console.log(`setting browser height as ${height} and width as ${width}`);
}

launchBrowser();
launchBrowser("firefox");
launchBrowser(undefined, 'http://www.facebook.com');

let taxRate = () => 0.1;
let getPrice = function(price, tax = price * taxRate()) {
    return price + tax
}

let fullPrice = getPrice(100)
console.log(fullPrice);

// Callback hell: calling a call back function inside another and one in another or nested call backs in know as Callback hell.
setTimeout(() => { // first call back function
    console.log("1 second passed");
    setTimeout(() => { // second call back function
        console.log("2 seconds passed");
        setTimeout(() => { // third call back function
            console.log("3 seconds passed");
            setTimeout(() => { // fourth
                console.log("4 seconds passed");
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// NOTE: Callback hell is bad way of coding we can overcome this issue by using promises.`
/*
Promise is a objcect that is used as a placeholder which will store the future result in Asynchronous calls.
Promise will have two states: pending and setteled.
setteled status again will have fullfilled and rejected.
*/

// We can create a new promise using Promise constructor which takes a function known as executor function
let lotteryPromise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        if(Math.random() >= 0.5) {
            resolve('You WON ????');
        } else {
            reject(new Error('You lost the your money. ????'));
        }
    }, 1000);   
});

// consume promise using then
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

/*
NOTE: class back functions will exist in call back queue and promises will exist in microtask queue.
event loop will pick the statements from call back and microtask queues and loads them to Global execution stack.
microtask queue will have the hight priority compared to call back queue.
*/

// create a wait promise for setTimeout to avoid the call back hell in line 153 
let wait = function(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000); // Promisifying
    });
}

wait(1)
.then(() => {
    console.log('ONE second passed');
    return wait(1);
})
.then(() => {
    console.log('TWO seconds passed');
    return wait(1);
})
.then(() => {
    console.log('THREE seconds passed');
    return wait(1);
})
.then(() => console.log('FOUR seconds passed'));

// Promises with immediate resolve and reject
Promise.resolve('Pass').then((res) => console.log(res));
Promise.reject(new Error('Failed!')).catch((err) => console.error(err))
