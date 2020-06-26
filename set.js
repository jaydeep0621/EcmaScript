let a = new Set;
a.add(5);
a.add(200);
a.add("Hello");
a.add({
    name: "Jaydeep",
    age: 21
});
a.add(3);
console.log(a.size);


let b="the quick brown fox jump over a lazy dog";
let c = b.split("");
let d = new Set(c);
console.log(d);
console.log(d.size);