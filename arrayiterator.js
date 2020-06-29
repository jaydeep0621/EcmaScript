/*const arrayIterator = (array) => {
    let index = 0
    return{
        next :() => {
            if(index<array.length){
                let next = array[index];
                index ++;
                return next;
            }

        }
    }
}

let a = arrayIterator([1,2,3,4,5]);
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());*/

function* genearotor(){
   yield* arguments;
}

var it = genearotor(1,2,3,5,6);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);


/*yield* = is to take all value entered from user and print one by one;*/