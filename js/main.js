const botaoMenu = document.querySelector('.cabecalho__botao-menu');
const menuMobile = document.querySelector('.menu__lista');

const botaoVerMais = document.querySelector('.projetos__caixa-botao');
const botaoVerMaisAux = document.querySelector('.projetos__botao-vermais')
const projetosVerMais = document.querySelectorAll('.projetos__vermais');
const projetosTitulo = document.querySelector('.projetos__titulo');

/* FUNCIONAMENTO DOS BOTÕES */

botaoMenu.addEventListener("click", () => {
    menuMobile.classList.toggle('menu-mobile__ativo');
});

botaoVerMais.addEventListener("click", () => {
    projetosVerMais.forEach(element => {
        element.classList.toggle('projetos__caixa');
        element.classList.toggle('projetos__vermais');
    });
    botaoVerMais.classList.toggle('projetos__caixa-botao-ativo')
    botaoVerMais.classList.toggle('projetos__caixa-botao')
    if (botaoVerMaisAux.innerHTML == 'Ver mais') {
        botaoVerMaisAux.innerHTML = 'Ver menos';
        botaoVerMaisAux.style.color = '#3d445a';
    } else {
        botaoVerMaisAux.innerHTML = 'Ver mais';
        botaoVerMaisAux.style.color = '#FFF';
    }
});

/* RETORNA O VER MAIS DOS PROJETOS */

function escondeProjetosMais () {
    if ((botaoVerMais.getBoundingClientRect().top < 0 && botaoVerMaisAux.innerHTML == 'Ver menos') || (projetosTitulo.getBoundingClientRect().bottom > window.innerHeight && botaoVerMaisAux.innerHTML == 'Ver menos')) {
        projetosVerMais.forEach(element => {
            element.classList.remove('projetos__caixa');
            element.classList.add('projetos__vermais');
        });
        botaoVerMais.classList.remove('projetos__caixa-botao-ativo')
        botaoVerMais.classList.add('projetos__caixa-botao')
        botaoVerMaisAux.innerHTML = 'Ver mais';
        botaoVerMaisAux.style.color = '#FFF';
    }
}

window.addEventListener("scroll", escondeProjetosMais);