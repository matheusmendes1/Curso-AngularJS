angular
    .module('minhasDiretivas', [])
    .directive('meuPainel', function() {

        let ddo = {};
        ddo.restrict = 'AE';

        ddo.scope = {
            titulo : '@titulo',
            url : '@url'
        }

        ddo.transclude = true;

        ddo.templateUrl = 'js/directives/meu-painel.html';

        return ddo;
    })
    .directive('minhaFoto', function() {

        let ddo = {};
        ddo.restrict = "AE";

        ddo.scope = {
            titulo: '@',
            url: '@'
        };

        ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';    

        return ddo;
    })
    .directive('meuBotaoPerigo', function() {

        let ddo = {};
        ddo.restrict = "E";

        ddo.scope = {
            nome: '@',
            acao : '&'
        }

        ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()" style="margin-top: 1rem;">{{nome}}</button>';

        return ddo;
    })
    .directive('meuFocus', function() {

        let ddo = {};
        ddo.restrict = "A";

        ddo.link = (scope, element) => {
            
            scope.$on('fotoCadastrada', () => {
                element[0].focus();
            });
        };

        return ddo;
    })
    .directive('meusTitulos', function() {
        var ddo = {};
        ddo.restrict = 'E';

        ddo.template = '<ul><li ng-repeat="titulo in titulos">{{titulo}}</li></ul>';
        
        ddo.controller = function($scope, recursoFotos) {
            recursoFotos.query(function(fotos) {
                $scope.titulos = fotos.map(function(foto) {
                    return foto.titulo;
                });    
            });
        };
        return ddo;
    });

/* ddo = direct directive object */

/* AE  = Attribute Element. diretiva pode ser usada tanto como atributo ou como elemento, adicionando em nosso DDO a propriedade *restrict com valor "AE" */

/* Convenção do Angular = na diretiva, o nome no angular é camel case, na view é com hifen. Ex: meuPainel = meu-painel */

/* para diretivas, criar scope privado */

/*  a sintaxe @ indica que estamos copiando o valor como string do atributo titulo 
    adicionando na diretiva em nossa marcação. Porém, quando o nome do atributo na diretiva 
    na marcação é igual ao nome da propriedade que guardará o seu valor, podemos deixar apenas @ */

/* 
    Um ponto importante: depois do nosso botão ganhar o foco, $scope.focado deve receber o valor false, 
    caso contrário nosso botão ficará com foco eternamente! Atribuir este valor false será papel da diretiva. 
    É por esta razão que não podemos usar @ e nem & em seu escopo isolado, modificadores que já usamos em outras diretivas. 
    Usaremos =, que criará uma relação bidirecional, isto é, FotoController e a diretiva meuFocus trabalharão com a mesma referência para $scope.focado
*/