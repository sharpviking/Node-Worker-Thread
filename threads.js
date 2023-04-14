const {
    isMainThread,
    workerData,
    Worker,
} = require('worker_threads');



if (isMainThread) {
    console.log(`Main Thread! Process ID:${process.pid}`)
    new Worker(__filename, {
        workerData: [8, 11, 3, 2]
    });
    new Worker(__filename, {
        workerData: [26, 11, 10, 12]
    });
} else {
    console.log(`Worker! Process ID: ${process.pid}`);
    console.log(`${workerData} sorted is ${workerData.sort()}`)
}