const budget = () =>{
    let balance = 0;
    const changebal=(val)=>{
        return balance += val;
    }
    const deposit20 = () => changebal(20);
    const d = () => balance;                            //Object declaration Name should be to get connected with arrow function and pass value
    return{                                            //as value only get call by object declaration   
        deposit20: deposit20,
        d:d
    }
}
let a = budget();
console.log(a);
a.deposit20();
console.log("Balance is :",a.d());