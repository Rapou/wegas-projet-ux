var wegasApp = angular.module('wegasApp', []);

wegasApp.controller('PlayingSessionsController', ['$scope', function ($scope) {
    $scope.info = "";
    $scope.titre = "Access playing sessions";
    
    $scope.game = {
        illustration: "img/file2.png",
        titre: "Game123 - MIT44"
    };    
        
    $scope.games = {
        "game1":{
            illustration: "img/file2.png",
            titre: "Game123 - MIT44"
        },
        "game2":{
            illustration: "img/proggame.png",
            titre: "Programming game - MIT44"
        }
    };
}]);

wegasApp.controller('ManagingSessionsController', ['$scope', function ($scope) {
    $scope.titre = "Manage training sessions";
    $scope.info = "";
}]);