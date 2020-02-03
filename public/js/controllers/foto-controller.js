angular.module('alurapic').controller('FotoController', function($scope, $http) {

    $scope.foto = {};
    $scope.mensagem = '';

    $scope.submeter = () => {
        console.log($scope.foto);

        if($scope.formulario.$valid){
            $http
                .post('v1/fotos', $scope.foto)
                .success( () => {
                    $scope.foto = {};
                    $scope.mensagem = 'foto incluída com sucesso';
                })
                .error( (erro) => {
                    $scope.mensagem = 'não foi possível incluir a foto';
                    console.log(erro);
                });
        }
    }
});