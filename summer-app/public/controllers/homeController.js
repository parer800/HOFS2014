angular.module( 'homeController', [] ).controller('HomeCtrl', function ($scope, $http){

  $http.get('/loggedinUser').success(function(data){
    $scope.user = data.user['local'].email;
  });

});
