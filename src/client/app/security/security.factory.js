/**
 * Created by sergiomarcial on 7/3/16.
 */
(function () {
  'use strict';

  angular.module('app.security')
    .factory('securityFactory', securityFactory);

  /* @ngInject */
  function securityFactory($http, ENV_VAR, APP_CONFIG) {
    var service = {
      getToken: getToken
    };

    var env = ENV_VAR.ENV.toLowerCase();

    var server;
    if (env === 'local') {
      server = APP_CONFIG.server.local + APP_CONFIG.api.local;
    } else {
      server = APP_CONFIG.server.prod + APP_CONFIG.api.prod;
    }

    return service;

    function getToken() {
      return $http.get(server + '/getToken')
        .then(getTokenSuccess)
        .catch(getTokenFailure);
    }

    function getTokenSuccess(response) {
      return response;
    }

    function getTokenFailure(err) {
      return err;
    }
  }

})();
