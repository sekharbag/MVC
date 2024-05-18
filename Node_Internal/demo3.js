console.log("start");
setTimeout(() => {
    process.nextTick(()=>{console.log("NexT tick 2 ")})//cb waiting nexttick queue
    Promise.resolve().then(function(){
        console.log("promise2");
    })
    Promise.resolve().then(()=>{console.log("promise3");})
    Promise.resolve().then(()=>{console.log("promise4");})
    process.nextTick(()=>{console.log("NexT tick 3 ")})//cb waiting nexttick queue
    process.nextTick(()=>{console.log("NexT tick 4 ")})//cb waiting nexttick queue
    for(let i=0;i<10000;i++){}
}, 0);// cb waiting timer queue
Promise.resolve().then(()=>{console.log("promise 1")});//cb waiting promise queue
process.nextTick(()=>{console.log("NexT tick 1 ")});//cb waiting nexttick queue
setTimeout(() => {console.log("Timer2")}, 0);//cb waiting timer queue
setTimeout(() => {console.log("Timer3")}, 0);//cb waiting timer queue
console.log("end");
