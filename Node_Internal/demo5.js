const fs = require('node:fs');
fs.readFile('./readme.md', 'utf8', (err, data) => { 
    //Io queue-- call back queue
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  
});
setTimeout(()=>console.log("Timer 1 "),0);
