/* NAVBAR */
var  mn = $(".no-gutters");
var  mns = "navbar-fixed-top";
var hdr = 76; 

$(window).scroll(function() {
    if( $(this).scrollTop() > (hdr) ) {
        $(".navbar-apphour").css('background-color','#221e35 ');
    } else {
        $(".navbar-apphour").css('background-color','transparent');
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
    //  imagemfooter();
});



$("#transicao-branco")

window.onload = function() {
    
    marginpercentual();
    alinhaFotospessoas(window.innerWidth);
    planosAlinhamentos( window.innerWidth);
    imagemfooter();
   
};

window.onresize = function(){
    marginpercentual();

    alinhaFotospessoas(window.innerWidth);
    planosAlinhamentos(window.innerWidth);
    imagemfooter();
}


function marginpercentual(){
    var altura = $("#transicao-branco").height();
    $(".plano").css('margin-top','-'+(altura/4)+'px');
    $('#arco-vermelho').css('margin-top','-'+(altura/2)+'px');
}

function imagemfooter(){

    var alturatela = $('#header').height() + $('#main').height() + $('#navbarHappy').height();
    var alturaimagem = $('#img-footer').height();
    var alturaicone = $('#icone-footer').height();
    $('#img-footer').css('top', (alturatela-alturaimagem)+'px');
    $('#icone-footer').css('top', (alturatela-(alturaicone+80))+'px');

}


function planosAlinhamentos(larguratela){
      var alturaPlanoPro = $('#planoPRO').innerHeight();
        var larguraPlano = $('#planoPRO').innerWidth();
    
    if(larguratela > 768){

      
        $('#planos').css('padding-left','15px');

      //  $("#planoPRO").css('min-height',alturaPlanoPremium+'px');
        $("#planoBASICO").css('min-height',alturaPlanoPro+'px');
        
        
        $('#planoBASICO').css('padding-left',larguraPlano*0.19);
        $('#planoPRO').css('padding-left',larguraPlano*0.19);
        
        if((larguratela < 1537) && (larguratela > 1100))
        {
            $('#planos').css('padding-left','150px');
        }
        else if((larguratela < 1099) && (larguratela > 577))
        {
            $('#planos').css('padding-left','190px');
        }
    }
    else
    {
        $('#planos').css('padding-left','15px');
        var margintopBasico = $('#arco-vermelho').height();
        $("#divPlanoBasico").css("margin-top", (margintopBasico-150)+'px');
        $("#divPlanoPro").css("margin-top","50px");
        $("#divPlanoPremium").css("margin-top","50px");

        $("#planoPRO").css('min-height',"0px");
        $("#planoBASICO").css('min-height',"0px");
           $('#planoBASICO').css('padding-left',larguraPlano*0.15);
        $('#planoPRO').css('padding-left',larguraPlano*0.15);
    }

    var larguraPlanoPro = $('#planoPRO').innerWidth();
    var larguraElemento;
    var marginleft;

    var classList = document.getElementsByClassName("btn-amigo");
    for (var i = 0; i < classList.length; i++) {
        larguraElemento = classList[i].clientWidth;
        marginleft = Math.round((larguraPlanoPro/2)-(larguraElemento/2))
        $(classList[i]).css("margin-left",marginleft+"px");
    }


}


function alinhaFotospessoas( larguraTela)
{
    larguraFoto = $('#foto-pessoas').width();
    alturaFoto = $('#foto-pessoas').height();
    if ( larguraTela > 992)
    {
        $("#foto-pessoas").css('max-width',"200%");
    }else
    {
        $("#foto-pessoas").css('max-width',"100%");
    }

    if(larguraTela > 992)
    {
        $("#texto-proposito").css('padding-top',alturaFoto*0.3);
    }else
    {
        $("#texto-proposito").css('padding-top','20px');
    }
}

