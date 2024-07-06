const titulo = document.getElementById('logo-texto');
const texto = titulo.textContent;
titulo.textContent = ''; // Limpa o conteúdo original para adicionar letra por letra

for (let i = 0; i < texto.length; i++) {
    const span = document.createElement('span'); // Cria um elemento <span> para cada letra
    span.textContent = texto[i]; // Define o texto do <span> como a letra atual
    span.style.transitionDelay = `${0.1 * i}s`; // Adiciona um pequeno atraso para cada letra
    titulo.appendChild(span); // Adiciona o <span> ao título
}

// Após um pequeno intervalo, mostra as letras gradualmente
setTimeout(function() {
    const spans = titulo.querySelectorAll('span');
    spans.forEach((span, index) => {
        setTimeout(function() {
            span.style.opacity = '1';
        }, 100 * index);
    });
}, 500); // Inicia a animação após 500ms (meio segundo)
