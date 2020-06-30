let p = new Promise((resolve,reject) => {

    resolve("Resolve Promise Data")
   setTimeout(()=> {
        resolve("Resolve Printing")
        },3000 )
})

p.then(response => console.log(response))
.catch(resolve => console.log(resolve))

console.log("Error Message");


/* Promise is Build in method which provide resolve and reject method to deal with different problem*/