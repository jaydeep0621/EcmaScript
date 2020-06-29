const readline = require("readline");
const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
r.question("Enter the Table", function(table){
    console.log(`Table of ${table}`);
    for(i=1;i<11;i++){
        var num = i*table;
        console.log(`${table} * ${i} = ${num}`);
    } 
    r.close();   
    });
r.on("close",function(){
    process.exit(0);
})