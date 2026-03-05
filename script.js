const nome = "Albert Magalhães";
const cargo = "Desenvolvedor em Formação | Ciência da Computação";
let i=0; let j=0;

function digitarNome(){
  if(i<nome.length){
    document.getElementById("nome").innerHTML += nome.charAt(i);
    i++; setTimeout(digitarNome,100);
  } else { digitarCargo(); }
}

function digitarCargo(){
  if(j<cargo.length){
    document.getElementById("cargo").innerHTML += cargo.charAt(j);
    j++; setTimeout(digitarCargo,80);
  }
}
digitarNome();

function imprimirCurriculo() {
    // Caminho do PDF
    const url = './docs/curriculo.pdf'; 
    const win = window.open(url, '_blank'); // Abre em nova aba
    win.focus();
    // Descomente abaixo se quiser abrir direto a caixa de impressão
    // win.print();
}

// Animação fade-in do Sobre Mim
const sobreSection = document.getElementById('sobre');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.3 });

observer.observe(sobreSection);
function scrollProjetos(){
  document.getElementById("projetos").scrollIntoView({behavior:"smooth"});
}

particlesJS("particles-js",{
  particles:{
    number:{value:80},
    color:{value:"#00ffff"},
    shape:{type:"circle"},
    opacity:{value:0.5},
    size:{value:3},
    line_linked:{enable:true,distance:150,color:"#00ffff",opacity:0.4},
    move:{enable:true,speed:2}
  }
});
