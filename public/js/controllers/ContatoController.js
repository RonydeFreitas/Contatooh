angular.module('Contatooh').controller('ContatoController', function($scope, $routeParams, Contato) {
    
    if($routeParams.contatoId) {
        Contato.get({id: $routeParams.contatoId}, contato => {
            $scope.contato = contato;
        }, erro => {
            $scope.message = {
                texto: 'Não foi possível obter o contato'
            };
            console.log(erro);
        })
    } else {
        $scope.contato = new Contato();
    }

    $scope.salva = () => {
        $scope.contato.$save()
        .then(() => {
            $scope.message = {texto: 'Salvo com sucesso!'};
            $scope.contato = new Contato();
        })
        .catch(erro => {
            $scope.message = {texto: 'Não foi possível salvar!'};
        })
    }
    Contato.query(contatos => {
        $scope.contatos = contatos;
    })
});