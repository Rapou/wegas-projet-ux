wegasApp.directive('barActions', function () {
    return {
        restrict: 'C',
        scope: {
            titre: '@'
        },
        templateUrl: "pages/elements/_barActions.html",
        link: function (scope, element, attrs) {
            $(".menu--workspace").hide();
            $(".menu--parametres").hide();

            $(".menu__head").click(function (e) {
                e.preventDefault();
                $(".menu--workspace").toggle();
            });

            $(".btn--menu").click(function (e) {
                e.preventDefault();
                $(".menu--workspace").toggle();
            });

            $(".btn--parametres").click(function (e) {
                $(".menu--parametres").toggle();
                if ($(this).hasClass("active")) {
                    $(this).removeClass("active");
                } else {
                    $(this).addClass("active");
                }
            });
            
            $(".btn--profil").on("click", function(e){
                e.preventDefault();
                 $(".btn--parametres").removeClass("active");
                $(".menu--parametres").fadeOut();
                $("body").append($("<div>").addClass("shadow").hide().fadeIn());
                var contenuModal = $(".modal--profil").find(".modal__contenu");
                $("body").append($("<div>").addClass("modal").append(contenuModal).hide().fadeIn());
            });
        }
    };
});

wegasApp.directive('partie', function () {
    return {
        restrict: 'C',
        scope: {
            'illustration': '@',
            'nom': '@'
        },
        templateUrl: "pages/elements/_partie.html"
    };
});

wegasApp.directive('session', function ($rootScope) {
    return {
        restrict: 'C',
        templateUrl: "pages/elements/_session.html",
        link: function (scope, element, attrs) {
            var toolEdit = element[0].querySelector('.tool--edit');
            $(toolEdit).on("mouseenter", function(event){
                $(".info").text("Edit the session");
            });
            $(toolEdit).on("mouseout", function(event){
                $(".info").text("");
            });
            var toolArchive = element[0].querySelector('.tool--archive');
            $(toolArchive).on("mouseenter", function(event){
                $(".info").text("Archive the session");
            });
            $(toolArchive).on("mouseout", function(event){
                $(".info").text("");
            });
            var toolArchive = element[0].querySelector('.tool--manage');
            $(toolArchive).on("mouseenter", function(event){
                $(".info").text("Manage the session");
            });
            $(toolArchive).on("mouseout", function(event){
                $(".info").text("");
            });
            
            $(toolEdit).on("click", function(event){
                event.preventDefault();
                $(".session").addClass("session--disabled");
                $(".session").removeClass("session--selected");
                var that = $(this).parent().parent();
                that.removeClass("session--disabled");
                that.delay(500).addClass("session--selected");
                $(".session--disabled").fadeOut();
            });
            
        }
    };
});