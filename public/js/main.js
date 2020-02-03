/* Módulo Principal */

/* O array do segundo parâmetro diz respeito aos módulos de dependências */
/* 'alurapic' depende de 'minhasDiretivas' */
/* $routeProvider não seria injetável se não tivesse a dependência de ngRoute */

/* 
    Com o advento do HTML5 foi criada a History API, que permite conseguirmos o mesmo resultado, mas sem o uso do #. 
    O Angular suporta a History API e podemos ativá-la através do serviço $locationProvider, que também podemos 
    pedir através do sistema de injeção de dependências
*/

angular
    .module('alurapic', ['minhasDiretivas', 'ngAnimate', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/fotos', {
                templateUrl: 'partials/principal.html',
                controller: 'FotosController'
            });

        $routeProvider
            .when('/fotos/new', {
                templateUrl: 'partials/foto.html'
            });    

        /* Caso o user digite uma rota inexistente */
        $routeProvider
            .otherwise({ redirectTo: '/fotos' });   
    });