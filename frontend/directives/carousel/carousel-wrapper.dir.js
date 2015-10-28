angular.module('app').directive('carouselWrapper', function() {

  return {
    restrict: 'E',
    templateUrl: '/assets/directives/carousel/carousel-wrapper.html',
    slides: '=',
    carouselInterval: '=',
    controller: function($scope) {
      console.log($scope.carouselInterval);
    }

  }
});
