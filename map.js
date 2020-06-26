let a = new Map();
let b = "string hello";
let c= {
    name:"Jaydeep",
    age:"21",
    gender:"m"
};
let d = function(){
    return `hello ${c.name}`;
}
a.set(c,"return and object type");
a.set(b,"return and written type");
a.set(d,"Hello")
console.log(a);