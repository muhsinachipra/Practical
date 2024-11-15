// function* generatorFunction() {
//     yield 1;
//     yield 2;
//     yield 3;
// }



// function* simpleGenerator() {
//     console.log("Generator Started")
//     yield 1;
//     console.log("After first Yield")
//     yield 2;
//     console.log("After second yield")
//     yield 3;
//     console.log("Generator finished")
// }

// const gen = simpleGenerator()

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())




// function* infiniteSequence() {
//     let i = 0
//     while (true) {
//         yield i++
//     }
// }

// const sequence = infiniteSequence()

// console.log(sequence.next().value)
// console.log(sequence.next().value)
// console.log(sequence.next().value)
// console.log(sequence.next().value)




// function* fibonacci() {
//     let [prev, curr] = [0, 1]
//     while (true) {
//         yield curr;
//         [prev, curr] = [curr, prev + curr]
//     }
// }

// const fibGen = fibonacci();

// console.log(fibGen.next().value)
// console.log(fibGen.next().value)
// console.log(fibGen.next().value)
// console.log(fibGen.next().value)
// console.log(fibGen.next().value)




function* numbers() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

for (let num of numbers()) {
    console.log(num)
}

