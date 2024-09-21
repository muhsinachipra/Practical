function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task 1');
            resolve();
        }, 1000);
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task 2');
            resolve();
        }, 1000);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task 3');
            resolve();
        }, 1000);
    });
}

function task4() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task 4');
            resolve();
        }, 5000);
    });
}

function task5() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task 5');
            resolve();
        }, 1000);
    });
}

function task6() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('task 6');
            resolve();
        }, 1000);
    });
}

task1()
    .then(() => task2())
    .then(() => task3())
    .then(() => task4())
    .then(() => task5())
    .then(() => task6())
    .then(() => {
        console.log("task completed");
    });

// async function runTasks() {
//     await task1();
//     await task2();
//     await task3();
//     await task4();
//     await task5();
//     await task6();
//     console.log("task completed");
// }

// runTasks();
