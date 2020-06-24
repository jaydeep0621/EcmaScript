let value = [10, 20, 30];
let doubled = value.map((double) => double*2);
console.log(doubled);
export{doubled};

const level = [20,50,30,10,40];
let high = level.filter((n) =>{
    return n < 30;
})
console.log(high);

setTimeout(() => {
    console.log(level);
   
}, 3000);