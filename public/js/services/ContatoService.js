angular.module('Contatooh').factory('Contato', ($resource) => {
    return $resource('/contatos/:id');
})