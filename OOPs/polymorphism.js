// Method Overriding

class Animal {
    speak() {
        console.log('The animal makes a sound');
    }
}

class Dog extends Animal {
    speak() {  // Overriding the speak method of the parent class
        console.log('The dog barks');
    }
}

class Cat extends Animal {
    speak() {  // Overriding the speak method of the parent class
        console.log('The cat meows');
    }
}

const animals = [new Dog(), new Cat()];

animals.forEach(animal => animal.speak());
// Output:
// The dog barks
// The cat meows




// Simulated Overloading in JavaScript (Method Overloading)

function greet(name, age) {
    if (arguments.length === 1) {
        console.log(`Hello, ${name}!`);
    } else if (arguments.length === 2) {
        console.log(`Hello, ${name}. You are ${age} years old.`);
    }
}

greet('Muhsin');  // Output: Hello, Muhsin!
greet('Muhsin', 25);  // Output: Hello, Muhsin. You are 25 years old.
