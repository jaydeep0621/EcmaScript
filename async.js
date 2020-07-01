async function async_one(){
    return "Hello";
}

async function async_two(){
    if(false)
   throw new Error ("Program Not Binding");
   else
   return "Solved Issue"
}

async function async_three(){
    let a = await async_one;
    async_one().then(response => console.log(response));
    let b = await async_two;
    async_two().catch(error => console.log(error));
    async_two().then(response => console.log(response));
}


async_three();


/*Combine Declare a Project */

async function async_four(){
    const[res_one, res_two] = await Promise.all(
        [async_one(),async_two()]
    )

    console.log(res_one,res_two);
}

async_four();
