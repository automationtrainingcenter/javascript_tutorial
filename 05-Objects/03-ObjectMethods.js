/*
In JavaScript, objects can inherit features from one another via prototypes. Every object has its own property called prototype.
When you access a property of an object, if the object has that property, it’ll return the property value, However, if you access 
a property that doesn’t exist in an object, the JavaScript engine will search in the prototype of the object.

ES5 provided a standard way to work with prototypal inheritance by using the Object.create() method.
The Object.create() method creates a new object and uses an existing object as a prototype of the new object.
The Object.create() method accepts two arguments:
    The first argument (proto) is an object used as the prototype for the new object.
    The second argument (propertiesObject), if provided, is an optional object that defines additional 
    properties for the new object.

*/

let person = {
    name: 'Surya',
    greet: function() {
        console.log(`hello ${this.name}`);
    }
};

let teacher = Object.create(person, {
    exp: {value: 5, enumerable: true},
    subject: {value: 'Maths', enumerable: true},
    teach: function(subject) {
        return `I can teach ${subject}`
    }
});

/*
OWN PROPERTIES:
A property that is defined directly on an object is own while a property that the object receives from its prototype is inherited.
In the above example exp is the own property of teacher object and name is the inherited property from its prototype person.
The hasOwnProperty() method returns true if a property is own.
*/

console.log(teacher.hasOwnProperty('exp')); // true
console.log(teacher.hasOwnProperty('name')); // false

/*
the for...in loop enumerates over all the properties of object including inherited properties from prototype
*/
console.log("PROPERTIES INCLUDING INHERITED");
for(let obj in teacher) {
    console.log(obj);
}

// we can get own properties of object using hasOwnProperty() as below
console.log("OWN PROPERTIES");
for(let obj in teacher) {
    if (teacher.hasOwnProperty(obj)) {
        console.log(obj);
    }
}

/*
ES 2017 introduced new method Object.values() that allows you return an array of own enumerable property values of an object.
*/
let values = Object.values(teacher);
console.log(values);
/*
Similerly ES2017 introduces the Object.entries() method 
that accepts an object and returns its own enumerable string-keyed property [key, value] pairs of the object.
*/
let entries = Object.entries(teacher);
// console.log(entries);
for(let entry of entries) {
    console.log(entry);
}

/*
The ES6 Object.assign() copies all enumerable and own properties from the source objects to the target object. 
It returns the target object.

Object.assign(target, ..sources);
The Object.assign() invokes the getters on the source objects and setters on the target. 
It assigns properties only, not copying or defining new properties.
*/
let widget = {
    color: 'red'
}

let cloneWidget = Object.assign({}, widget);
console.log(cloneWidget);

let box = {
    height: 30,
    widht: 30,
    color: 'red'
}

let style = {
    color: 'blue',
    borderStyle: 'solid',
}


let styleBox = Object.assign({}, box, style);

console.log(styleBox); // overrites the color property

let baseConfig = {
    browser: 'chrome',
    maximize: true
}

let headlessConfig = Object.assign(baseConfig, {
    "goog:chromeOptions": {
        args: ["--disable-web-security", "--headless", "--disable-dev-shm-usage", "--no-sandbox", "--window-size=1920,1080"]
    },
})

console.log(headlessConfig);

/*
The Object.is() behaves like the === operator with two differences
    The === operator treats -0 and +0 are the same value. However, the Object.is() treats +0 and -0 as different values.
    The === operator considers NaN and NaN are different values. However, Object.is() treats NaN as the same value
*/

console.log(+0 === -0); // true
console.log(Object.is(+0, -0)); // false

console.log(NaN === NaN); // false
console.log(Object.is(NaN, NaN)); // true