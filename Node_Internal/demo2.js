console.log("start");
setTimeout(() => {
    process.nextTick(()=>{console.log("NexT tick 2 ")})//cb waiting nexttick queue
}, 0);// cb waiting timer queue
Promise.resolve().then(()=>{console.log("promise 1")});//cb waiting promise queue
process.nextTick(()=>{console.log("NexT tick 1 ")});//cb waiting nexttick queue
setTimeout(() => {console.log("Timer2")}, 0);//cb waiting timer queue
setTimeout(() => {console.log("Timer3")}, 0);//cb waiting timer queue
console.log("end");
