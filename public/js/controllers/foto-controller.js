angular
    .module('alurapic')
    .controller('FotoController', function($scope, $routeParams, recursoFotos) {

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
                if($scope.foto._id){

                    recursoFotos.update(
                        {fotoId: $scope.foto._id},
                        $scope.foto,
                        () => {
                            $scope.mensagem = `A foto ${$scope.foto.titulo} foi alterada com sucesso`;
                        },
                        () => {
                            console.log(erro);
                            $scope.mensagem = `Não foi possível alterar a foto ${$scope.foto.titulo}`;
                        }
                    );

                    /*
                    $http
                        .put(`v1/fotos/${$scope.foto._id}`, $scope.foto)
                        .success( () => {
                            
                        })
                        .error( (erro) => {

                        });
                    */
                }else{
                    recursoFotos.save(
                        $scope.foto, 
                        () => {
                            $scope.foto = {};
                            $scope.mensagem = 'Foto cadastrada com sucesso';
                        }, 
                        (erro) => {
                            console.log(erro);
                            $scope.mensagem = 'Não foi possível cadastrar a foto';
                        });
                }
            }
        }
    });