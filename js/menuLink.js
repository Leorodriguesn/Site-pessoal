$(document).ready(function (){
    $("#menu__inicio").click(function (){
        $('html, body').animate({
            scrollTop: ($("#inicio__ancora").offset().top - 100)
        }, 1500);
        menuMobile.classList.toggle('menu-mobile__ativo');
    });
});

$(document).ready(function (){
    $("#menu__cursos").click(function (){
        $('html, body').animate({
            scrollTop: ($("#cursos__ancora").offset().top - 100)
        }, 1500);
        menuMobile.classList.toggle('menu-mobile__ativo');
    });
});

$(document).ready(function (){
    $("#menu__projetos").click(function (){
        $('html, body').animate({
            scrollTop: ($("#projetos__ancora").offset().top - 100)
        }, 1500);
        menuMobile.classList.toggle('menu-mobile__ativo');
    });
});

$(document).ready(function (){
    $("#menu__habilidades").click(function (){
        $('html, body').animate({
            scrollTop: ($("#habilidades__ancora").offset().top)
        }, 1500);
        menuMobile.classList.toggle('menu-mobile__ativo');
    });
});

$(document).ready(function (){
    $("#botao__vertodos").click(function (){
        $('html, body').animate({
            scrollTop: ($("#referencia__scroll-cursos").offset().top - 100)
        }, 500);
    });
});
