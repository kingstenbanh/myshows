angular
  .module('app')
  .factory('Auth', _Auth);

_Auth.$inject = ['$http', '$location', '$rootScope', '$cookieStore', '$alert'];

function _Auth($http, $location, $rootScope, $cookieStore, $alert) {
  $rootScope.currentUser = $cookieStore.get('user');
  $cookieStore.remove('user');

  function login(user) {
    return $http.post('/api/login', user)
      .success(function(data) {
        $rootScope.currentUser = data;
        $location.path('/');

        $alert({
          title: 'Cheers!',
          content: 'You have successfully logged in.',
          placement: 'top-right',
          type: 'success',
          duration: 3
        });
      })
      .error(function() {
        $alert({
          title: 'Error!',
          content: 'Invalid username or password.',
          placement: 'top-right',
          type: 'danger',
          duration: 3
        });
      });
  }

  function signup(user) {
    return $http.post('/api/signup', user)
      .success(function() {
        $location.path('/login');

        $alert({
          title: 'Congratulations!',
          content: 'Your account has been created.',
          placement: 'top-right',
          type: 'success',
          duration: 3
        });
      })
      .error(function(response) {
        $alert({
          title: 'Error!',
          content: response.data,
          placement: 'top-right',
          type: 'danger',
          duration: 3
        });
      });
  }

  function logout() {
    return $http.get('/api/logout').success(function() {
      $rootScope.currentUser = null;
      $cookieStore.remove('user');
      $alert({
        content: 'You have been logged out.',
        placement: 'top-right',
        type: 'info',
        duration: 3
      });
    });
  }
  return {
    login: login,
    signup: signup,
    logout: logout
  };
}
