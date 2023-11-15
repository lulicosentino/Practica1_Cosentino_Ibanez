$(document).ready(function(){
    
    $(".menu").click(function() {
        $(".menu").toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    function changeImage() {
        "use strict";
        console.log("hovering in n out");
    
        var oldSrc = document.getElementById("letsee").getAttribute("src");
    
    
        if (oldSrc === "imgs/entradas-20.svg"){
            document.getElementById("letsee").setAttribute("src", "imgs/flor_button.svg");
        }
        else{
            document.getElementById("letsee").setAttribute("src", "imgs/entradas-20.svg");
            console.log("¡¡vuelvo a como era antes!!");
        }
    
    
    }
    



    
});
