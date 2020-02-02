/* Nome de Controller -> CamelCase com letra inicial maiuscula */
/* Angular disponibiliza uma ponte de ligação entre o controller e a view chamada $scope e tudo que for "pendurado" neste objeto será enxergado pela view */
angular
    .module('alurapic')
    .controller('FotosController', function($scope) {

    $scope.foto = {
        titulo : 'Leão',
        url : 'http://www.fundosanimais.com/Minis/leoes.jpg'
    };

});