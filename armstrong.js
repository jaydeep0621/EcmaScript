const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
console.log("*****ArmStrong Number*****")
r1.question("To Check Whether Number is ArmStrong Number or Not",function(name){
    let b,c,d=0;
    for(let i=name;i>0;i=parseInt(i/10)){
        b=i%10;
        c=b*b*b;
        d=d+c;
    }
    if(d==name){
        console.log(`${name} is ArmStrong Number`);
    }
    else{
        console.log(`${name} is not a ArmStrong Number`);
    }
    setTimeout(() =>{
        r1.close();

    },5000)
    

});
r1.on("close",function(){
    process.exit(0);
})