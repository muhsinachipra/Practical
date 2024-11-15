// // call

// const person1 = {
//     name: "John",
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// const person2 = {
//     name: "Jane"
// };

// // Borrowing the greet function from person1 for person2 using call()
// person1.greet.call(person2); // Hello, my name is Jane



// // apply
// const person1 = {
//     name: "John",
//     greet: function (greeting, punctuation) {
//         console.log(`${greeting}, my name is ${this.name}${punctuation}`);
//     }
// };

// const person2 = {
//     name: "Jane"
// };

// // Borrowing greet using apply() with arguments passed as an array
// person1.greet.apply(person2, ["Hola", "!"]); // Hi, my name is Jane!




// bind

const person1 = {
    name: "John",
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const person2 = {
    name: "Jane"
};

// Borrowing greet using bind() and creating a new function
const greetJane = person1.greet.bind(person2);
greetJane(); // Hello, my name is Jane
