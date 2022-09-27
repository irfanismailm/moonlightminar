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
        startDelay: 200,
        waitUntilVisible: true
    })
        .type('Hello')
        .pause(5000)
        .delete(5)
        .pause(250)
        .type('أهـــلا')
        .pause(5000)
        .delete(8)
        .pause(250)
        .type('Hola')
        .pause(5000)
        .delete(4)
        .pause(250)
        .options({ speed: 100, deleteSpeed: 75, loop: true })
        .go();

    new TypeIt('#impressive', {
        speed: 100,
        startDelay: 200,
        waitUntilVisible: true
    })
        .type('Reach')
        .pause(2000)
        .delete(3)
        .pause(100)
        .type('actions')
        .pause(2000)
        .delete(9)
        .pause(100)
        .type('Standard')
        .pause(2000)
        .delete(3)
        .pause(100)
        .type('out')
        .pause(2000)
        .delete(8)
        .pause(100)
        .type('Life')
        .pause(2000)
        .delete(2)
        .type('kes')
        .pause(2000)
        .delete(5)
        .type('Worthy')
        .pause(2000)
        .delete(6)
        .type('Success')
        .pause(2000)
        .delete(7)
        .options({ speed: 50, deleteSpeed: 150, loop: true })
        .go();
        

}]);
