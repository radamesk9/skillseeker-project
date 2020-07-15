// a primeira função do jquery é a função que fica na navbar lá em cima
// ela é responsável por esconder e mostrar o conteudo do botão de login
$(document).ready(function() {
    $('#login-trigger').click(function() {
        $(this).next('#login-content').slideToggle();
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) $(this).find('span').html('Login &#x25B2;')
        else $(this).find('span').html('Login &#x25BC;')
    })
});

// função para abrir o menu do footer de contato
$(document).ready(function() {
    $("#hide").click(function() {
        $("p").hide(500);
    });
    $("#show").click(function() {
        $("p").show(500);
    });
});

/*essa função é responsável por esconder o conteúdo no rodapé, junto com a função do arquivo html que está marcado como comentario*/


//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// When the user clicks the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


//when user clicks the button 'lightmode' the site will be lit.
 $(document).ready(function() {
  $('.day-night').click(function() {
    $('body').toggleClass('night');
  });
});