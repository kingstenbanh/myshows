angular
  .module('app')
  .controller('NavbarController', _NavbarController);

_NavbarController.$inject = ['$scope', 'Auth'];

function _NavbarController($scope, Auth) {
  $scope.logout = function() {
    Auth.logout();
  };
}
