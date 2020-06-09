/* NAVBAR */

var  mn = $(".navbar.navbar-default");
var  mns = "navbar-fixed-top";
var hdr = $(window).height(); 

$(window).scroll(function() {
    if( $(this).scrollTop() > (hdr) ) {
        mn.addClass(mns);
    } else {
        mn.removeClass(mns);
    }
});

/* FIM NAVBAR*/


var animateButton = function (e) {
    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function(){
        e.target.classList.remove('animate');
    },700);
};

/*var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++)     
{
    bubblyButtons[i].addEventListener('click', animateButton, false);
}*/


$(document).ready(function() {
    imagemfooter();
});



$("#transicao-branco")

window.onload = function() {
    marginpercentual();
    planosAlinhamentos( window.innerWidth);
};

window.onresize = function(){
    marginpercentual();
    imagemfooter();
    planosAlinhamentos(window.innerWidth);
}


function marginpercentual(){
    var altura = $("#transicao-branco").height();
    $(".plano").css('margin-top','-'+(altura/4)+'px');
    $('#arco-vermelho').css('margin-top','-'+(altura/2)+'px');
}

function imagemfooter(){

    var alturatela = $('body').height();
    var alturaimagem = $('#img-footer').height();
    var alturaicone = $('#icone-footer').height();
    $('#img-footer').css('top', (alturatela-alturaimagem)+'px');
    $('#icone-footer').css('top', (alturatela-(alturaicone+50))+'px');

}


function planosAlinhamentos(larguratela){
    if(larguratela > 576){
        var alturaPlanoPremium = $('#planoPREMIUM').innerHeight();

        $("#planoPRO").css('min-height',alturaPlanoPremium+'px');
        $("#planoBASICO").css('min-height',alturaPlanoPremium+'px');
    }else
    {
        var martintopBasico = $('#arco-vermelho').height();
        $("#divPlanoBasico").css("margin-top", (martintopBasico-150)+'px');
        $("#divPlanoPro").css("margin-top","50px");
        $("#divPlanoPremium").css("margin-top","50px");

        $("#planoPRO").css('min-height',"0px");
        $("#planoBASICO").css('min-height',"0px");
    }

    var larguraPlanoPremium = $('#planoPREMIUM').innerWidth();
    var larguraElemento;
    var marginleft;

    var classList = document.getElementsByClassName("btn-amigo");
    for (var i = 0; i < classList.length; i++) {
        larguraElemento = classList[i].clientWidth;
        marginleft = Math.round((larguraPlanoPremium/2)-(larguraElemento/2))
        $(classList[i]).css("margin-left",marginleft+"px");
    }


}

