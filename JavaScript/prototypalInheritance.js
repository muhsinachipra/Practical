// // prototypal inhertitance

// const person = {
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// const john = Object.create(person);  // john inherits from person
// john.name = "John";
// john.greet();  // Hello, my name is John









function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
john.greet();  // Hello, my name is John
