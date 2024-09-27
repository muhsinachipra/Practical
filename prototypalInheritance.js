// // prototypal inhertitance

// const person = {
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// const john = Object.create(person);  // john inherits from person
// john.name = "John";
// john.greet();  // Hello, my name is John



// class based inheritance

// class Animal {
//     constructor(name) {
//         this.name = name
//     }
//     speak() {
//         console.log(`${this.name} is speaking.`)
//     }
// }

// class Dog extends Animal {
//     constructor(name, bread) {
//         super(name)
//         this.bread = bread
//     }

//     speak() {
//         // Calls the parent class method 'speak'
//         super.speak();
//         console.log(`${this.name} barks.`);
//     }
// }

// class Cat extends Animal {
//     constructor(name) {
//         super(name)
//     }

//     speak() {
//         super.speak()
//         console.log(`${this.name} meow`)
//     }
// }

// const myDog = new Dog("Buddy", "Golden Retriever");
// const myCat = new Cat("chuby");
// myDog.speak(); // Buddy makes a sound. Buddy barks.
// myCat.speak();






function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
john.greet();  // Hello, my name is John
