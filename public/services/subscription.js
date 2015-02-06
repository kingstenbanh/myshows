angular
  .module('app')
  .factory('Subscription', _Subscription);

_Subscription.$inject = ['$http']

function _Subscription($http) {
  return {
    subscribe: function(show, user) {
      return $http.post('/api/subscribe', {
        showId: show._id
      });
    },
    unsubscribe: function(show, user) {
      return $http.post('/api/unsubscribe', {
        showId: show._id
      });
    }
  };
}
