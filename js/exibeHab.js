const caixaIcone = document.querySelectorAll('.caixa-icone');
const habilidadeIcone = document.querySelectorAll('.habilidades__icone')
const habilidadeTitulo = document.querySelectorAll('.exibicao__titulo');
const habilidadeImg = document.querySelectorAll('.exibicao__img');
const habilidadeDescricao = document.querySelectorAll('.exibicao__descricao');
const instrucao = document.querySelector('.instrucao');

/* COLOCA A HABILIDADE SELECIONADA EM EXIBIÇÃO */

for (let i=0; i<caixaIcone.length; i++) {
    caixaIcone[i].addEventListener("click", () => {
        instrucao.style.opacity = '0';
        for (let j=0; j<caixaIcone.length; j++) {
            if (j != i) {
                habilidadeIcone[j].style.transform = 'rotateY(0)'
                habilidadeTitulo[j].style.opacity = '0';
                habilidadeImg[j].style.transform = 'rotateY(90deg)'
                habilidadeDescricao[j].style.opacity = '0';
            }
        }
        habilidadeIcone[i].style.transform = 'rotateY(90deg)'
        setTimeout(() => {
        habilidadeTitulo[i].style.opacity = '1';
        habilidadeImg[i].style.transform = 'rotateY(0)'
        habilidadeDescricao[i].style.opacity = '1';
        },750);
    });
}

/* RETORNA O ITEM DE EXIBIÇÃO NA SEÇÃO HABILIDADES */

function resetaExibicaoHabilidade() {
    if (habilidadeTitulo[0].getBoundingClientRect().bottom > window.innerHeight && instrucao.style.opacity == '0') {
        instrucao.style.opacity = '1';
        for (let j=0; j<caixaIcone.length; j++) {
            habilidadeIcone[j].style.transform = 'rotateY(0)'
            habilidadeTitulo[j].style.opacity = '0';
            habilidadeImg[j].style.transform = 'rotateY(90deg)'
            habilidadeDescricao[j].style.opacity = '0';
        }
    }
}

window.addEventListener("scroll", resetaExibicaoHabilidade);