/* Nome de Controller -> CamelCase com letra inicial maiuscula */
/* Angular disponibiliza uma ponte de ligação entre o controller e a view chamada $scope e tudo que for "pendurado" neste objeto será enxergado pela view */
angular
    .module('alurapic')
    .controller('FotosController', function($scope, recursoFotos) {

    $scope.fotos = [];
    $scope.filtro = '';
    $scope.mensagem = '';

    recursoFotos.query(
        (fotos) => {
        $scope.fotos = fotos;
    }, (erro) => {
        console.log(erro);
    });

    /* $http
        .get('v1/fotos')
        .success((fotos) => $scope.fotos = fotos)
        .error((error) => console.log(error));
    */

    $scope.remover = (foto) => {
        recursoFotos.delete(
            {fotoId : foto._id},
            () => {
                let indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);

                $scope.mensagem = `Foto ${foto.titulo} foi removida com sucesso`;
            },
            (erro) => {
                console.log(erro);
                $scope.mensagem = `Não foi possível remover a foto: ${foto.titulo}`; 
            }
        );
    };
});