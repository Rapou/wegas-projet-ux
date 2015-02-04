$(document).ready(function () {
    // Cache le contenu de la modale "more"
    $(".more").hide();
    
    // Permet de fermer la modale "more"
    $(".shadow1 .fa-times").on("click", function(e){
       $(".shadow1").fadeOut();
       $(".more").fadeOut();
    });
    // Gère le positionnement du label lié à l'input lors du chargement de la page.
    $('input').each(function (i, elem) {
        var val = $(elem).val();
        if (val !== '') {
            $(elem).addClass("hasValue");
        }else{
            $(elem).removeClass("hasValue");
        }

    });
    
    // Permet d'ouvrire et fermer les onglets dans le menu "settings"
    $(".section h3").on("click", function(e){
       var section = $(this).parent()[0];
       $(".section").each(function(i, elem){
            if(elem === section){
                $(elem).addClass("open");
            }else{
                $(elem).removeClass("open");
            }
       });
    });
    
    // Ouvre la modale "more" lors du click sur le btn.
    $("a.button--more").click(function () {
        $("div.shadow1").fadeIn();
        $(".more").fadeIn();
    });
    
    // Permet d'ouvrire et fermer le menu "workspace"
    $(".grid-button").click(function () {
        $(this).toggleClass("close");
        $(this).parent().parent().toggleClass("open");
        if ($("div.shadow").css("display") == "none") {
            $("div.shadow").fadeIn();
            $(".menu--settings").css("z-index", "49");
        } else {
            $("div.shadow").fadeOut();
            $(".menu--settings").css("z-index", "51");
        }
    });
    
    // Permet d'ouvrire et fermer le menu "settings"
     $(".dots-button").click(function () {
        $(this).toggleClass("close");
        $(this).parent().parent().toggleClass("open");
        if ($("div.shadow").css("display") == "none") {
            $("div.shadow").fadeIn();
            $(".menu--workspace").css("z-index", "49");
        } else {
            $("div.shadow").fadeOut();
            $(".menu--workspace").css("z-index", "51");
        }
    });

    // Empêche la fermeture des menus lors du click d'ouverture.
    $('.menu').click(function (e) {
        e.stopPropagation();
    });

    // Permet fermer les menus et faire disparaire les ombres lors d'un click hors du menu. 
    $(document).click(function () {
        $(".open").removeClass("open");
        $(".close").removeClass("close");
        $("div.shadow").fadeOut();
        $("div.shadow2").fadeOut();
    });

    // Permet de gérer la position du label d'un input. 
    $('input').on("keyup", function () {
        var val = $(this).val();
        if (val !== '') {
            $(this).addClass("hasValue");
        }else{
            $(this).removeClass("hasValue");
        }

    });
});



