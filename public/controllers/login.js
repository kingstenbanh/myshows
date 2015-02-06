angular
  .module('app')
  .controller('LoginController', _LoginController);

_LoginController.$inject = ['$scope', 'Auth'];

function _LoginController($scope, Auth) {
  $scope.login = function() {
    Auth.login({
      email: $scope.email,
      password: $scope.password
    });
  };
}
