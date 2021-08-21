angular.module('Contatooh').controller('ContatosController', function($scope, Contato) {
    
    $scope.contatos = [];
    $scope.filtro = '';
    $scope.message = {texto: ''}

    function buscarContatos() {
        Contato.query(contatos => {
            $scope.contatos = contatos;
            $scope.message = {};
        }, erro => {
            console.log(erro);
            $scope.message = {texto: 'Não foi possível obter a lista de contatos'};
        })
    }
    buscarContatos();

    $scope.remove = contato => {
        Contato.delete({id: contato._id}, buscarContatos, erro => {
            $scope.message = {texto: 'Não foi possível remover este contato'}
            console.log(erro);
        });
    }


});