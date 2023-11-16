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



    
});



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