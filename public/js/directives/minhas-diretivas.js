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
    });

/* ddo = direct directive object */
/* AE  = Attribute Element. diretiva pode ser usada tanto como atributo ou como elemento, adicionando em nosso DDO a propriedade *restrict com valor "AE" */
/* Convenção do Angular = na diretiva, o nome no angular é camel case, na view é com hifen. Ex: meuPainel = meu-painel */
/* para diretivas, criar scope privado */
/*  a sintaxe @ indica que estamos copiando o valor como string do atributo titulo 
    adicionando na diretiva em nossa marcação. Porém, quando o nome do atributo na diretiva 
    na marcação é igual ao nome da propriedade que guardará o seu valor, podemos deixar apenas @ */