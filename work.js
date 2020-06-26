class me {
    constructor(a,b,c){
        this.name = a;
        this.weight = b;
        this.height = c;
    }
    hello(){
        console.log(`Hello ${this.name} welcome to node`);
    }
}

//exports class simply by name
module.exports = {
    me
}