$(document).ready(function () {
    $(".shadow1 .fa-times").on("click", function(e){
       $(".shadow1").fadeOut();
       $(".more").fadeOut();
    });
    $(".more").hide();
    $('input').each(function (i, elem) {
        var val = $(elem).val();
        if (val !== '') {
            $(elem).addClass("hasValue");
        }else{
            $(elem).removeClass("hasValue");
        }

    });
    
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
    $("a.button--more").click(function () {
        $("div.shadow1").fadeIn();
        $(".more").fadeIn();
    });
    
    
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

    $('.menu').click(function (e) {
        e.stopPropagation();
    });

    $(document).click(function () {
        $(".open").removeClass("open");
        $(".close").removeClass("close");
        $("div.shadow").fadeOut();
        $("div.shadow2").fadeOut();
    });


    $('input').on("keyup", function () {
        var val = $(this).val();
        if (val !== '') {
            $(this).addClass("hasValue");
        }else{
            $(this).removeClass("hasValue");
        }

    });
    
    $("a.etatbtn").on("click", function(e){
        $(".etat").addClass("moving");
    });
});



