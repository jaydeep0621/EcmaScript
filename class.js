const data = require("./work.js");
//class comes inside variable data so to extend it, we have to data.me
class work extends data.me {
    constructor(a,b,c,d){
        super(a,b,c);
        this.color = d;
    }
    new(){
        console.log(`Node Welcome ${a} !!!!`);
    }
}
let you = new work('Yashu',90,6.0,"Grey");
console.log(you);
you.hello();