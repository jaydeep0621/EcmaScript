
/*document.getElementById("new").style.display = "block";
document.getElementById("btnok").onclick = function assign() {*/
    let a ="jaydeep" 
    let b =  new Map();
    for(let i=0;i<a.length;i++){
        let c=a[i];
        if(!b.has(c)){
            b.set(c,1);
        }
        else{
            b.set(c, b.get(c)+1);
        }
    }
    console.log(b);   
    /*const a = "aibcicbiuewcwcj"
    const b = a.split("");
    const c={};
    b.forEach(letter>={
        if(!c[letter]){
            c[letter] =1;
        }
        else{
            c[letter] = c[letter]+1;
        }
    })
    console.log(c);*/