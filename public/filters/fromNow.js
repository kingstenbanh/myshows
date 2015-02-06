angular
  .module('app').
filter('fromNow', _fromNow);

function _fromNow() {
  return function(date) {
    return moment(date).fromNow();
  }
};
