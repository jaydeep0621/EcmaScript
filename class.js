const data = require(./work);
class work extends me {
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