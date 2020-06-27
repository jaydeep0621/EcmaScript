function display(let a){
    document.getElementById("write").value+=a;
}
function cal(){
    let x = document.getElementById("write").value 
			let y = eval(x) 
			document.getElementById("write").value = y 
}