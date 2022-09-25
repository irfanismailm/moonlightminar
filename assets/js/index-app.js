var app = angular.module("index-app", ['common']);
app.controller("IndexCtrl", ["$scope", "$http", "$window", "$location", "$anchorScroll", "$timeout", function ($scope, $http, $window, $location, $anchorScroll, $timeout) {

    $scope.isLoaded = 0;
    $scope.load = function () {
        $timeout(function () {
            $scope.isLoaded = 1;
            //Initialize wow.js
            new WOW().init();
        }, 2000);
    }

    $scope.isStep = 0;

    $scope.nextStep = function (step) {
        if (step == 0) {
            $scope.isStep = 0;
        } else if (step == 1) {
            $scope.isStep = 1;
        } else if (step == 2) {
            $scope.isStep = 2;
        } else if (step == 3) {
            $scope.isStep = 3;
        }
    }

    $scope.filterWork = function (type) {
        angular.element('.filter-work').removeClass('active');
        angular.element('.' + type).addClass('active');
        angular.element('#' + type).addClass('active');
    }

    new TypeIt('#greeting', {
        speed: 50,
        startDelay: 900,
        waitUntilVisible: true
    })
        .type('Hello')
        .pause(5000)
        .delete(5)
        .pause(250)
        .type('Bonjour')
        .pause(5000)
        .delete(7)
        .pause(250)
        .type('Hola')
        .pause(5000)
        .delete(4)
        .pause(250)
        .options({ speed: 100, deleteSpeed: 75, loop: true })
        .go();

    new TypeIt('#impressive', {
        speed: 50,
        startDelay: 900,
        waitUntilVisible: true
    })
        .type('Impressive')
        .pause(5000)
        .delete(10)
        .pause(250)
        .type('Responsive')
        .pause(5000)
        .delete(10)
        .pause(250)
        .type('Right')
        .pause(5000)
        .delete(5)
        .pause(250)
        .type('Good')
        .pause(5000)
        .delete(4)
        .pause(250)
        .type('Desirable')
        .pause(5000)
        .delete(9)
        .type('Lucrative')
        .pause(5000)
        .delete(9)
        .type('Worthy')
        .pause(5000)
        .delete(6)
        .type('Successful')
        .pause(5000)
        .delete(10)
        .type('Sexy')
        .pause(5000)
        .delete(4)
        .pause(250)
        .options({ speed: 100, deleteSpeed: 75, loop: true })
        .go();
        

}]);
