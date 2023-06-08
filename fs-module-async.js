const { readFile, writeFile } = require('fs');
readFile('./test1/content/text.txt', 'utf-8', (err, resolve)=>{
    if(err){
        console.log(err);
        return;
    }
    const first = resolve
    readFile('./test1/content/text.txt', 'utf-8', (err, resolve)=>{
        if(err){
            console.log(err);
            return;
        }
        const second = resolve  
        writeFile('./test1/content/test.txt', 
        `Hello the result is ${first} and ${second}`, 
        (err, resolve)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(resolve);
        })
    })
})

