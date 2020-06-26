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
//initialized the class
new calculator();

//calling method by class variable which is a
console.log(a.info());
