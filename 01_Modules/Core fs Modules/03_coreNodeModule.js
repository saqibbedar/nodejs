const fs = require('fs');

fs.appendFile("./hello.txt", "Hello world\n", err => console.log(err));

const result = fs.readFile("./hello.txt", "utf-8", (err, result)=>{
    if(err) return err;
    return result;
});

console.log(result);
