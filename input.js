const readline = require("readline")
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
r1.question("Enter Your Name" , function(a){
    r1.question("Enter Your State", function(state){
        r1.question("Enter Your Country", function(country){
            console.log(`Hello ${a} you are from ${state} and ${country}`)
            r1.close();
        })
    });
});
r1.on("close", function(){
    console.log("Bye Bye");
    process.exit(0);
})

