angular.module('Contatooh')
.factory('meuInterceptor', ($location, $q) => {
    var interceptor = {
        responseError: (resposta) => {
            if(resposta.status == '401') {
                $location.path('/auth');
            }
            return $q.reject(resposta);
        }
    }

    return interceptor;
})