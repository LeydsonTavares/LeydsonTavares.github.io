var app = angular.module('sitePessoal', ['ngRoute']);

app.controller('appController', function($scope) {


    $scope.listOrcamentos = [];


    $scope.nome = 'Leydson Tavares';
    $scope.cargo = 'Development Software by Stefanini';
    $scope.foto = 'img/myImagem.jpg';
    $scope.ano = new Date().getFullYear();
    $scope.resumo = ['Graduado 6º período no curso de Sistemas de Informação',
        'Monitor na disciplina cálculo Diferencial e Integral',
        'Aluno com CRE 9, 04 '
    ];
    $scope.academico = [{
            data: '(2014 - 2017)',
            formacao: 'Bacharel em Sistemas de Informação na UniFacisa'
        },
        {
            data: '(2017)',
            formacao: 'Estagio na Stefanini'
        }
    ];

    $scope.solicitarOrcamento = function(slcOrcamento) {
        $scope.listOrcamentos.push(slcOrcamento);
        console.log($scope.listOrcamentos);

    };
    $scope.limparCampos = function() {

    }

});