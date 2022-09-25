
var common = angular.module('common', []);
common.directive('webHeader', function () {
    return {
        restrict: 'E',
        controller: function ($scope, $rootScope) {
            //Header Scroll
            $(window).scroll(function () {
                if ($(this).scrollTop() >= 50) {
                    $('.section__header').addClass("header--scrolled");

                } else {
                    $('.section__header').removeClass("header--scrolled");
                }
            });
            //Header Menu Open
            $scope.isMenu = 1;
            $scope.toggleMenu = function () {
                if ($scope.isMenu == 0) {
                    angular.element('.nav__link').removeClass('slideInLeft');
                    $scope.isMenu = 1;
                } else if ($scope.isMenu == 1) {
                    angular.element('.nav__link').addClass('slideInLeft');
                    $scope.isMenu = 0;
                }
                angular.element('.nav__ul--full').toggleClass("open");
                angular.element('.menu__icon').toggleClass('open');
            }
        },
        templateUrl: 'web-header.html'
    };
});
common.directive('webFooter', function () {
    return {
        restrict: 'E',
        controller: function ($scope, $rootScope) {
            //Scroll To Top
            $("#scrollup").click(function () {
                $("body,html").animate(
                    {
                        scrollTop: 0,
                    },
                    500
                );
            });
        },
        templateUrl: 'web-footer.html'
    };
});
/*--- 13-05-21 -- */
$(function () {
  var $sections = $('.form-section');

  function navigateTo(index) {
    // Mark the current section with the class 'current'
    $sections
      .removeClass('current')
      .eq(index)
        .addClass('current');
    // Show only the navigation buttons that make sense for the current section:
    $('.form-navigation .previous').toggle(index > 0);
    var atTheEnd = index >= $sections.length - 1;
    $('.form-navigation .next').toggle(!atTheEnd);
    $('.form-navigation [type=submit]').toggle(atTheEnd);
  }

  function curIndex() {
    // Return the current index by looking at which section has the class 'current'
    return $sections.index($sections.filter('.current'));
  }

  // Previous button is easy, just go back
  $('.form-navigation .previous').click(function() {
    navigateTo(curIndex() - 1);
  });

  // Next button goes forward iff current block validates
  $('.form-navigation .next').click(function() {
    if ($('.demo-form').parsley().validate('block-' + curIndex()))
      navigateTo(curIndex() + 1);
  });

  // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
  $sections.each(function(index, section) {
    $(section).find(':input').attr('data-parsley-group', 'block-' + index);
  });
  navigateTo(0); // Start at the beginning
});



  // from textBoxes.html
  function sayHi(){
  var txtName = document.getElementById("txtName");
  var txtOutput = document.getElementById("txtOutput");
  var name = txtName.value;
  txtOutput.value = "Hello " + name + ",  tell us your e mail ID."
  } // end sayHi
