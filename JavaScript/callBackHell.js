function task1(callback){
    setTimeout(()=>{
        console.log(`task 1`)
        callback()
    },1000)
}
function task2(callback){
    setTimeout(()=>{
        console.log(`task 2`)
        callback()
    },1000)
}
function task3(callback){
    setTimeout(()=>{
        console.log(`task 3`)
        callback()
    },1000)
}
function task4(callback){
    setTimeout(()=>{
        console.log(`task 4`)
        callback()
    },1000)
}
function task5(callback){
    setTimeout(()=>{
        console.log(`task 5`)
        callback()
    },1000)
}
function task6(callback){
    setTimeout(()=>{
        console.log(`task 6`)
        callback()
    },1000)
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{
                task5(()=>{
                    task6(()=>{
                        console.log("task completed")
                    })
                })
            })
        })
    })
})

