angular
    .module('meusServicos', ['ngResource'])
    .factory('recursoFotos', function($resource) {

        return $recursoFoto = $resource(
            'v1/fotos/:fotoId',
            null,
            {
                update: {
                    method: 'PUT'
                }
            }
        );

    })
    .factory('cadastroDeFotos', function(recursoFotos, $q) {

        let servico = {};

        servico.cadastrar = (foto) => {
            return $q( (resolve, reject) => {

                if(foto._id){

                    recursoFotos.update(
                        {fotoId: foto._id},
                        foto,
                        () => {
                            resolve({
                                mensagem: `Foto ${foto.titulo} atualizada com sucesso`,
                                inclusao: false
                            });
                        },
                        (erro) => {
                            console.log(erro);
                            reject({
                                mensagem: `Não foi possível alterar a foto ${foto.titulo}`
                            });
                        }
                    )
                }else{

                    recursoFotos.save(
                        foto,
                        () => {
                            resolve({
                                mensagem: `Foto ${foto.titulo} foi incluida com sucesso`,
                                inclusao: true
                            });
                        },
                        (erro) => {
                            console.log(erro);
                            reject({
                                mensagem: `Não foi possível incluir a foto ${foto.titulo}`
                            });
                        }
                    )
                }

            });
        };

        return servico;
    })

/* $q permite criar promises */

/*
    O serviço $q recebe em seu construtor uma função com dois parâmetros: resolve e reject. 
    Ambos são funções, sendo que a primeira recebe como valor os dados que desejamos acessar chamando a função then de nossa promise, 
    e para a segunda passamos qualquer informação de erro que temos acesso através da função catch.
*/

/*
    Uma promise contém o resultado futuro de uma ação. Quando a ação é bem sucedida, temos acesso ao valor retornado da ação, 
    através da função then e erros através da função catch. Apesar de $http suportar as funções success e error, por baixo dos panos uma promise é utilizada.
*/