angular
  .module('app')
  .controller('SignupController', _SignupController);

_SignupController.$inject = ['$scope', 'Auth'];

function _SignupController($scope, Auth) {
  $scope.signup = function() {
    Auth.signup({
      email: $scope.email,
      password: $scope.password
    });
  };
}
