angular.module('myApp', []).controller('myController', function($scope, $http) {
    $scope.userDetails = null;

    $scope.getUserDetails = function() {
      $http.get('https://api.github.com/users')
        .then(function(response) {
          $scope.userDetails = response.data;
        })
        .catch(function(error) {
          console.error('Error fetching user details:', error);
        });
    };
});
