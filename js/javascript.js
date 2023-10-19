
let bright =document.querySelector(".bright");
let state=true;
bright.addEventListener("click", ()=>{
    let bright1=document.querySelector(".bright").querySelector(".bright1");

if(state){
document.body.style.background="azure";
bright1.classList.add("bright2");
state=false;
}
else{
    document.body.style.background="";
    bright1.classList.remove("bright2");
    state=true;
}
});

let mytext=document.querySelector(".buttons").querySelectorAll(".mypoint");
let inputsbox=document.getElementById("inputsbox");
for(var a=0; a < mytext.length; a++){
mytext[a].addEventListener("click", (e)=>{
let myvalues=e.target.innerText;
inputsbox.value += myvalues
})};
let Myclear =()=>{
    inputsbox.value =""
}
let  calculate=()=>{
    inputsbox.value =eval(inputsbox.value)
}
let Myclr=()=>{
    inputsbox.value =inputsbox.value.toString().slice(0,-1)
}

let Myvalues=(val)=>{
    inputsbox.value +=val
}