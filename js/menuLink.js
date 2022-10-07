$(document).ready(function (){
    $("#menu__inicio").click(function (){
        $('html, body').animate({
            scrollTop: ($("#inicio__ancora").offset().top - 100)
        }, 1500);
    });
});

$(document).ready(function (){
    $("#menu__projetos").click(function (){
        $('html, body').animate({
            scrollTop: ($("#projetos__ancora").offset().top - 100)
        }, 1500);
    });
});

$(document).ready(function (){
    $("#menu__habilidades").click(function (){
        $('html, body').animate({
            scrollTop: ($("#habilidades__ancora").offset().top)
        }, 1500);
    });
});
