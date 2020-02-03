angular
    .module('alurapic')
    .controller('FotoController', function($scope, $routeParams, cadastroDeFotos, recursoFotos) {

        $scope.foto = {};
        $scope.mensagem = '';

        if($routeParams.fotoId) {

            recursoFotos.get(
                {fotoId: $routeParams.fotoId}, 
            (foto) => {
                $scope.foto = foto; 
            }, 
            (erro) => {
                console.log(erro);
                $scope.mensagem = 'Não foi possível obter a foto'
            });
        }

        $scope.submeter = () => {

            if($scope.formulario.$valid){

                cadastroDeFotos
                    .cadastrar($scope.foto)
                    .then( (dados) => {
                        $scope.mensagem = dados.mensagem;
                        if(dados.inclusao) $scope.fotos = {};
                    })
                    .catch( (dados) => {
                        $scope.mensagem = dados.mensagem;
                    })
            }

        }
    });