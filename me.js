class calculator{
    constructor(a){
        this.name = a;
    }
    static add(a,b){
        return a+b;
    }
    static multiply(a,b){
        return a*b;
    }
}
calculator.prototype.age;
calculator.prototype.info = function() {
    return `Hi ${this.name} Welcome to Calculator`
};
calculator.prototype.dob;
let a = new calculator(`Jaydeep`)
console.log(calculator.info());



/*calculator.age = 21;
calculator.dob = "21-06-1999"
let c = calculator.add(5,7);
console.log("Add is :",c);
let b = calculator.multiply(5,7);
console.log("Multiply is :",b)
console.log("Ages is :",calculator.age);
console.log("Date of Birth is :",calculator.dob);*/
