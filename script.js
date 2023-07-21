let input = document.getElementById("input-box");
let ul = document.getElementById("list-container");
function btn(){
    if(input.value === ""){
        alert("Plase Enter Name");
    }else{
        let li = document.createElement("li");
        li.innerHTML= input.value;
        ul.appendChild(li)
    }
}