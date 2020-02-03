/* Nome de Controller -> CamelCase com letra inicial maiuscula */
/* Angular disponibiliza uma ponte de ligação entre o controller e a view chamada $scope e tudo que for "pendurado" neste objeto será enxergado pela view */
angular
    .module('alurapic')
    .controller('FotosController', function($scope, $http) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    $http
        .get('v1/fotos')
        .success((fotos) => $scope.fotos = fotos)
        .error((error) => console.log(error));

    $scope.remover = (foto) => {
        $http
            .delete(`v1/fotos/${foto._id}`)
            .success( () => {
                let indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);

                $scope.mensagem = `Foto ${foto.titulo} foi removida com sucesso`;
            })
            .error( (erro) => {
                console.log(erro);
                $scope.mensagem = `Não foi possível remover a foto: ${foto.titulo}`;
            })
    };
});