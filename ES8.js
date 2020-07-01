let obj = { Name:"Jaydeep", age : 21}
let key = Object.keys(obj);
let val = Object.values(obj);
let entries = Object.entries(obj);


//we are different value because object kai andar ek array bnega aur uska index 0 and 1 h//
for(let entry of entries){
    console.log(`Keys ${entry[0]} : Value ${entry[1]}`);
}
console.log(val);
console.log(key);