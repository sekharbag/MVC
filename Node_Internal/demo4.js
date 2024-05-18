const fs = require('node:fs');
fs.readFile('./readme.md', 'utf8', (err, data) => { 
    //Io queue-- call back queue
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
process.nextTick(()=>console.log("next Tick"));
Promise.resolve().then(()=>console.log("promise 1"));
setTimeout(()=>console.log("Timer 1 "),0);
setImmediate(()=>console.log("Immediate callback"));
for(let i=0;i<10000000;i++){}