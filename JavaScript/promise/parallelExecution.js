// Simulating asynchronous tasks with setTimeout
function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 completed");
            resolve("Result from Task 1");
        }, 2000); // 2-second delay
    });
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 completed");
            resolve("Result from Task 2");
        }, 1000); // 1-second delay
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 completed");
            resolve("Result from Task 3");
        }, 3000); // 3-second delay
    });
}

// Running tasks in parallel
async function executeTasksInParallel() {
    const results = await Promise.all([task1(), task2(), task3()]);
    console.log("All tasks completed", results);
}

executeTasksInParallel();
