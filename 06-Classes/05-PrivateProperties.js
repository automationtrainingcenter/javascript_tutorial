/*
ES2022 allows you to define private fields for a class. To define a private field, you prefix the field name with the # sign
*/
class Circle {
  #radius; // declare private variable
  constructor(value) {
    this.#radius = value; // initialize the radius variable
  }

  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }

  get radius() {
    // getter for radius
    return this.#radius;
  }

  set radius(value) {
    // setter for radius
    if (typeof value === 'number' && value > 0) {
      this.#radius = value;
    } else {
      throw "The radius must be a positive number";
    }
  }
}

// NOTE: we can not access private field in the sub classes also
class Cynlider extends Circle {
  #height;
  constructor(radius, height) {
    super(radius);
    this.#height = height;

    // cannot access the #radius of the Circle class here
  }
}

let c1 = new Circle(5);
console.log(c1.area);

c1.radius = 10;
console.log(c1.area);


// Private methods
class Person {
    #firstName;
    #lastName;
    constructor(firstName, lastName) {
      this.#firstName = firstName;
      this.#lastName = lastName;
    }
    getFullName(format = true) {
      return format ? this.#firstLast() : this.#lastFirst();
    }
  
    #firstLast() {
      return `${this.#firstName} ${this.#lastName}`;
    }
    #lastFirst() {
      return `${this.#lastName}, ${this.#firstName}`;
    }
  }
  
  let person = new Person('John', 'Doe');
  console.log(person.getFullName());
  