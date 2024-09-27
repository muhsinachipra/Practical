// ES6

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     displayInfo() {
//         console.log(`Name: ${this.name}, Age: ${this.age}`)
//     }
// }

// const person1 = new Person('Muhsin', 25);
// person1.displayInfo();  // Output: Name: Muhsin, Age: 25



// Constructor Functions (Old Style)

function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.displayInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
}

const person1 = new Person('Muhsin', 25);
person1.displayInfo();  // Output: Name: Muhsin, Age: 25