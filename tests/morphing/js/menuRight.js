$(document).ready(function(){
    $("button").click(function(){
        $(this).toggleClass("close");
        $(this).parent().parent().toggleClass("open");
        if($("div.shadow").css("display") == "none"){
            $("div.shadow").fadeIn();
        }else{
            $("div.shadow").fadeOut();
        }
    });
    
    $('.menu').click(function(e) {
        e.stopPropagation();
    });
    
    $(document).click(function() {
        $(".open").removeClass("open");
        $(".close").removeClass("close");
        $("div.shadow").fadeOut();
    });
});



