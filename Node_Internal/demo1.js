console.log("start");
setTimeout(() => {console.log("Timer1")}, 0);// cb waiting timer queue
Promise.resolve().then(()=>{console.log("promise 1")});//cb waiting promise queue
process.nextTick(()=>{console.log("NexT tick 1 ")});//cb waiting nexttick queue
setTimeout(() => {console.log("Timer2")}, 0);//cb waiting timer queue
for(let i=0;i<100000;i++){}// by the time loop ends all the call backs are thrir respective queue
process.nextTick(() => { console.log('next tick 2')});//cb waiting timer queue
console.log("end");
