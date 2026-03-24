const nome="Albert Magalhães"
const cargo="Desenvolvedor | Ciência da Computação"

let i=0
let j=0

function digitarNome(){

if(i<nome.length){

document.getElementById("nome").innerHTML+=nome.charAt(i)

i++

setTimeout(digitarNome,100)

}else{

digitarCargo()

}

}

function digitarCargo(){

if(j<cargo.length){

document.getElementById("cargo").innerHTML+=cargo.charAt(j)

j++

setTimeout(digitarCargo,80)

}

}

digitarNome()


function imprimirCurriculo(){

window.print()

}


/* scroll animation */

function reveal(){

let reveals=document.querySelectorAll(".reveal")

reveals.forEach(el=>{

let windowHeight=window.innerHeight
let elementTop=el.getBoundingClientRect().top

if(elementTop<windowHeight-100){

el.classList.add("active")

}

})

}

window.addEventListener("scroll",reveal)


particlesJS("particles-js",{

particles:{

number:{value:80},

color:{value:"#00ffff"},

shape:{type:"circle"},

size:{value:3},

move:{speed:2}

}

})
