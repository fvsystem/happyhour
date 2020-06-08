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
    paddingpercentual();
};

window.onresize = function(){
    paddingpercentual();
    imagemfooter();
}


function paddingpercentual(){
    var altura = $("#img-transicao").height();
    $("#col-valores").css('margin-top','-'+(altura/2)+'px');
    $("#col-arco-vermelho").css('margin-top','-'+(altura/2)+'px');
}

function imagemfooter(){
    
     var alturatela = $('body').height();
    var alturaimagem = $('#img-footer').height();
    var alturaicone = $('#icone-footer').height();
    $('#img-footer').css('top', (alturatela-alturaimagem)+'px');
    $('#icone-footer').css('top', (alturatela-(alturaicone+50))+'px');
       
}
