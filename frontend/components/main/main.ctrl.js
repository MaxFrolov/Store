angular.module('app').controller('MainCtrl', function($scope, Restangular) {
  $scope.carouselInterval = 5000;
  $scope.slides = [
    {image: '/assets/assets/img/carousel-img/main-carousel-1.jpg', text: 'Welcome to lookcare store'},
    {image: '/assets/assets/img/carousel-img/main-carousel-2.jpg', text: 'Welcome to lookcare store'}
  ];

  $scope.navLabels = [
    {
      label : 'Home'
    },
    {
      label : 'New products'
    },
    {
      label : 'Sale products'
    },
    {
      label : 'Best sellers'
    },
    {
      label : 'About us'
    },
    {
      label : 'Contacts'
    }
  ];

  Restangular.all('products').getList().then(function(responce) {
    $scope.products = responce;
  });
});
