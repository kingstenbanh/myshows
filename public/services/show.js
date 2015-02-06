angular
  .module('app')
  .factory('Show', _Show);

_Show.$inject = ['$resource'];

function _Show($resource) {
  return $resource('/api/shows/:_id');
};
