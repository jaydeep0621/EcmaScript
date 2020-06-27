//Function Factories
const addSuffix = (x) =>{
    const addpefix = (y) =>{
        return y + x;
    }
    return addpefix;

}
let add = addSuffix( ` Kumar`);
let a = add(`Jaydeep`);
console.log(a);