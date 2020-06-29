// It Break the run of compilation, Make cause pause and resume we use keyword with yield and next respectively//

/*function* generator(){
    yield `a`   ;
    yield `b`
}
let generate = generator();
console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);*/


function* gen(){
    let count =0;
    while(true){
        count += 2;
        let reset = yield count;
        if(reset){
            count = 100;
        }
    }
}
let work = gen();
console.log(work.next().value);
console.log(work.next().value);
console.log(work.next().value);
console.log(work.next().value);
console.log(work.next().value);
console.log(work.next(true).value);
console.log(work.next().value);
console.log(work.next().value);