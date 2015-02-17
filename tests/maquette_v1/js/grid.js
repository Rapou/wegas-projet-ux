$(document).ready(function(){
    $( "body" ).keypress(function(event) {
        if(event.which === 167){
            if($("div").is(".grid")){
                $(".grid").remove();
            }else{
                $("body").append($("<div>").addClass("grid"));
            }
        }
    });
});

