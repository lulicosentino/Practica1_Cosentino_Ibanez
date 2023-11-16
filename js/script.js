$(document).ready(function(){
    
    // $(".menu").click(function() {
    //     $(".menu").toggleClass("active");
    //     $(".navbar-menu").toggleClass("active");
    // });

    $("#likerred").click(function (){
        console.log("click funciona");

        $("#likerred").attr("src", "media/galeria/icons/likedheart.svg");
        

    });

    $("#carro_modal").click(function (){
        console.log("click fucniona");

        $("#modal_container").attr("display", "flex");


    });

    $(window).resize(function(){
        console.log('a ver?');
        var width = $(window).width();
        if(width < 1200){
            $('div').removeClass('gap-5');
            $('div').addClass('gap-6');

        }
    });

    $(window).resize(function(){
        console.log('a ver?');
        var width = $(window).width();
        if(width > 1200){
            $('div').removeClass('gap-5');
            $('div').addClass('gap-3');

        }
    });



    
});

function cerrarVentana() {
    "use strict";
    document.getElementById("ventanamodal").style.display = "none";
}

function mostrarModal(){
    document.getElementById("ventanamodal").style.display = "flex";
}



// function cerrar_modal(){
//     "use strict";
//     document.getElementById("modal_container").style.display = "none";
// }

// function ventana_modal(){
//     document.getElementById("modal_container").style.display = "flex";
// }



// function cerrarVentana() {
//     "use strict";
//     document.getElementById("modal").style.display = "none";
// }