const botaoMenu = document.querySelector('.cabecalho__botao-menu');
const menuMobile = document.querySelector('.menu__lista');

const botaoVerMais = document.querySelector('.projetos__caixa-botao');
const botaoVerMaisAux = document.querySelector('.projetos__botao-vermais')
const projetosVerMais = document.querySelectorAll('.projetos__vermais');
const projetosTitulo = document.querySelector('.projetos__titulo');

const botaoVerTodos = document.querySelector('.cursos__caixa-botao')
const botaoVerTodosAux = document.querySelector('.cursos__botao-vermais')
const cursosVerMais = document.querySelectorAll('.cursos__vermais');
const cursosTitulo = document.querySelector('.cursos__titulo');

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

botaoVerTodos.addEventListener("click", () => {
    cursosVerMais.forEach(element => {
        element.classList.toggle('cursos__item');
        element.classList.toggle('cursos__vermais');
    });
    botaoVerTodos.classList.toggle('cursos__caixa-botao-ativo')
    botaoVerMais.classList.toggle('cursos__caixa-botao')
    if (botaoVerTodosAux.innerHTML == 'Ver todos') {
        botaoVerTodosAux.innerHTML = 'Ver menos';
        botaoVerTodosAux.style.color = '#3d445a';
    } else {
        botaoVerTodosAux.innerHTML = 'Ver todos';
        botaoVerTodosAux.style.color = '#FFF';
    }
});

/* RETORNA O VER MAIS DOS CURSOS E PROJETOS */

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

function escondeCursosMais () {
    if ((botaoVerTodos.getBoundingClientRect().top < 0 && botaoVerTodosAux.innerHTML == 'Ver menos') || (cursosTitulo.getBoundingClientRect().bottom > window.innerHeight && botaoVerTodosAux.innerHTML == 'Ver menos')) {
        cursosVerMais.forEach(element => {
            element.classList.remove('cursos__item');
            element.classList.add('cursos__vermais');
        });
        botaoVerTodos.classList.remove('cursos__caixa-botao-ativo')
        botaoVerTodos.classList.add('cursos__caixa-botao')
        botaoVerTodosAux.innerHTML = 'Ver todos';
        botaoVerTodosAux.style.color = '#FFF';
    }
}

window.addEventListener("scroll", escondeProjetosMais);
window.addEventListener("scroll", escondeCursosMais);