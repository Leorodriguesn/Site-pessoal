const texto = document.querySelector('.inicio__texto');
const texto2 = document.querySelector('.inicio__texto2');
const botaoLinkedin = document.querySelector('.link-linkedin');

function typeWriter(elemento, elemento2) {
    const txtArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    var afterTexto = document.createElement("style");
    afterTexto.innerHTML = ".inicio__texto::after { content: '|';} ";
    document.head.appendChild(afterTexto);
    txtArray.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 1000 + 75 * i);
    });
    const txtArray2 = elemento2.innerHTML.split('');
    elemento2.innerHTML = '';
    txtArray2.forEach((letra2, j) => {
        setTimeout(() => {
            afterTexto.innerHTML = ".inicio__texto2::after { content: '|';}"
            elemento2.innerHTML += letra2;
        }, txtArray.length * 75 + 1000 + 75 * j);
    });
    setTimeout(() => {
        botaoLinkedin.style.animationPlayState = 'running';
    }, txtArray.length * 75 + 1000 + 75 * txtArray2.length)
}

typeWriter(texto, texto2);

